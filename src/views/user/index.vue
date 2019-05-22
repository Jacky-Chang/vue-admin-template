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
          <el-option :label="$t('views.user.query.selectStatus.enable')" value="1" />
          <el-option :label="$t('views.user.query.selectStatus.disable')" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="query()">{{ $t('views.user.query.query') }}</el-button>
        <el-button type="danger" @click="reset('queryData')">{{ $t('views.user.query.reset') }}</el-button>
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
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      hide-on-single-page
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
    />
  </div>
</template>

<script>
import { getList } from '@/api/user'
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
      queryData: {
        name: null,
        account: null,
        status: null
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(param) {
      this.listLoading = true
      getList(param).then(response => {
        this.list = response.data
        this.total = this.list.length
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
        return this.$t('views.user.query.selectStatus.enable')
      } else if (status === 0) {
        return this.$t('views.user.query.selectStatus.disable')
      } else if (status === 2) {
        return this.$t('views.user.query.selectStatus.delete')
      } else {
        return this.$t('views.user.query.selectStatus.all')
      }
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
</style>
