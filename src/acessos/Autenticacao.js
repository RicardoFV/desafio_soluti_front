export default class Autenticacao {
    // metodo responsavel por fazer o logim
    realizarLogin(email , senha, users =[] ){

      for(let i =0; i< users.length; i++){

        let status = false

        // usa um algoritmo que gera as senha recebidas em md5
        if (email == users[i].email &&  calcMD5(senha) == users[i].senha){
            //this.idUser = users[i].id
          alert('existe')
          // direciona para a home
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

}
