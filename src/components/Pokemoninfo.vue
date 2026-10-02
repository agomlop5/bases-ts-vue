<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFetch } from '../composables/useFetch';
import type { PokeapiPokemonResponse } from '../interface/pokeapi-pokemon.response';


interface Pokemon {
    id: number;
    nomen: string;
    imagem: string;
}

const pokemonId = ref<number>(1);

const pokemon = ref<Pokemon | null>(null);

const { data, isLoading } = useFetch<PokeapiPokemonResponse>(
    () => `https://pokeapi.co/api/v2/pokemon/${ pokemonId.value }`
);


watch(data, (novusPokemon) => {

    if (!novusPokemon) return;

    pokemon.value = {
        id: novusPokemon.id,
        nomen: novusPokemon.name,
        imagem: novusPokemon.sprites.other!.dream_world.front_default,
    }

})

</script>



<template>
   <section v-if="pokemon">
    <h2>#{{ pokemon.id }} {{ pokemon.nomen }}</h2>

    <div v-if="isLoading" class="loading-spiner"></div>

    <img v-else:src="pokemon.imagem" alt="">

    <div>
    <button :disabled="pokemonId === 1" @click="pokemonId--">Anterior</button>

    <button @click="pokemonId++">Siguiente</button>
    
    </div>

   </section>
</template>



<style scoped>

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

section > div {
    display: flex;
    width: 230px;
    justify-content: space-between;
}

img {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
}

.loading-spiner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-spiner::before {
    content: '';
    width: 40px;
    height: 40px;
    border: 2px solid #ddd;
    border-top: 2px solid #666;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}


</style>