// classe responsavel por fazer a comunicaçao com o backend ,
// referente os dados do usuário.
import {error} from "vue-resource/src/util";

export default class ServiceUsuarios {

  // cria o construtor passando a url de comunicaçao
  constructor(resource) {
    this._resource = resource('usuarios{/id}')
  }

  // criaçao dos metodos de persistencia
  inserir(usuario){
    return this._resource.save(usuario)
      .then(null, err =>{
        console.log(err)
        throw new error('Impossível realizar cadastro')
      })
  }
  deletar(id){
    return this._resource.delete({id})
      .then(null , err =>{
        console.log(err)
      })
  }

  listar(){
    return this._resource.query().then(resposta => resposta.json(), err =>{
      console.log(err)
      throw new error('Sistema indisponível temporariamente, por favor tente mais tarde')
    })
  }
  atualizar(usuario){
    return this._resource.update({id:usuario.id}, usuario)
  }
  consultarPorId(id){
    return this._resource.get({id}).then(resposta => resposta.json() , err =>{
      console.log(err)
      throw new error('Sistema indisponível temporariamente, por favor tente mais tarde')
    })

  }
}
