<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      stripe
      fit
      highlight-current-row
    >
      <el-table-column align="center" :label="$t('views.manager.tableHead')[0]" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.manager.tableHead')[1]">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('views.manager.tableHead')[2]" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.account }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.manager.tableHead')[3]">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime | timeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('views.manager.tableHead')[4]">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.updateTime | timeFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('views.manager.tableHead')[5]" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/manager'
import { parseTime } from '@/utils/index'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'gray',
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
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-table {
    box-shadow: 0 0 10px 5px #B7BFCE;
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
