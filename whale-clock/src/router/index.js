import Vue from 'vue'
import Router from 'vue-router'
import WhaleClock from '@/components/WhaleClock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'whale',
      component: WhaleClock
    }
  ]
})
