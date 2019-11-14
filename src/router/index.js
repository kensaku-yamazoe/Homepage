import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BootstrapVue from 'bootstrap-vue'

// 各ページへ
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import practice from '@/components/practice'

Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/practice',
      name: 'practice',
      component: practice
    }
  ]
})
