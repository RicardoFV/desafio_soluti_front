<template>
  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Nova Empresa"></titulo>

    <form @submit.prevent="salvarDados()">

        <!-- formulario de pesquisa do CEP-->
        <div class="form-row">
          <div class="form-group col-auto">
            <label for="numero">Cep :</label>
            <input
              type="text"
              size="16"
              id="pesquisar"
              maxlength="8"
              class="form-control mr-1"
              v-model="cep"
              placeholder="Digite o seu CEP"
              v-on:blur="pequisarCep"
            />
          </div>
          <div class="col-4 pt-2 mt-4">
            <!--
            <my-button
              tipo="submit"
              acao="Pesquisar"
              id="bt_consultar_endereco"
              design="btn btn-primary ml-1"
            />
            -->
          </div>
        </div>
        <!-- usando componentes -->
        <mensagem :mensagem="msg"></mensagem>

      <hr>

      <!-- ccampo responsavel por receber o endereco -->
      <!-- configuraçao de endereço -->
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="cep_recebido">Cep :</label>
          <input
            type="text"
            id="cep_recebido"
            disabled="disabled"
            class="form-control"
            v-model="empresa.cep"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="logradouro">Logradouro :</label>
          <input
            type="text"
            id="logradouro"
            disabled="disabled"
            class="form-control"
            v-model="empresa.logradouro"
            placeholder
          />
        </div>
        <div class="form-group col-md-2">
          <label for="complemento">Complemento :</label>
          <input
            type="text"
            id="complemento"
            disabled="disabled"
            class="form-control"
            placeholder
            v-model="empresa.complemento"
          />
        </div>

        <div class="form-group col-md-2">
          <label for="bairro">Bairro :</label>
          <input
            type="text"
            id="bairro"
            disabled="disabled"
            class="form-control"
            v-model="empresa.bairro"
          />
        </div>

        <div class="form-group col-md-2">
          <label for="localidade">Localidade :</label>
          <input
            type="text"
            id="localidade"
            disabled="disabled"
            class="form-control"
            v-model="empresa.localidade"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="uf">Uf :</label>
          <input
            type="text"
            id="uf"
            disabled="disabled"
            class="form-control"
            v-model="empresa.uf"
          />
        </div>
      </div>

      <!-- parte de cadastro de empresa  -->

        <div class="form-row">
          <input type="hidden" v-model="empresa.id_usuario"/>
          <!-- formulario que cadastra os princiapis dados da empresa -->
            <div class="form-group col-md-6">
                <label for="razao_social">Razão Social :</label>
                <input type="text" v-model="empresa.razao_social" id="razao_social" class="form-control" placeholder="Razao Social"/>
            </div>
          <div class="form-group col-md-6">
            <label for="nme_fantasia">Nome Fantasia :</label>
            <input type="text" id="nme_fantasia" v-model="empresa.nome_fantasia" class="form-control" placeholder="Nome Fantasia"/>
          </div>
          <div class="form-group col-md-3">
            <label for="cnpj">CNPJ :</label>
            <input type="text" id="cnpj" v-model="empresa.cnpj" class="form-control" placeholder="CNPJ"/>
          </div>
          <div class="form-group col-md-3">
            <label for="email">E-mail :</label>
            <input type="email" id="email" v-model="empresa.email" class="form-control" placeholder="E-mail"/>
          </div>
          <div class="form-group col-md-2">
            <label for="inscricao_estadual">Inscrição Estadual :</label>
            <input type="number" min="0" v-model="empresa.inscricao_estadual" id="inscricao_estadual" class="form-control" placeholder="Inscrição Estadual"/>
          </div>
          <div class="form-group col-md-2">
            <label for="situacao">Situação :</label>
            <select id="situacao" v-model="empresa.situacao" class="form-control">
                <option value="ativa">Ativa</option>
                <option value="inativa">Inativa</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="capital_social">Capital Social :</label>
            <input type="number" min="0" v-model="empresa.capital_social" id="capital_social" class="form-control" placeholder="Capital Social"/>
          </div>
          <div class="form-group col-md-3">
            <label for="natureza_juridica">Natureza Juridica :</label>
            <select id="natureza_juridica" v-model="empresa.natureza_juridica" class="form-control">
              <option value="sociedade_anonima">Sociedade anônima</option>
              <option value="sociedade_de_responsabilidade_limitada">Sociedade de responsabilidade limitada</option>
              <option value="sociedade_em_nome_coletivo">Sociedade em nome colectivo</option>
              <option value="sociedade_em_comandita_simples">Sociedade em comandita simples</option>
              <option value="sociedade_em_comandita_por_acoes">Sociedade em comandita por ações</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="telefone">Telefone :</label>
            <input type="tel" id="telefone" v-model="empresa.telefone" class="form-control" placeholder="Telefone"/>
          </div>
          <div class="form-group col-md-6">
            <label for="ramo_atividade">Ramo Atividade :</label>
            <input type="text" id="ramo_atividade" v-model="empresa.ramo_atividade" class="form-control" placeholder="Ramo Atividade"/>
          </div>
        </div>
        <br>
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
  //import Login from "../Login";
  import CepService from "../../service/CepService";
  import Empresas from "../../model/Empresas";
  import Mensagem from "../../components/mensagem/Memsage.vue";
  import ServiceEmpresa from "../../service/ServiceEmpresa";
  export default {
    components:{
      // utilizando os componentes
      MyButton: Button,
      titulo: Titulo,
      mensagem: Mensagem
    },
    data() {
      return {
        cep: "",
        msg: "",
        empresa :new Empresas()
      };
    },
    methods:{
      salvarDados(){
            this.empresa.id_usuario = sessionStorage.getItem('id_usuario')
            console.log(this.empresa)
            this.serviceEmpresa.inserir(this.empresa)
            alert("Empresa Cadastrada Com Sucesso !")
            this.$router.push('home')
            this.empresa = new Empresas()

      },
      pequisarCep(){
        // se caso o digito seja menor que 8
        if (this.cep.length < 8) {
          this.msg = "É necessário digitar todos os caracteres";
          // caso seja vazio
        }
        if (this.cep === "") {
          this.msg = "Campo Cep não pode ser vazio";
        } else {
          this.service = new CepService(this.$resource);
          this.service.consultarCep(this.cep).then(
            dados => {
              // faço a verificaçao se o que esta sendo recebido e diferente de erro ,
              // igual a true , ou cep invalido
              if (dados.erro !== true) {
                //console.log(dados)
                this.empresa = dados;
                // limpa o campo de mensagem e o cep
                this.msg = "";
                this.cep = "";
              } else {
                // caso o CEP nao seja encontrado
                this.msg = "CEP não encontrado .";
              }
              // vai para o erro , caso nao seja feito da forma correta
            },
            err => {}
          );
        }
      }
    },

    created() {
      //this.empresa = new Empresas()
      this.serviceEmpresa = new ServiceEmpresa(this.$resource);
    }

  }
</script>
<style>

</style>
