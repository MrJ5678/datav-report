<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings"></ve-liquidfill>
</template>

<script>
function getColor(value) {
  return value > 0 && value <= 0.5 ? '#61d800b3'
    : value > 0.5 && value < 0.8 ? '#ccb21ab3'
      : value >= 0.8 ? '#f12f1cb3' : '#c7c7cb'
}

export default {
  name: 'index',
  data() {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [{
          title: 'rate',
          percent: 0.38
        }]
      },
      chartSettings: {}
    }
  },
  mounted() {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          label: {
            formatter: (v) => {
              return `${Math.floor(v.data.value * 100)}%`
            },
            textStyle: {
              fontSize: 36,
              color: '#999',
              fontWeight: 'normal'
            },
            insideColor: '#fff',
            position: ['50%', '50%']
          },
          outline: {
            itemStyle: {
              borderColor: '#a4a4a4',
              borderWidth: 1,
              color: 'none',
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          amplitude: 8,
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }

    }
  }
}
</script>

<style scoped>

</style>
