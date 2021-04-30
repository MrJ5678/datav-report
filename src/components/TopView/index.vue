<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '@/components/TotalSales'
import TodayUsers from '@/components/TodayUsers'
import TotalOrders from '@/components/TotalOrders'
import TotalUsers from '@/components/TotalUsers'

export default {
  name: 'index',
  components: {
    TotalSales,
    TodayUsers,
    TotalOrders,
    TotalUsers
  }
}
</script>

<style scoped>

</style>
