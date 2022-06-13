import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {store} from './stores/index';
import { Button, Loading, Empty,Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
app.use(store).use(router)
app.use(Button).use(Loading).use(Empty).use(Tabbar).use(TabbarItem)
app.mount('#app')
