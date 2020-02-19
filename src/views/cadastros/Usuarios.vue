<template>
  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Novo Usuário"></titulo>
    <form @submit.prevent="salvarDados()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nome_completo">Nome Completo:</label>
          <input
            type="text"
            v-model="usuarios.nome_completo"
            id="nome_completo"
            class="form-control"
            placeholder="Digite seu nome"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            v-model="usuarios.email"
            class="form-control"
            placeholder="Digite seu E-mail"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            v-model="usuarios.senha"
            class="form-control"
            placeholder="Digite sua Senha"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="repetir_senha">Repita sua Senha:</label>
          <input
            type="password"
            id="repetir_senha"
            class="form-control"
            placeholder="Repita sua Senha"
          />
        </div>
        <div class="col-6 mt-md-1">
          <my-button
            tipo="submit"
            acao="Cadastrar"
            id="bt_salvar"
            design="btn btn-block btn-success"
          />
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
import Usuarios from "../../model/Usuarios";
import ServiceUsuarios from "../../service/ServiceUsuarios";
import Mensagem from "../../components/mensagem/Memsage.vue";
export default {
  components: {
    // utilizando os componentes
    MyButton: Button,
    titulo: Titulo,
    mensagem: Mensagem
  },
  data() {
    return {
      msg: "",
      usuarios: new Usuarios()
    };
  },
  methods: {
    // metodo que salva as informações
    salvarDados: function(event) {
      if (this.verificarCampos() == true) {
        this.serviceUser.inserir(this.usuarios);
        document.getElementById("repetir_senha").value = "";
        this.usuarios = new Usuarios();
        alert("Usuário salvo com sucesso !");

        // caso tenha sessão , ou seja , cadastrado, ele direciona para a tela de login,
        // senão ele vai para a tela de autenticação
        if (sessionStorage.getItem("id_usuario")) {
          this.$router.push("/home");
        } else {
          this.$router.push("/");
        }
      }
    },
    // metodo reponsavel por verificar os campos
    verificarCampos() {
      var verificado = true;
      if ($("#senha").val() != $("#repetir_senha").val()) {
        alert("As senhas nao conferem");
        verificado = false;
      }
      if ($("#repetir_senha").val() != $("#senha").val()) {
        alert("As senhas nao conferem");
        verificado = false;
      }
      if (document.getElementById("nome_completo").value == "") {
        alert("Nome não pode ser vazio");
        verificado = false;
      }
      if (document.getElementById("email").value == "") {
        alert("E-mail não pode ser vazio");
        verificado = false;
      }
      if (
        document.getElementById("repetir_senha").value == "" ||
        document.getElementById("senha").value == ""
      ) {
        alert("senhas não podem ser vazio");
        verificado = false;
      }

      return verificado;
    }
  },
  created() {
    this.serviceUser = new ServiceUsuarios(this.$resource);
  }
};
</script>
<style>
</style>
