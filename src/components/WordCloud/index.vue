<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="settings"/>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '建中网络',
          value: 100
        }, {
          name: '建中网络',
          value: 10
        }, {
          name: '建中网络',
          value: 20
        }, {
          name: '建中网络',
          value: 30
        }, {
          name: '建中网络',
          value: 40
        }, {
          name: '建中网络',
          value: 50
        }, {
          name: '建中网络',
          value: 60
        }, {
          name: '建中网络',
          value: 70
        }, {
          name: '建中网络',
          value: 80
        }, {
          name: '建中网络',
          value: 90
        }]
      },
      settings: {
        color: ['rgba(97, 216, 0, 0.7)', 'rgba(204, 178, 26, 0.7)', 'rgba(245, 166, 35, 0,7)', 'rgba(156, 13, 113, 0.7)']
      }
    }
  }
}
</script>

<style scoped>

</style>
