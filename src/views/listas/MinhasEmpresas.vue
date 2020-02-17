<template>
  <div class="container">
    <div id="configurarDiv" class=" mt-4 mb-3 pl-3 pr-3 pb-3">
      <titulo estilo="text-center mt-5 " titulo="Minhas Empresas"></titulo>
      <div class="col-md-4 mt-md-2">
        <label for="pesquisar">Pesquise por CNPJ ou Razão Social </label>
        <input class="form-control" type="search" id="pesquisar" v-on:input="filtroempresa = $event.target.value" placeholder="Pesquisar">
      </div>

      <table class=" mt-4 table table-sm table-bordered table-hover">
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

        <tbody v-for="empresa of filtraDados" v-if="empresa.id_usuario == id_user">
        <tr align="center">
          <td>{{empresa.razao_social}}</td>
          <td>{{empresa.cnpj}}</td>
          <td>{{empresa.telefone}}</td>
          <td>{{empresa.email}}</td>
          <td>{{empresa.data_abertura}}</td>
          <td>
            <router-link :to="{name :'alterarempresa', params:{id:empresa.id}}">
              <my-button tipo="submit" acao="Alterar" design="btn btn-info">
              </my-button>
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
  import Titulo from "../../components/titulo/Titulo";
  import ServiceEmpresa from "../../service/ServiceEmpresa";
  import Button from "../../components/button/Button";
  export default {
    components: {
      titulo: Titulo,
      MyButton: Button,
    },

    data(){
      return{
        empresas:[],
        id_user:sessionStorage.getItem('id_usuario'),
        filtroempresa:'',

      }
    },

    computed:{
      filtraDados(){
        if (this.filtroempresa){
          let exp = new RegExp(this.filtroempresa.trim(), 'i')
          return this.empresas.filter(empresa =>exp.test(empresa.cnpj + empresa.razao_social))
          return []
        }else {
          return this.empresas
        }
      }
    },


    created(){
      // passa o id da sessão para a variavel user
      // this.id_user = sessionStorage.getItem('id_usuario')
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
