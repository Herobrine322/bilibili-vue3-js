import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import { Tab, Tabs, Swipe, SwipeItem } from 'vant'
import '@/mock/index'

const app = createApp(App);
app.use(Tab).use(Tabs).use(Swipe).use(SwipeItem)


app.use(router).mount('#app')
