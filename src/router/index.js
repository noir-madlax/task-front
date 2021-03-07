import Vue from 'vue'
import Router from 'vue-router'
import list from "../views/list/list";

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail/index'),
      props: true
    }
  ]
})
