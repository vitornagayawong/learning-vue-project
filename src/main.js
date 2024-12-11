import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const Vue = createApp(App)
Vue.use(router) //adiconando as configurações de rotas à instância do Vue
Vue.mount('#app')
