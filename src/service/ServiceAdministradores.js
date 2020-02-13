// classe responsavel por fazer a comunicaçao com o backend ,
// referente os dados do administradores.
export default class ServiceAdministradores {

  // cria o construtor passando a url de comunicaçao
  constructor(resource) {
    this._resource = resource('http://localhost:8181/administradores{/id}')
  }

  // criaçao dos metodos de persistencia
  inserir(administradores) {
    return this._resource.save(administradores)
  }
  deletar(id) {
    return this._resource.delete({ id })
  }

  listar() {
    return this._resource.query().then(resposta => resposta.json(), err => {
     // console.log(err)
    })
  }
  atualizar(administradores) {
    return this._resource.update({ id: administradores.id }, administradores)
  }
  consultarPorId(id) {
    return this._resource.get({ id }).then(resposta => resposta.json())
  }
}
