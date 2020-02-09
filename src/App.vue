<template>
    <div id="app">
      <menu-principal :rotas="routes"/>
      <transition name="pagina">
         <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  // COMPONETES DECLARADOS DE FORMA GLOBAL
  import { routes } from "./routes";
  import Menu from '../src/components/menu/Menu.vue'
export default {
    components:{
      "menu-principal" :Menu
    },
  data() {
    return {
      // chama a rota fazendo o filtro de que pagina se encontra
      routes: routes.filter(routes => routes.menu)
    };
  }
}
</script>

<style>

</style>
