// classe responsavel por fazer a comunicaçao com o backend ,
// referente os dados do contratos.
import {error} from "vue-resource/src/util";
import headers from "vue-resource/src/http/headers";

export default class ServiceContratos {

  // cria o construtor passando a url de comunicaçao
  constructor(resource) {
    this._resource = resource('contratos{/id}')
  }

  // criaçao dos metodos de persistencia
  inserir(contratos) {
    return this._resource.save(contratos)
      .then(null, err =>{
        headers:{
          'Content-Type: multipart/form-data'
        }
        console.log(err)
        throw new error('Impossível realizar cadastro')
      })
  }
  deletar(id) {
    return this._resource.delete({ id })
  }

  listar() {
    return this._resource.query().then(resposta => resposta.json(), err => {
      console.log(err)
      throw new error('Sistema indisponível temporariamente, por favor tente mais tarde')
    })
  }
  atualizar(contratos) {
    return this._resource.update({ id: contratos.id }, contratos)
  }
  consultarPorId(id) {
    return this._resource.get({ id }).then(resposta => resposta.json(), err =>{
      console.log(err)
      throw new error('Sistema indisponível temporariamente, por favor tente mais tarde')
    })
  }
}
