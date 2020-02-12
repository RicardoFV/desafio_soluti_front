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
        <form @submit.prevent="logar()">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Seu email"
              v-model="usuarios.email"
            />
          </div>
          <div class="form-group">
            <label for="senha">Senha</label>
            <input
              type="password"
              class="form-control"
              id="senha"
              placeholder="Senha"
              v-model="usuarios.senha"
            />
          </div>
          <div class="form-group col-sm-12 mb-4">
            <router-link
              to="/usuarios"
              class="badge badge-secondary col-auto float-right col-sm-6 ml-1"
            >Novo Cadastro</router-link>
            <router-link class="badge badge-secondary col-auto float-right col-sm-6" to="/">Esqueceu a senha</router-link>
          </div>
            <my-button tipo="submit" acao="Acessar" design="btn btn-success btn-block mt-4" />
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
  import Usuarios from "../model/Usuarios";
  import ServiceUsuarios from "../service/ServiceUsuarios";

  export default {
    // chamado o componete
    components: {
      MyButton: Button,
      titulo: Titulo,
    },
    data(){
      return{
        //usuarios : new Usuarios(),
        users:[]
      }
    },
    methods:{
      // verifica os dados que estão vindo do formulario
      logar(){
            var mySenha = calcMD5(this.usuarios.senha)
           for (let i = 0; i <= this.users.length; i++){
             if (this.usuarios.email == this.users[i].email  && mySenha === this.users[i].senha || this.usuarios.email.valueOf() == this.users[i].email){
               alert(' Aceito ' + this.users[i].id)
                this.$router.push('home')
               sessionStorage.setItem('id_usuario',this.users[i].id)
               break
             }else{
              alert('nao tem')
             }
        }
      },
    },

    created(){
      this.usuarios = new Usuarios()
      this.serviceUser = new ServiceUsuarios(this.$resource)
      this.serviceUser.listar()
      .then(dados => this.users = dados, err => {
          console.log(err)
      })
    }
  };
</script>
<style>
</style>
