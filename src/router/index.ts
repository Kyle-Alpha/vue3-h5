import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {useAppStoreWithOut} from '@/stores/app';
import { defineAsyncComponent } from 'vue';
const useApp = useAppStoreWithOut()
console.log(useApp);
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/dashBoard',
    component: defineAsyncComponent(() => import('@/views/Index.vue')),
    children:[
      {
        path:'/dashBoard',
        name:'Dashboard',
        component: defineAsyncComponent(() => import('@/views/dashBoard.vue')),
      },
      {
        path:'/todo',
        name:'Todo',
        component: defineAsyncComponent(() => import('@/views/todo.vue')),
      },
      {
        path:'/application',
        name:'Application',
        component: defineAsyncComponent(() => import('@/views/application.vue')),
      },
      {
        path:'/home',
        name:'Home',
        component: defineAsyncComponent(() => import('@/views/home.vue')),
      },
    ]
  },
  {
    path: '/player',
    name: 'Player',
    component: defineAsyncComponent(() => import('@/views/Home.vue'))
  },
  {
    path: '/list',
    name: 'List',
    component: defineAsyncComponent(() => import('@/views/List.vue')),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: defineAsyncComponent(() => import('@/views/Detail.vue')),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cropper',
    name: 'Cropper',
    component: defineAsyncComponent(() => import('@/views/pages/cropper/index.vue')),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: defineAsyncComponent(() => import('@/views/pages/charts/index.vue')),
    meta: {
      keepAlive: false
    }
  },
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
