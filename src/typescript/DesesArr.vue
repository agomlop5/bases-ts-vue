<script setup lang="ts">

const characters: string [] = ['Goku', 'Vegetta', 'Trunks', 'Goten']

const [g, v, t, g2, g3 = 'Yamoshi'] = characters


</script>

<template>
    <div>
            <h2>Desestructuración de Arrays</h2>
            <p>{{ v }} </p>
            <p>{{ g }} - {{ v }} - {{t  }} - {{g2  }} - {{ g3 }} </p>
    </div>
</template>


<style scoped>

</style>