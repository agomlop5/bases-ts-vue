<script setup lang="ts">

// function salutate(nomen: string): string {
//     return `Hola, ${nomen}, ¿Cómo estás?`
// }

const salutate = (nomen: string): string => `Hola, ${nomen}, ¿Cómo estás?`

// const obtineUsoris = () => {
//     return {
//         id: 'ABC123',
//         nomen: 'Tony001'
//     }
// }

const obtineUsoris = (id: string) => ({
    id: id, 
    nomen: 'Tony001'
})

const heroum = [
    {
        id: 1,
        nomen: 'Batman'
    },
    {
        id: 2,
        nomen: 'Superman',
        facultatem: 'Superfuerza'
    }
]

const heros = heroum.find(item => item.id === 1)

console.log (heros);

</script>



<template>
    <div>
        <h2>Funciones</h2>
        <p> {{ salutate('Alba') }}</p>
        <p>{{ obtineUsoris('XYZ-456') }}</p>
    </div>
</template>


<style scoped>

</style>