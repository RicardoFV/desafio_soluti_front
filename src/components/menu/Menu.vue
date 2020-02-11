<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="isLoginRoute">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#textoNavbar"
      aria-controls="textoNavbar"
      aria-expanded="false"
      aria-label="Alterna navegação"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="textoNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Pagina Inicial</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Cadastros</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="/administradores">Administradores</router-link>
            <router-link class="dropdown-item" to="/empresas">Empresas</router-link>
            <router-link class="dropdown-item" to="/contratos">Contratos</router-link>
            <router-link class="dropdown-item" to="/usuarios">Usuários</router-link>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav mr-sm-5">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown3"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Configuraçoes</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item"to="">Alterar Dados</router-link>
            <router-link class="dropdown-item" to="" :click="autenticacao.alterarDados()">Alterar Senha</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Sair</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import Autenticacao from "../../acessos/Autenticacao";
export default {
  data(){
      return{
        autenticacao : new Autenticacao()
      }
  },
  computed: {
    // Verifica se a tela usada é a login, se for nao aparece menu
    isLoginRoute() {
      return this.$route.path !== "/";
    }
  }
};
</script>

<style>
</style>
