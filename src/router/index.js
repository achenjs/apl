import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/components/Home'], resolve)
const Demo = resolve => require(['@/components/demo'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/demo',
          name: 'Demo',
          component: Demo
        }
      ]
    }
  ]
})
