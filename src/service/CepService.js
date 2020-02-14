// classe responsavel por trazer o endereco atravez do cep informado

import {error} from "vue-resource/src/util";

export default class CepService {
    // construtor passando o link da consulta do cep
    constructor(resource) {
        this._resource = resource('https://viacep.com.br/ws/{/cep}/json/')
    }
    // metodo responsavel por fazer a busca do endereco
    consultarCep(cep) {
        return this._resource.get({ cep }).then(response => response.json(), err =>{
        console.log(err)
        throw new error('Impossível realizar cadastro')
      })
    }
}
