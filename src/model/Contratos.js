// classe contratos
export default class Contratos {

  constructor(id ,nome, caminho_arquivo, situacao, data_anexo, id_empresa)
  {
    this.id = id;
    this.nome = nome
    this.caminho_arquivo = caminho_arquivo;
    this.situacao = situacao;
    this.data_anexo = data_anexo;
    this.id_empresa = id_empresa;
  }
}
