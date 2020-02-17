<template>
  <div class="container">

    <div id="configurarDiv" class=" mt-4 mb-3 pl-3 pr-3 pb-3">
      <titulo estilo="text-center mt-5 " titulo="Empresas Sem Vinculo"></titulo>
      <div class="col-md-4  mt-md-2 mb-md-4">
        <label for="pesquisar">Pesquise por Razão Social </label>
        <input class="form-control" type="search" id="pesquisar" v-on:input="filtroempresa = $event.target.value" placeholder="Pesquisar">
      </div>
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

        <tbody v-for="empresa of filtraDados" v-if="empresa.cnpj == 0  && empresa.id_usuario == 0" >
        <tr align="center">
          <td>{{empresa.razao_social}}</td>
          <td>{{empresa.cnpj}}</td>
          <td>{{empresa.telefone}}</td>
          <td>{{empresa.email}}</td>
          <td>{{empresa.data_abertura}}</td>
          <td>

            <button type="button" v-on:click="verificar(empresa.id)" class="btn btn-info" data-toggle="modal" data-target="#confirmarvinculo">Vincular</button>

          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="confirmarvinculo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{empresaVinculo.razao_social}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span>Deseja se Vincular a essa empresa ?</span>

          </div>
          <div class="modal-footer">
            <button type="button" v-on:click="realizarVinculo" data-dismiss="modal" class="btn btn-primary">Sim</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>

          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import ServiceEmpresa from "../service/ServiceEmpresa";
  import Button  from "../components/button/Button";
  import Titulo from "../components/titulo/Titulo";
  import Empresas from "../model/Empresas";
  export default {
    components: {
      Button,
      MyButton: Button,
      titulo: Titulo
    },
    data(){
      return{
        empresas:[],
        id_user:0,
        filtroempresa:'',
        empresaVinculo:'',
        emp : new Empresas()
      }
    },

    methods:{
          verificar:function(event){
            let id = event
            //console.log(id)
           this.serviceEmpresa.consultarPorId(id)
            .then(d =>(this.empresaVinculo = d))
          },
           realizarVinculo:function(event){
             this.emp.id = this.empresaVinculo.id
             this.emp.id_usuario = sessionStorage.getItem("id_usuario");
             console.log(this.emp)
             if (this.serviceEmpresa.atualizar(this.emp)){
               this.$router.push('/home')
               alert("Vinculo Realizado com Sucesso")
             }else{
               alert("Erro ao realizar vinculo")
             }

            },
    },

    computed:{
      filtraDados(){
        if (this.filtroempresa){
          let exp = new RegExp(this.filtroempresa.trim(), 'i')
          return this.empresas.filter(empresa =>exp.test(empresa.razao_social))
          return []
        }else {
          return this.empresas
        }
      }
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
