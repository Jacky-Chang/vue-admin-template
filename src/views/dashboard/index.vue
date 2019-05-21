<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎<strong>{{ name }}</strong>使用后台管理系统</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    margin: 240px;;
    text-align: center;
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
