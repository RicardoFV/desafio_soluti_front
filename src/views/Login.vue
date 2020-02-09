<template>
  <div class="container">
    <titulo estilo="text-center mt-2 mb-5" titulo="Sistema de Gestão de Contratos - GSC" />
    <div class="row">
      <div class="col-sm-3">
        <!-- espaço vazio -->
      </div>
      <div class="col-sm-6">
        <div class="text-center">
          <img class="mb-5" src="../assets/soluti-logo.jpg" alt="logo do sistema" />
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">E-mail</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Seu email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
          <div class="form-group col-sm-12 mb-4">
            <router-link
              to="/usuarios"
              class="badge badge-secondary col-auto float-right col-sm-6 ml-1"
            >Novo Cadastro</router-link>
            <router-link
              to
              class="badge badge-secondary col-auto float-right col-sm-6"
            >Esqueceu a senha</router-link>
          </div>
          <router-link :to="{name:'home'}">
            <my-button tipo="submit" acao="Acessar" design="btn btn-success btn-block mt-4" />
          </router-link>
        </form>
      </div>
      <div class="col-sm-3">
        <!-- espaço vazio -->
      </div>
    </div>
  </div>
</template>

<script>
  // importando os componentes
  import Button from "../components/button/Button.vue";
  import Titulo from "../components/titulo/Titulo.vue";
  export default {
    // chamado o componete
    components: {
      MyButton: Button,
      titulo: Titulo
    }
  };
</script>
<style>
</style>
