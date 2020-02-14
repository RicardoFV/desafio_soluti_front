// classe responsavel por fazer a comunicaçao com o backend ,
// referente os dados do usuário.
import {error} from "vue-resource/src/util";

export default class ServiceEmpresa {

    // cria o construtor passando a url de comunicaçao
    constructor(resource) {
        this._resource = resource('empresas{/id}')
    }

    // criaçao dos metodos de persistencia
    inserir(empresa) {
        return this._resource.save(empresa)
          .then(null, err =>{
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
    atualizar(empresa) {
        return this._resource.update({ id: usuario.id }, usuario)
    }
    consultarPorId(id) {
        return this._resource.get({ id }).then(resposta => resposta.json(), err =>{
          console.log(err)
          throw new error('Sistema indisponível temporariamente, por favor tente mais tarde')
        })
    }
}
