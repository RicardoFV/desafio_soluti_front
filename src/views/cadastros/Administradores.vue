<template>
  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Novo Administrador"></titulo>

    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nome">Nome :</label>
          <input id="nome" class="form-control" placeholder="Nome Administrador"/>
        </div>
        <div class="form-group col-md-6">
          <label for="tipo">Tipo :</label>
          <select id="tipo"  class="form-control">
            <option value="ativa">Ativa</option>
            <option value="inativa">Inativa</option>
          </select>
        </div>
      </div>
      <!-- botao de envio -->
      <div class="form-row">
        <div class="col-6 mt-md-1">
          <my-button tipo="submit" acao="Cadastrar" id="bt_salvar" design="btn btn-block btn-success" />
        </div>
        <div class="col-6 mt-md-1">
          <router-link class="btn btn-block btn-success" to="/home">Cancelar</router-link>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  // importando os componentes para uso
  import Titulo from "../../components/titulo/Titulo.vue";
  import Button from "../../components/button/Button.vue";
  import Mensagem from "../../components/mensagem/Memsage.vue";
  export default {
    components:{
      // utilizando os componentes
      MyButton: Button,
      titulo: Titulo,
      mensagem: Mensagem
    }
  }

</script>

<style>

</style>
