// classe empresa
export default class Empresas {

  constructor(id, razao_social, nome_fantasia, cnpj, inscricao_estadual, telefone, email, situacao, ramo_atividade, natureza_juridica, id_usuario, capital_social, cep, logradouro, complemento, bairro, localidade, uf) {
      this.id = id;
      this.razao_social = razao_social;
      this.nome_fantasia = nome_fantasia;
      this.cnpj = cnpj;
      this.inscricao_estadual = inscricao_estadual;
      this.telefone = telefone;
      this.email = email;
      this.situacao = situacao;
      this.ramo_atividade = ramo_atividade;
      this.natureza_juridica = natureza_juridica;
      this.id_usuario = id_usuario;
      this.capital_social = capital_social;
      this.cep = cep;
      this.logradouro = logradouro;
      this.complemento = complemento;
      this.bairro = bairro;
      this.localidade = localidade;
      this.uf = uf;
  }

}
