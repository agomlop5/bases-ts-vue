<script setup lang="ts">

let urbs: string = "Valencia"

urbs = "Madrid"

console.log(urbs)

const aetas: number = 24

const nomen = "Tony"

// nomen = "Fernando"

const cognomen = "Starck"

const plenumNomen = `${ nomen } ${ cognomen }`

</script>

<template>
    <div> 
    <h2>Tipos Básicos</h2>

<p> {{plenumNomen}} es de {{ urbs }} y tiene {{ aetas }} años </p>

</div>
</template>


<style scoped>

</style>