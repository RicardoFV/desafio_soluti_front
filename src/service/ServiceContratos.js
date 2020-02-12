// classe responsavel por fazer a comunicaçao com o backend ,
// referente os dados do contratos.
export default class ServiceContratos {

  // cria o construtor passando a url de comunicaçao
  constructor(resource) {
    this._resource = resource('http://localhost:8181/contratos{/id}')
  }

  // criaçao dos metodos de persistencia
  inserir(contratos) {
    return this._resource.save(contratos)
  }
  deletar(id) {
    return this._resource.delete({ id })
  }

  listar() {
    return this._resource.query().then(resposta => resposta.json(), err => {
      console.log(err)
    })
  }
  atualizar(contratos) {
    return this._resource.update({ id: contratos.id }, contratos)
  }
  consultarPorId(id) {
    return this._resource.get({ id }).then(resposta => resposta.json())
  }
}
