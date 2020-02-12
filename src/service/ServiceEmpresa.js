// classe responsavel por fazer a comunicaçao com o backend ,
// referente os dados do usuário.
export default class ServiceEmpresa {

    // cria o construtor passando a url de comunicaçao
    constructor(resource) {
        this._resource = resource('http://localhost:8181/empresas{/id}')
    }

    // criaçao dos metodos de persistencia
    inserir(empresa) {
        return this._resource.save(empresa)
    }
    deletar(id) {
        return this._resource.delete({ id })
    }

    listar() {
        return this._resource.query().then(resposta => resposta.json(), err => {
            console.log(err)
        })
    }
    atualizar(empresa) {
        return this._resource.update({ id: usuario.id }, usuario)
    }
    consultarPorId(id) {
        return this._resource.get({ id }).then(resposta => resposta.json())
    }
}