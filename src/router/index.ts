import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {useAppStoreWithOut} from '@/stores/app';
const useApp = useAppStoreWithOut()
console.log(useApp);
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/dashBoard',
    component: () => import('@/views/index.vue'),
    children:[
      {
        path:'/dashBoard',
        name:'Dashboard',
        component: () => import('@/views/dashBoard.vue'),
        meta:{
          level:1
        }
      },
      {
        path:'/todo',
        name:'Todo',
        component: () => import('@/views/todo.vue'),
        meta:{
          level:1
        }
      },
      {
        path:'/application',
        name:'Application',
        component: () => import('@/views/application.vue'),
        meta:{
          level:1
        }
      },
      {
        path:'/home',
        name:'Home',
        component: () => import('@/views/home.vue'),
        meta:{
          level:1
        }
      },
    ]
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/pages/list/list.vue'),
    meta: {
      keepAlive: true,
      level:2
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/pages/list/detail.vue'),
    meta: {
      keepAlive: true,
      level:3
    }
  },
  {
    path: '/cropper',
    name: 'Cropper',
    component: () => import('@/views/pages/cropper/index.vue'),
    meta: {
      keepAlive: false,
      level:2
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/views/pages/charts/index.vue'),
    meta: {
      keepAlive: false,
      level:2
    }
  },
  {
    path: '/player',
    name: 'Player',
    component: () => import('@/views/pages/player/index.vue'),
    meta: {
      keepAlive: true,
      level:2
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to:any, from:any, next) => {
  if(to.meta.keepAlive){
    useApp.addCacheView(to.name as string)
  }
  if(from.meta.keepAlive&&(from.meta.level>to.meta.level)){
    useApp.removeCacheView(from.name as string)
  }
  next()
})

export default router
