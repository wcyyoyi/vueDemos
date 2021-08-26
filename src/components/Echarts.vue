<template>
  <div class="echarts">
    <el-button type="primary" @click="goBack()">返回</el-button>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div id="demo" :style="{width:'500px',height:'500px'}"></div>
  </div>
</template>

<script>
  import Echarts from './Echarts.vue'
  export default {
    name: 'Echarts',
    mounted() {
      this.drawLine();
      this.drawDemo();
    },
    methods: {
      goBack() {
        history.back(-1);
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '在Vue中使用echarts'
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      drawDemo() {
        let demoChart = this.$echarts.init(document.getElementById("demo"));
        demoChart.setOption({
          title: {
            text: '堆叠区域图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      }
    }
  }
</script>

<style>
</style>
