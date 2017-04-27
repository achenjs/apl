import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Demo from '@/components/demo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
});
