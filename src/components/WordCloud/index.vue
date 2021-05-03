<template>
  <ve-worldcloud :data="chartData"/>
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
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
