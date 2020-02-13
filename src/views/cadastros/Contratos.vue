<template>

  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Novo Contrato"></titulo>

    <form @submit.prevent="salvarDados" enctype="multipart/form-data">
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="nome">Nome :</label>
          <select id="nome" v-model="contratos.nome" class="form-control">
            <option value="contrato_social">Contrato social</option>
            <option value="registro_junta">Registro na Junta Comercial</option>
            <option value="cartao_cnpj">Cartão CNPJ</option>
            <option value="inscricao-estadual">Inscrição estadual</option>
            <option value="alvara_funcionamento">Alvará de funcionamento</option>
            <option value="licenca_bombeiro">Licença dos bombeiros</option>
            <option value="licenca_sanitaria">Licença da Vigilância Sanitária</option>
            <option value="registro_previdencia">Registro na Previdência Social</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="situacao">Situação :</label>
          <select id="situacao" v-model="contratos.situacao" class="form-control">
              <option value="aprovado">Aprovado</option>
              <option value="reprovado">Reprovado</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="empresa">Empresa :</label>
          <select id="empresa"v-model="contratos.id_empresa"  class="form-control">
            <option v-for="d of dados" :value="d.id">{{d.razao_social}}</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="arquivo">Contrato :</label>
            <input type="file" @change="selecionarArquivo" class="form-control-file"  id="arquivo">
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
  import Contratos from "../../model/Contratos";
  import ServiceContratos from "../../service/ServiceContratos";
  import ServiceEmpresa from "../../service/ServiceEmpresa";
  export default {
    components:{
      // utilizando os componentes
      MyButton: Button,
      titulo: Titulo,
      mensagem: Mensagem,
    },

    data(){
      return{
        contratos:new Contratos(),
        dados :[],
        // seleciona o arquivo
        arquivoSelecionado:null
      }
    },

    methods:{
          salvarDados(){
            const fd = new FormData()
            fd.append('pdf',this.arquivoSelecionado, this.arquivoSelecionado.name)
            this.contratos.caminho_arquivo = fd;
            console.log(this.contratos)
            this.serviceContratos.inserir(this.contratos)
          },

          selecionarArquivo(event){
            this.arquivoSelecionado = event.target.files[0]
          }
    },

    created() {
      this.serviceEmpresa = new ServiceEmpresa(this.$resource)
      this.serviceEmpresa.listar()
      .then(d => this.dados = d, err =>{
         err.message()
      })

      this.serviceContratos = new ServiceContratos(this.$resource)
    }

  }

</script>

<style>

</style>
