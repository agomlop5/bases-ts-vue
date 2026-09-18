<script setup lang="ts">

interface Heros {
    nomen: string,
    aetas: number,
    codeNomen: string
    facultatem?: string
}

const persona: Heros = {
    nomen: 'Tony',
    aetas: 45,
    codeNomen: 'Ironman',
    facultatem: 'tiene mucho money'
}

// console.log (persona.codeNomen)

const {nomen, aetas,facultatem = 'no tiene poderes'} = persona 


</script>

<template>
    <div>
        <h2>Desestructuración de objetos</h2>
        <p> {{ persona.codeNomen }}</p>
        <p> {{ nomen }} tiene {{ aetas }} años y {{ facultatem }}</p>
    </div>
</template>



<style scoped>

</style>