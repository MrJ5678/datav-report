<template>
<div class="common-card">
  <div class="title">{{title}}</div>
  <div class="value">{{ value }}</div>
  <div class="chart">
    <slot></slot>
  </div>
  <div class="line" />
  <div class="total">
    <slot name="footer"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  props: {
    title: String,
    value: String
  }
}
</script>

<style lang="scss">
.emphasis {
  margin-left: 5px;
  color: #000000;
  font-weight: 700;
}
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 80px;
  //background-color: red;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  color: #666;
  font-size: 12px;
}
</style>
