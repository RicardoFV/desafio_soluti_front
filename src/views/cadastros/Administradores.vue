<template>
  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Administrador"></titulo>

    <form @submit.prevent="salvarDados">

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="nome">Nome :</label>
          <span class="ml-3">Tem Cadastro ?</span> <input v-model="mostrar" type="checkbox">

          <template v-if="mostrar">
            <select class="form-control"  v-model="administradores.nome">
                <option v-for="a of adms" :value="a.nome">{{a.nome}}</option>
            </select>

          </template>

          <template v-else="mostrar">
            <input
              id="nome"
              class="form-control"
              v-model="contratos.nome"
              placeholder="Nome Administrador"
            />
          </template>

        </div>
        <div class="form-group col-md-4">
          <label for="tipo">Tipo :</label>
          <select id="tipo" v-model="administradores.tipo" class="form-control">
            <option value="socio">Sócio</option>
            <option value="administrador">Administrador</option>
            <option value="responsave_legal">Responsável Legal</option>
            <option value="cotista">Cotista</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="contrato">Contrato :</label>
          <select id="contrato" v-model="administradores.id_contrato" class="form-control">
            <option v-for="d of dados" :value="d.id">{{d.nome}}</option>
          </select>
        </div>
      </div>
      <!-- botao de envio -->
      <div class="form-row">
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
import Mensagem from "../../components/mensagem/Memsage.vue";
import Administradores from "../../model/Administradores";
import ServiceAdministradores from "../../service/ServiceAdministradores";
import ServiceContratos from "../../service/ServiceContratos";
export default {
  components: {
    // utilizando os componentes
    MyButton: Button,
    titulo: Titulo,
    mensagem: Mensagem
  },
  data() {
    return {
      dados: [],
      mostrar:true,
      adms:[]
    };
  },
  methods: {
    salvarDados() {
      if (this.serviceAdministradores.inserir(this.administradores)) {
        this.administradores = new Administradores();
        alert("Administador salvo com sucesso !");
        this.$router.push("/home");
      } else {
        alert("Erro ao salvar Administrador");
      }
    }
  },
  created() {
    this.administradores = new Administradores();
    this.serviceAdministradores = new ServiceAdministradores(this.$resource);
    this.serviceContratos = new ServiceContratos(this.$resource);

    this.serviceContratos.listar().then(
      d => (this.dados = d),
      err => {
        err.message();
      }
    );

    this.serviceAdministradores.listar()
    .then(ad =>
      (this.adms = ad ),
    err =>{

    });
  }
};
</script>

<style>
</style>
