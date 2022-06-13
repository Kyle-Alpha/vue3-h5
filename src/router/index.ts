import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {useAppStoreWithOut} from '@/stores/app';
const useApp = useAppStoreWithOut()
console.log(useApp);
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/dashBoard',
    component: () => import('@/views/Index.vue'),
    children:[
      {
        path:'/dashBoard',
        name:'Dashboard',
        component: () => import('@/views/dashBoard.vue'),
      },
      {
        path:'/todo',
        name:'Todo',
        component: () => import('@/views/todo.vue'),
      },
      {
        path:'/application',
        name:'Application',
        component: () => import('@/views/application.vue'),
      },
      {
        path:'/home',
        name:'Home',
        component: () => import('@/views/home.vue'),
      },
    ]
  },
  {
    path: '/player',
    name: 'Player',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/List.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue'),
    meta: {
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(from, to);
  if(to.meta.keepAlive){
    useApp.addCacheView(to.name as string)
    // console.log(to.meta.fromViews);
    
  }
  next()
})

export default router
