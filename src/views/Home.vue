<template>
  <div class="container">

    <div id="configurarDiv" class=" mt-4 mb-3 pl-3 pr-3 pb-3">
      <titulo estilo="text-center mt-5 " titulo="Empresas Sem Registros"></titulo>
      <table class=" mt-0 table table-sm table-bordered table-hover">
        <thead>
        <tr align="center">

          <th scope="col">Razão Social</th>
          <th scope="col">CNPJ</th>
          <th scope="col">Telefone</th>
          <th scope="col">E-mail</th>
          <th scope="col">Data Abertura</th>
          <th scope="col">Ação</th>
        </tr>
        </thead>

        <tbody v-for="empresa of empresas" v-if="empresa.cnpj == null" >
        <tr align="center">
          <td>{{empresa.razao_social}}</td>
          <td>{{empresa.cnpj}}</td>
          <td>{{empresa.telefone}}</td>
          <td>{{empresa.email}}</td>
          <td>{{empresa.data_abertura}}</td>
          <td>

              <my-button tipo="submit" acao="Vincular" design="btn btn-info">
              </my-button>

          </td>
        </tr>
        </tbody>
      </table>
    </div>



  </div>

</template>
<script>
  import ServiceEmpresa from "../service/ServiceEmpresa";
  import Button  from "../components/button/Button";
  import Titulo from "../components/titulo/Titulo";
  export default {
    components: {
      MyButton: Button,
      titulo: Titulo
    },
    data(){
      return{
        empresas:[],
        id_user:0,
      }
    },

    methods:{

    },

    created(){
        // passa o id da sessão para a variavel user
        this.id_user = sessionStorage.getItem('id_usuario')
        //  console.log(this.id_user)
          this.serviceEmpresa = new ServiceEmpresa(this.$resource)
          this.serviceEmpresa.listar()
          .then(dados => this.empresas = dados, err =>{

          })
    }
  }

</script>
<style>

</style>
