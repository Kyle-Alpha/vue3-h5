import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {store} from './stores/index';
import { Button, Loading, Empty,Tabbar, TabbarItem,List,Cell, CellGroup  } from 'vant'
const app = createApp(App)
app.use(store).use(router)
app.use(Button).use(Loading).use(Empty).use(Tabbar).use(TabbarItem).use(List).use(CellGroup).use(Cell)
app.mount('#app')
