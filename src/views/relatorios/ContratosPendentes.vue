<template>
    <div class="container">
      <titulo estilo="text-center mt-5 " titulo="Contratos Pendentes"></titulo>
      <div class="col-md-4 mt-md-2 mb-3">
        <label for="pesquisar">Pesquise por CNPJ ou Razão Social </label>
        <input class="form-control" type="search" id="pesquisar" v-on:input="filtroempresa = $event.target.value" placeholder="Pesquisar">
      </div>
      <table class=" mt-0 table table-bordered table-hover" id="tbl_contratos_pendentes">
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
                <button type="button" v-on:click="verificar(registrada.id_administrador)" class="btn btn-info" data-toggle="modal" data-target="#modeldetalhes">Detalhes</button>

              </td>
            </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="modeldetalhes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"  id="exampleModalLabel">Informações Gerais</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-6">
                      <span><strong>Administrador:</strong></span>
                      <span>{{meu_contrato.nome_administrador}}</span>
                    </div>
                    <div class="col-md-6">
                      <span><strong>Tipo:</strong></span>
                      <span>{{meu_contrato.tipo}}</span>
                    </div>

                    <div class="col-md-12">
                      <span><strong>Razão Social:</strong></span>
                      <span>{{meu_contrato.razao_social}}</span>
                    </div>

                    <div class="col-md-auto">
                      <span><strong>Nome contrato:</strong></span>
                      <span>{{meu_contrato.nome_contrato}}</span>
                    </div>
                    <div class="col-md-auto">
                      <span><strong>Situação:</strong></span>
                      <span>{{meu_contrato.situacao}}</span>
                    </div>

                    <div class="col-md-auto">
                      <span><strong>Data Anexo:</strong></span>
                      <span>{{meu_contrato.data_anexo}}</span>
                    </div>

                  </div>

           <!--    {{meu_contrato}} -->
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="aprovarDocumento(meu_contrato.id_contrato)">Aprovar</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="renoprorDocumento(meu_contrato.id_contrato)">Recusar</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>

    </div>




</template>

<script>
  import ServiceContratos from "../../service/ServiceContratos";
  import Titulo from "../../components/titulo/Titulo";
  import Button from "../../components/button/Button";
  import Contratos from "../../model/Contratos";

  export default {

    components:{
      Button,
      titulo: Titulo,
      MyButton: Button,
    },
      data(){
        return{
          empresasRegistradas:[],
          id_user:0,
          filtroempresa:'',
          meu_contrato:'',
          contratos: new Contratos()
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

    methods:{
      // aprova o contrato
      aprovarDocumento(event){
        let id = event

        this.contratos.nome = this.meu_contrato.nome_contrato
        this.contratos.id_empresa = this.meu_contrato.id_empresa
        this.contratos.situacao = 'aprovado'
        this.contratos.id = id
        console.log(this.contratos)
        this.serviceContratos.atualizar(this.contratos)
        this.$router.push('/home')
        alert('Contrato Alterado Com Sucesso !')
      },
      // reprova o contrato
      renoprorDocumento(event){
        let id = event
        this.contratos.nome = this.meu_contrato.nome_contrato
        this.contratos.id_empresa = this.meu_contrato.id_empresa
        this.contratos.situacao = 'reprovado'
        this.contratos.id = id

        console.log(this.contratos)
        this.serviceContratos.atualizar(this.contratos)
        this.$router.push('/home')
        alert('Contrato Alterado Com Sucesso !')
      },

      verificar:function(event){
        let id = event
        this.serviceContratos.consultarPorId(id)
          .then(d =>(this.meu_contrato = d))
      },
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
