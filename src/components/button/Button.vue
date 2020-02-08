<template>
    <button :class="design" :type="tipo"> {{ acao }} </button>
</template>

<script>
export default {
    //cria o botao com alguns atributos
    props:['tipo', 'acao', 'design']
}
</script>

<style>

</style>
