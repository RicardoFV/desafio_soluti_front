<template>

  <div class="container">
    <titulo estilo="text-center mt-1 mb-1" titulo="Novo Contrato"></titulo>
  </div>

</template>

<script>
  // importando os componentes para uso
  import Titulo from "../../components/titulo/Titulo.vue";
  import Button from "../../components/button/Button.vue";
  import Mensagem from "../../components/mensagem/Memsage.vue";
  export default {
    components:{
      // utilizando os componentes
      MyButton: Button,
      titulo: Titulo,
      mensagem: Mensagem
    }

  }

</script>

<style>

</style>
