import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/components/Index'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/Home'),
          children: [
            {
              path: '/home',
              name: 'msglist',
              component: () => import('@/components/MsgList/MsgList')
            },
            {
              path: '/search',
              name: 'search',
              component: () => import('@/components/Navs/Search')
            }
          ]
        },
        {
          path: '/location',
          name: 'location',
          component: () => import('@/components/Location/Location')          
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('@/components/Messages/Messages')          
        },
        {
          path: '/me',
          name: 'me',
          component: () => import('@/components/Me/Me')          
        },
        {
          path: '/photo',
          name: 'photo',
          component: () => import('@/components/Photo/Photo')          
        }
      ]
    }
  ]
})
