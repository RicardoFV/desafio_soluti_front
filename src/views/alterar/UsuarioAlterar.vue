<template>
  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Alterar Usuário"></titulo>
    <form @submit.prevent="alterarDados()">
      <div class="form-row">
        <input type="hidden" v-model="usuarios.id" />
        <div class="form-group col-md-6">
          <label for="nome_completo">Nome Completo :</label>
          <input type="text" v-model="usuarios.nome_completo" id="nome_completo" class="form-control" placeholder="Digite seu nome"/>
          <!-- usando componentes -->
          <mensagem :mensagem="msg"></mensagem>
        </div>
        <div class="form-group col-md-6">
          <label for="email">E-mail :</label>
          <input type="email" id="email" v-model="usuarios.email" class="form-control" placeholder="Digite seu E-mail"/>
          <!-- usando componentes -->
          <mensagem :mensagem="msg"></mensagem>
        </div>
        <div class="form-group col-md-6">
          <label for="senha">Senha :</label>
          <input type="password" id="senha" v-model="usuarios.senha" class="form-control" placeholder="Digite sua Senha"/>
          <!-- usando componentes -->
          <mensagem :mensagem="msg"></mensagem>
        </div>
        <div class="form-group col-md-6">
          <label for="repetir_senha">Repita sua Senha :</label>
          <input type="password" id="repetir_senha" class="form-control" placeholder="Repita sua Senha"/>
          <!-- usando componentes -->
          <mensagem :mensagem="msg"></mensagem>
        </div>
        <div class="col-6 mt-md-1">
          <my-button tipo="submit" acao="Alterar" id="bt_salvar" design="btn btn-block btn-success" />
        </div>
        <div class="col-6 mt-md-1">
          <router-link class="btn btn-block btn-success" to="/">Cancelar</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  // importando os componentes para uso
  import Titulo from "../../components/titulo/Titulo.vue";
  import Button from "../../components/button/Button.vue";
  import Usuarios from "../../model/Usuarios";
  import ServiceUsuarios from "../../service/ServiceUsuarios";
  import Mensagem from "../../components/mensagem/Memsage.vue";
  export default{
    components:{
      // utilizando os componentes
      MyButton: Button,
      titulo: Titulo,
      mensagem: Mensagem
    },
    data(){
      return{
        msg: "",
        usuarios : new Usuarios(),
        id:this.$route.params.id
      }
    },
    computed:{

    },
    methods:{
      alterarDados() {
         this.serviceUser.atualizar(this.usuarios)
         .then(()=>{
           this.usuarios = new Usuarios()
           this.$router.push('home')
         })
      },
    },
    created() {
      // instancia o meu serviço usuario atraves do id salvo na session
      this.serviceUser = new ServiceUsuarios(this.$resource)
        this.serviceUser.consultarPorId(sessionStorage.getItem('id_usuario')).then(user => this.usuarios = user)
    },
  }
</script>
<style>

</style>
