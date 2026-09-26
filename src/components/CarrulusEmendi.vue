<script setup lang="ts">

defineProps<{
    nomen: string;
    quantitas: number;
}>()

defineEmits<{
    (eventus:'incrementum'): void;
    (eventus:'decrementum'): void;
}>()

</script>


<template>
    <div v-if="$props.quantitas > 0">

        <div class="products">
        <span>{{ nomen }}</span>
            <button @:click="$emit('decrementum')">-</button>    

        <span>{{ quantitas }}</span>
            <button @:click="$emit('incrementum')">+</button>
        </div>

    </div>
</template>



<style scoped>

.products {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
}

div > span:first-child {
    width: 60px;
    margin-right: 20px;
}
div > span:last-of-type {
    width: 35px;
}

button {
    padding: 10px 20px;
}

</style>