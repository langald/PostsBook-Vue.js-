import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import E404 from '@/components/E404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '*',
      component: E404
    }
  ],
  mode: 'history'
})
