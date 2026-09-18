

<script setup lang="ts">
  
  const vigilat: boolean = true 

let nuntius: string | undefined

if (vigilat === true) {
  nuntius = "Sí, hola, buenos días"

} else {
  nuntius = "Zzzz Zzzz"
}

console.log (nuntius)

const precio: number = 40

const libro = precio > 25  ? "Es caro"    :   "Es barato"

console.log(libro)

</script>


<template>
    <div>
            <h2>Estructura condicional</h2> 

            <p>¿Estás despierta? {{ nuntius }}</p>
    </div>
</template>


<style scoped>

</style>