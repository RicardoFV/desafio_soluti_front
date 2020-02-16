<template>
    <button @click="vincular()" :class="design" :type="tipo"> {{ acao }} </button>
</template>

<script>
export default {
    //cria o botao com alguns atributos
    props:['tipo', 'acao', 'design' , 'confirmar'],

    methods:{
      vincular(){
        if (this.confirmar){
          if (confirm('Deseja se vincular a esta empresa ?')){
            this.$emit('Operação')
          }
          return;
        }
        this.$emit('Operação')
      }
    }
}
</script>

<style>

</style>
