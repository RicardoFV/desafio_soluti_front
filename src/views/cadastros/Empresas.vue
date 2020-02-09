<template>
  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Nova Empresa"></titulo>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="razao_social">Razão Social :</label>
                <input type="text" id="razao_social" class="form-control" placeholder="Razao Social"/>
            </div>
          <div class="form-group col-md-6">
            <label for="nme_fantasia">Nome Fantasia :</label>
            <input type="text" id="nme_fantasia" class="form-control" placeholder="Nome Fantasia"/>
          </div>
          <div class="form-group col-md-3">
            <label for="cnpj">CNPJ :</label>
            <input type="text" id="cnpj" class="form-control" placeholder="CNPJ"/>
          </div>
          <div class="form-group col-md-3">
            <label for="email">E-mail :</label>
            <input type="email" id="email" class="form-control" placeholder="E-mail"/>
          </div>
          <div class="form-group col-md-2">
            <label for="inscricao_estadual">Inscrição Estadual :</label>
            <input type="number" min="0" id="inscricao_estadual" class="form-control" placeholder="Inscrição Estadual"/>
          </div>
          <div class="form-group col-md-2">
            <label for="situacao">Situação :</label>
            <select id="situacao" class="form-control">
                <option value="">Selecione</option>
                <option value="ativa">Ativa</option>
                <option value="inativa">Inativa</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="capital_social">Capital Social :</label>
            <input type="number" min="0" id="capital_social" class="form-control" placeholder="Capital Social"/>
          </div>
          <div class="form-group col-md-3">
            <label for="natureza_juridica">Natureza Juridica :</label>
            <select id="natureza_juridica" class="form-control">
              <option value="">Selecione</option>
              <option value="ativa">Sociedade anônima</option>
              <option value="inativa">Sociedade de responsabilidade limitada</option>
              <option value="ativa">Sociedade em nome colectivo</option>
              <option value="inativa">Sociedade em comandita simples</option>
              <option value="ativa">Sociedade em comandita por ações</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="telefone">Telefone :</label>
            <input type="tel" id="telefone" class="form-control" placeholder="Telefone"/>
          </div>
          <div class="form-group col-md-6">
            <label for="ramo_atividade">Ramo Atividade :</label>
            <input type="text" id="ramo_atividade" class="form-control" placeholder="Ramo Atividade"/>
          </div>
        </div>
      <hr>
      <!-- configuraçao de endereço -->
      <form @submit.prevent="pequisarCep" action>
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
            />
          </div>
          <div class="col-4 pt-2 mt-4">
            <my-button
              tipo="submit"
              acao="Pesquisar"
              id="bt_consultar_endereco"
              design="btn btn-primary ml-1"
            />
          </div>
        </div>
      </form>

      <!-- ccampo responsavel por receber o endereco -->
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="rua">Rua :</label>
          <input
            type="text"
            id="rua"
            disabled="disabled"
            class="form-control"
            placeholder
          />
        </div>
        <div class="form-group col-md-2">
          <label for="cidade">Cidade :</label>
          <input
            type="text"
            id="cidade"
            disabled="disabled"
            class="form-control"
            placeholder
          />
        </div>

        <div class="form-group col-md-2">
          <label for="estado">Estado :</label>
          <input
            type="text"
            id="estado"
            disabled="disabled"
            class="form-control"
          />
        </div>

        <div class="form-group col-md-2">
          <label for="numero_endereco">Numero :</label>
          <input
            type="number"
            id="numero_endereco"
            disabled="disabled"
            name="numero_endereco"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="bairro">Bairro :</label>
          <input
            type="text"
            id="bairro"
            disabled="disabled"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="complemento">Complemento :</label>
          <input
            type="number"
            id="complemento"
            disabled="disabled"
            class="form-control"
          />
        </div>

      </div>

      <!-- botao de envio -->
      <div class="form-row">
        <div class="col-6 mt-md-1">
          <my-button tipo="submit" acao="Cadastrar" id="bt_salvar" design="btn btn-block btn-success" />
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
  import Login from "../Login";
  export default {
    components:{
      Login,
      // utilizando os componentes
      MyButton: Button,
      titulo: Titulo
    }
  }
</script>
<style>

</style>
