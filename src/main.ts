import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import {store} from './stores/index';
import {registerGlobComp} from '@/components/registerGlobComp';
import '@/style/reset.less';
import '@/style/tailWind.css';

const app = createApp(App)
app.use(store).use(router)
registerGlobComp(app)
app.mount('#app')
