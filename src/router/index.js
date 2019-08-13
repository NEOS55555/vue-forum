import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bar',
      name: 'homepage',
      component: homepage
    }
  ]
})
