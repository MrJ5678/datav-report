<template>
  <div class="home">
    <top-view/>
    <sales-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'
import SalesView from '@/components/SalesView'
import { wordCloud, screenData, mapScatter } from '@/api/index'

export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    MapView,
    SalesView
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getMapData: this.getMapData,
      getWordCloud: this.getWordCloud
    }
  },
  mounted() {
    screenData().then(data => { this.wordCloud = data }).catch(err => console.log(err))
    wordCloud().then(data => { this.reportData = data }).catch(err => console.log(err))
    mapScatter().then(data => { this.mapData = data }).catch(err => console.log(err))
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  }
}
</script>
<style>
.home {
  width: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
