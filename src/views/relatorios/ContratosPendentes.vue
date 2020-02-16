<template>
    <div class="container">
      <titulo estilo="text-center mt-5 " titulo="Contratos Pendentes"></titulo>

      <table class=" mt-0 table table-sm table-bordered table-hover" id="tbl_contratos_pendentes">
        <thead align="center">
            <tr>
              <th scope="col-sn-2">Administrador</th>
              <th scope="col-sn-2">Razão Social</th>
              <th scope="col-sn-2">CNPJ</th>
              <th scope="col-sn-2">Situação</th>
              <th scope="col-sn-2">E-mail</th>
              <th scope="col-sn-2">Telefone</th>
              <th scope="col-sn-2">ações</th>
            </tr>
        </thead>
        <tbody v-for="pendente of pendentes" align="center">
            <tr>
              <td>{{pendente.nome_administrador}}</td>
              <td>{{pendente.razao_social}}</td>
              <td>{{pendente.cnpj}}</td>
              <td>{{pendente.situacao}}</td>
              <td>{{pendente.email}}</td>
              <td>{{pendente.telefone}}</td>
              <td>

                  <my-button tipo="submit" acao="Detalhes" design="btn btn-info"/>

              </td>
            </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
  import ServiceContratos from "../../service/ServiceContratos";
  import Titulo from "../../components/titulo/Titulo";
  import Button from "../../components/button/Button";

  export default {

    components:{
      titulo: Titulo,
      MyButton: Button,
    },
      data(){
        return{
          pendentes:[]
        }
      },

      created() {
        this.serviceContratos = new ServiceContratos(this.$resource)
        this.serviceContratos.listar()
        .then(dados => this.pendentes = dados, err => { })
      }
  }


</script>

<style>

</style>
