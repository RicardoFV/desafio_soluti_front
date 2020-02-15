<template>
  <div class="container">
    <table class=" mt-5 table table-sm table-bordered table-hover" summary="tabela">

      <thead>
      <h5 colspan="6">Catálogo da Metal & Cia</h5>
      <tr align="center">

        <th scope="col">Razão Social</th>
        <th scope="col">Nome Fantasia</th>
        <th scope="col">CNPJ</th>
        <th scope="col">Telefone</th>
        <th scope="col">E-mail</th>
        <th scope="col">Ver</th>
      </tr>
      </thead>

      <tbody v-for="empresa of empresas" v-if="id_user == empresa.id_usuario" >
      <tr align="center">
        <td>Tabela Vazia</td>
        <td>{{empresa.razao_social}}</td>
        <td>{{empresa.nome_fantasia}}</td>
        <td>{{empresa.cnpj}}</td>
        <td>{{empresa.telefone}}</td>
        <td>{{empresa.email}}</td>
        <td>
          <my-button tipo="submit" acao="Detalhes" design="btn btn-info"/>
        </td>
      </tr>
      </tbody>
    </table>


  </div>

</template>
<script>
  import ServiceEmpresa from "../service/ServiceEmpresa";
  import Button  from "../components/button/Button";

  export default {
    components: {
      MyButton: Button,
    },
    data(){
      return{
        empresas:[],
        id_user:0,
        tabelaVazia:'Sem itens'
      }
    },

    created(){
          // passa o id da sessão para a variavel user
          this.id_user = sessionStorage.getItem('id_usuario')
          console.log(this.id_user)
          this.serviceEmpresa = new ServiceEmpresa(this.$resource)
          this.serviceEmpresa.listar()
          .then(dados => this.empresas = dados, err =>{

          })
    }
  }

</script>
<style>

</style>
