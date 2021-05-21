export default {
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
  computed: {
    reportData() {
      return this.getReportData()
    },
    salesToday() {
      return this.reportData && this.reportData.salesToday
    },
    salesGrowthLastDay() {
      return this.reportData && this.reportData.salesGrowthLastDay
    },
    salesGrowLastMonth() {
      return this.reportData && this.reportData.salesGrowLastMonth
    },
    salesLastDay() {
      return this.reportData && this.reportData.salesLastDay
    }
  }
}
