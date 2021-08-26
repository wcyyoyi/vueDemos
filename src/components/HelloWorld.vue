<template>
  <div class="hello">
    <el-row>
      <el-button type="primary" v-for="(item,index) in itemList" :key="index" @click="changePage(item.url)">
        {{item.name}}</el-button>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data() {
      return {
        itemList: [{
            name: 'echarts',
            url: 'echarts'
          },
          {
            name: '动画',
            url: 'animation'
          },
          {
            name: '人脸识别',
            url: 'tracking'
          }
        ]
      }
    },
    methods: {
      changePage(url) {
        console.log(url);
        this.$router.push(url);
      }
    }
  }
</script>

<style scoped>

</style>
