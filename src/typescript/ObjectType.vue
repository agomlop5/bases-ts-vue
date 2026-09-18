<script setup lang="ts">

const jeep: { potentia: number, tipus: string} = {
    potentia: 150,
    tipus: 'Renegade'
}

console.log (jeep);

interface Habitat {
    urbs: string,
    zip: number,
    lat: number,
    lng: number
}

interface Persona {
    cognomen: string;
    aetas: number;
    ubiHabitat: Habitat;
}



const persona: Persona = {
    cognomen: 'Stack',
    aetas: 45,
    ubiHabitat: {
        urbs: 'New York',
        zip: 3460,
        lat: 14.865378,
        lng: 34.786124
    }
}

// console.log(persona.ubiHabitat);


persona.aetas = 55

// const persona2 = persona

const persona2 = { ...persona }

persona2.cognomen = 'Parker'

console.log(persona);
console.log(persona2);


</script>

<template>
    <div>
        <h2>Objetos literales </h2>

    </div>
</template>



<style scoped>

</style>