<template>
   <h1 :class="estilo" >{{titulo}}</h1>
</template>

<script>
export default {
   // cria o atributo do titulo
    props:['estilo', 'titulo']
}
</script>

<style >
    
</style>