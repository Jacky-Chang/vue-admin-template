<template>
  <div class="app-container">
    <el-form ref="queryData" :inline="true" :model="queryData" label-width="80px" size="medium">
      <el-form-item :label="$t('views.user.query.name')" prop="name">
        <el-input v-model="queryData.name" :placeholder="$t('views.user.query.namePlaceholder')" />
      </el-form-item>
      <el-form-item :label="$t('views.user.query.account')" prop="account">
        <el-input v-model="queryData.account" :placeholder="$t('views.user.query.accountPlaceholder')" />
      </el-form-item>
      <el-form-item :label="$t('views.user.query.status')" prop="status">
        <el-select v-model="queryData.status" :placeholder="$t('views.user.query.selectStatus.info')">
          <el-option :label="$t('views.user.query.selectStatus.all')" value="" />
          <el-option :label="$t('views.user.query.selectStatus.enabled')" value="1" />
          <el-option :label="$t('views.user.query.selectStatus.disabled')" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="query">{{ $t('views.user.opt.query') }}</el-button>
        <el-button type="danger" @click="reset('queryData')">{{ $t('views.user.opt.reset') }}</el-button>
        <el-button type="primary" @click="createUser">{{ $t('views.user.opt.create') }}</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      stripe
      fit
      highlight-current-row
    >
      <el-table-column align="center" type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item :label="$t('views.user.tableHead')[0]">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item :label="$t('views.user.tableHead')[1]">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item :label="$t('views.user.tableHead')[2]">
              <span>{{ props.row.account }}</span>
            </el-form-item>
            <el-form-item :label="$t('views.user.tableHead')[3]">
              <span>{{ props.row.password }}</span>
            </el-form-item>
            <el-form-item :label="$t('views.user.tableHead')[4]">
              <span>{{ props.row.status | statusFilter }}</span>
            </el-form-item>
            <el-form-item :label="$t('views.user.tableHead')[5]">
              <span>{{ props.row.createTime | timeFilter }}</span>
            </el-form-item>
            <el-form-item :label="$t('views.user.tableHead')[6]">
              <span>{{ props.row.updateTime | timeFilter }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.user.tableHead')[0]" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.user.tableHead')[1]">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('views.user.tableHead')[2]" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.account }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" :label="$t('views.user.tableHead')[4]" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusTypeFilter">
            {{ getStatusInfo(scope.row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.user.tableHead')[5]">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime | timeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.user.tableHead')[6]">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.updateTime | timeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('views.user.tableHead')[7]" align="center">
        <template slot-scope="scope">
          <a href="javascript:void(0);" @click="crackCourse(scope.row.id)">{{ $t('views.user.opt.crackCourse') }}</a>
          <el-divider direction="vertical" />
          <a href="javascript:void(0);" @click="updateUser(scope.row)">{{ $t('views.user.opt.update') }}</a>
          <el-divider direction="vertical" />
          <a href="javascript:void(0);" @click="enable(scope.row)">{{ $t('views.user.opt.enable') }}</a>
          <el-divider direction="vertical" />
          <a href="javascript:void(0);" @click="disable(scope.row)">{{ $t('views.user.opt.disable') }}</a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      hide-on-single-page
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
      :current-page.sync="queryData.pageNum"
      :page-size.sync="queryData.pageSize"
      @size-change="sizeChange"
      @current-change="currentChange"
    />

    <template v-if="userDialogVisible">
      <el-dialog :title="getOptTitle()" :visible.sync="userDialogVisible">
        <el-form :model="userData">
          <el-form-item :label="$t('views.user.data.name')" label-width="80px">
            <el-input v-model="userData.name" autocomplete="off" />
          </el-form-item>
          <el-form-item :label="$t('views.user.data.phone')" label-width="80px">
            <el-input v-model="userData.phone" autocomplete="off" />
          </el-form-item>
          <el-form-item :label="$t('views.user.data.account')" label-width="80px">
            <el-input v-model="userData.account" autocomplete="off" />
          </el-form-item>
          <el-form-item :label="$t('views.user.data.password')" label-width="80px">
            <el-input v-model="userData.password" autocomplete="off" />
          </el-form-item>
          <el-form-item :label="$t('views.user.data.sites')" label-width="80px">
            <el-select v-model="userData.sites" multiple :placeholder="$t('views.user.data.sites')">
              <el-option
                v-for="item in siteList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-row>
            <el-button @click="dialogCancel">{{ $t('views.user.opt.cancel') }}</el-button>
            <el-button type="primary" @click="dialogConfirm">{{ $t('views.user.opt.confirm') }}</el-button>
          </el-row>
        </div>
      </el-dialog>
    </template>
  </div>
</template>

<script>
import { getList, create, update, enable, disable } from '@/api/user'
import { parseTime } from '@/utils/index'

export default {
  filters: {
    statusTypeFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'info',
        2: 'danger'
      }
      return statusMap[status]
    },
    timeFilter(time) {
      return parseTime(time)
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      userDialogVisible: false,
      queryData: {
        name: null,
        account: null,
        status: null,
        pageNum: 1,
        pageSize: 10
      },
      userOptType: null, // user操作类型： 1 创建 2 修改 3 查看
      userData: {
        name: null,
        phone: null,
        account: null,
        password: null,
        sites: null,
        status: 1
      },
      userDataCopy: {},
      siteList: [
        {
          id: 1,
          name: '秀秀网'
        },
        {
          id: 2,
          name: '麻瓜网'
        }
      ]
    }
  },
  created() {
    Object.assign(this.userDataCopy, this.userData)
    this.fetchData()
  },
  methods: {
    fetchData(param) {
      this.listLoading = true
      getList(param).then(response => {
        this.list = response.data.list
        this.total = response.data.total
        this.listLoading = false
      })
    },
    query() {
      this.fetchData(this.queryData)
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    getStatusInfo(status) {
      if (status === 1) {
        return this.$t('views.user.query.selectStatus.enabled')
      } else if (status === 0) {
        return this.$t('views.user.query.selectStatus.disabled')
      } else if (status === 2) {
        return this.$t('views.user.query.selectStatus.deleted')
      } else {
        return this.$t('views.user.query.selectStatus.all')
      }
    },
    sizeChange(size) {
      this.queryData.pageNum = 1
      this.query()
    },
    currentChange(pageNum) {
      this.query()
    },
    getOptTitle() {
      return this.$t('views.user.opt.' + this.userOptType)
    },
    createUser() {
      this.userOptType = 'createUser'
      this.userDialogVisible = true
    },
    updateUser(item) {
      this.userOptType = 'updateUser'
      this.userDialogVisible = true
      Object.assign(this.userData, item)
    },
    dialogConfirm() {
      if (this.userOptType === 'createUser') {
        create(this.userData)
      }
      if (this.userOptType === 'updateUser') {
        update(this.userData)
      }
      this.userDialogVisible = false
      this.query()
    },
    dialogCancel() {
      this.userDialogVisible = false
      debugger
      Object.assign(this.userData, this.userDataCopy)
    },
    enable(item) {
      enable(item.id).then(response => {
        item.status = 1
      })
    },
    disable(item) {
      disable(item.id).then(response => {
        item.status = 0
      })
    },
    crackCourse(id) { // 刷课流程，未实现
      alert('crack course success')
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-table {
    box-shadow: 0 0 0.5px 0.5px #B7BFCE;
  }
  .table-expand {
    font-size: 0;
    label {
      width: 90px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
  .el-pagination {
    margin-top: 24px;
    text-align: center;
  }
  .el-row {
    margin-bottom: 24px;
  }
  .el-dialog {
    .el-form {
      padding: 30px 50px 30px 0;
    }
  }
</style>
