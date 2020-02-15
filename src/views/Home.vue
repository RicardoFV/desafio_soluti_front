<template>
  <div class="container">
      <table class="table table-sm table-bordered table-hover" width="80%">
        <thead>
            <tr align="center">
                <h4 colspan=”6″>Minhas Empresas</h4>
            </tr>
            <tr align="center" >
              <th scope="col">Razão Social</th>
              <th scope="col">Nome Fantasia</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Telefone</th>
              <th scope="col">E-mail</th>
              <th scope="col"></th>
            </tr>
        </thead>
        <tbody v-for="empresa of empresas">
            <tr>
              <td>{{empresa.razao_social}}</td>
              <td>{{empresa.nome_fantasia}}</td>
              <td>{{empresa.cnpj}}</td>
              <td>{{empresa.telefone}}</td>
              <td>{{empresa.email}}</td>
              <td>
                <button>Ver</button>
              </td>
            </tr>
        </tbody>
      </table>


  </div>

</template>
<script>
  import ServiceEmpresa from "../service/ServiceEmpresa";
  import Button from "../components/button/Button";

  export default {
    components: {Button},
    data(){
      return{
        empresas:[]
      }
    },

    created(){
          this.serviceEmpresa = new ServiceEmpresa(this.$resource)
          this.serviceEmpresa.listar()
          .then(dados => this.empresas = dados, err =>{

          })
    }
  }

</script>
<style>

</style>
