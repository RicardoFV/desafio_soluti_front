<template>
    <div class="container">
      <titulo estilo="text-center mt-5 " titulo="Contratos Pendentes"></titulo>
      <div class="col-md-4 mt-md-2 mb-3">
        <label for="pesquisar">Pesquise por CNPJ ou Razão Social </label>
        <input class="form-control" type="search" id="pesquisar" v-on:input="filtroempresa = $event.target.value" placeholder="Pesquisar">
      </div>
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
        <tbody v-for="registrada of filtraDados" align="center"
               v-if="registrada.situacao === 'pendente'">
            <tr>
              <td>{{registrada.nome_administrador}}</td>
              <td>{{registrada.razao_social}}</td>
              <td>{{registrada.cnpj}}</td>
              <td>{{registrada.situacao}}</td>
              <td>{{registrada.email}}</td>
              <td>{{registrada.telefone}}</td>
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
          empresasRegistradas:[],
          id_user:0,
          filtroempresa:'',
        }
      },

    computed:{
      filtraDados(){
        if (this.filtroempresa){
          let exp = new RegExp(this.filtroempresa.trim(), 'i')
          return this.empresasRegistradas.filter(empresa =>exp.test(empresa.cnpj + empresa.razao_social))
          return []
        }else {
          return this.empresasRegistradas
        }
      }
    },

      created() {
        this.serviceContratos = new ServiceContratos(this.$resource)
        this.serviceContratos.listar()
        .then(dados => this.empresasRegistradas = dados, err => { })
      }
  }


</script>

<style>

</style>
