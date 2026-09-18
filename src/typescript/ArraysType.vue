<script setup lang="ts">

const numeriArray: number[] = [0,1,2,3,4,5]

// console.log( numeriArray.length);

// const cadena: string = numeriArray.join("---")
// console.log(cadena);


numeriArray.push(6)
// console.log(numeriArray);

// const numeriArray2 = [ ...numeriArray]

const numeriArray2: (number | string)[] = [... numeriArray]

numeriArray2.push(7)
numeriArray2.push('888')

const numeriArray3 = numeriArray.map( (valorem) => {
    return (valorem * 2.375013).toFixed(1)
 })


const carrus = [
    {vestis: "camisa", pretium:18 }, 
    {vestis: "pantalón", pretium:25 },
    {vestis: "sombrero", pretium:20 },
]

// const pretia = carrus.map( (res) => {
//     return res.pretium
// })

const pretia = carrus.map( res => res.pretium)

console.log (pretia);

let summa = 0

for ( const pretium of pretia) {
    summa += pretium
}

console.log (summa);

</script>


<template>
    <div>
        <h2>Listas - Arrays</h2>
        <p>{{ numeriArray.join(', ') }}</p>
        <p>{{ numeriArray2.join(', ') }}</p>
        <p>{{ numeriArray3.join(', ') }}</p>
        <p>{{ pretia.join(" + ") }} = {{ summa }}</p>
    </div>
</template>



<style scoped>

</style>