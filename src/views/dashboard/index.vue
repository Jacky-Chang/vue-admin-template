<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      {{ $t('views.dashboard.message.prefix') }}<strong>{{ name }}</strong>
      <br>
      {{ $t('views.dashboard.message.suffix') }}
      <em><strong>{{ $t('views.dashboard.message.sysname') }}</strong></em>
    </div>
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
    margin: 180px;;
    text-align: center;
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
