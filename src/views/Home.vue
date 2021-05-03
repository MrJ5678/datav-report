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

export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    MapView,
    SalesView
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
