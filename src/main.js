import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'

// INSTANCIA O VUEROUTER
Vue.use(VueRouter)
// REGISTRANDO DE FORMA GLOBAL O VUERESOURCE
Vue.use(VueResource);
// trantando o link da aplicação padrao
Vue.http.options.root = 'http://localhost:8181';
// CHAMA A ROTA E INSTANCIA O SEU OBJETO
const router = new VueRouter({
    routes,
    mode:'history'
})

//CHAMA A INSTANCIA DO VUE
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
