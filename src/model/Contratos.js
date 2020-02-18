// classe contratos
export default class Contratos {

  constructor(id ,nome, arquivo =0, situacao, data_anexo, id_empresa)
  {
    this.id = id;
    this.nome = nome
    this.arquivo = arquivo;
    this.situacao = situacao;
    this.data_anexo = data_anexo;
    this.id_empresa = id_empresa;
  }
}
