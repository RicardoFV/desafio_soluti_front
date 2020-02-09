// classe usuarios
export default class Usuarios {

  constructor(id, nome_completo, email, senha, repetirSenha) {
    this.id = id
    this.nome_completo = nome_completo
    this.email = email
    this.senha = senha
    this.repetirSenha = repetirSenha
  }
}
