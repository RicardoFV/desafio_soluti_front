import Usuarios from "../model/Usuarios";
export default class Autenticacao {
    constructor() {

      this.usuarios = new Usuarios()
    }
    // metodo responsavel por fazer o logim
    realizarLogin(email , senha, users =[] ){
      let status = false
      let mySenha = calcMD5(senha)
      for(let i =0; i<= users.length; i++) {
          if(mySenha == users[i].senha  && email == users[i].email  || mySenha.indexOf(users[i].senha) && email.indexOf(users[i].email)){
            this.usuarios.id = users[i].id
            alert('existe')
            status = true
            return status
            break
          }else{
            alert('nao existe')
            return status
            break
          }
      }
    }

    alterarDados(){
        this.usuarios.id
    }

}
