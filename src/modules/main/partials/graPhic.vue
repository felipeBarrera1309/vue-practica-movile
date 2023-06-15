<template>
    <div class="parent-graph">
        <svg
            :viewBox="`0 0 ${valueX} ${valueY}`"
        >
            <line
                stroke="lightgrey"
                stroke-width="2"
                x1="0"
                :x2="valueX"
                :y1="coordenadasY(0)"
                :y2="coordenadasY(0)"
            />
            <polyline
                fill="none"
                stroke="#0689b0"
                stroke-width="2"
                :points="referencePoints"
            />
            <line
                stroke="#04b500"
                stroke-width="2"
                :x1="lineGraph"
                :x2="lineGraph"
                y1="0"
                :y2="valueY"
            />
        </svg>
        <p class="f-medium">Ultimos 30 dias</p>
        <p>{{ coordenadasY(0) }}</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const valueX = '300';
const valueY = '200';

const lineGraph = ref('200')

const props = defineProps({
    amount:{
        type: Array,
        required: false,
        default: () => []
    }
})

function coordenadasY(value){
    const min = Math.min(...props.amount);
    const max = Math.max(...props.amount);

    const iterationAmount = value + Math.abs(min);
    const pixels = Math.abs(min) + Math.abs(max)
    const coordenadaY = valueY - Math.floor((iterationAmount * 100) / pixels) * 2
    return coordenadaY;
}

const referencePoints = computed(() => {
    const total = props.amount.length
    return props.amount.reduce((acumulador, actual, indice) => {
        const x = Math.floor(valueX / total) * (indice + 1);
        const y = coordenadasY(actual)
        return `${acumulador} ${x},${y}`
    }, "0, 100")
})

</script>

<style lang="scss" scoped>
.parent-graph{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin: 40px 0;
    svg{
        width: 100%;
    }
}


</style>