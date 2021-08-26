import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Echarts from '../components/Echarts.vue'
import Animation from '../components/Animation.vue'
import Tracking from '../components/Tracking.vue'
export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },
    ,
    {
      path: '/Tracking',
      name: 'tracking',
      component: Tracking
    }
  ]
})
