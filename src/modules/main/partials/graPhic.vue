<template>
    <div class="parent-graph">
        <svg
            @touchstart="seeAmountValues"
            @touchmove="seeAmountValues"
            @touchend="getOut"
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
                :points="points"
            />
            <line
                v-if="showLine"
                stroke="#04b500"
                stroke-width="2"
                :x1="lineGraph"
                :x2="lineGraph"
                y1="0"
                :y2="valueY"
            />
        </svg>
        <p class="f-medium">Ultimos 30 dias</p>
    </div>
</template>

<script setup>
import {  ref, computed } from 'vue';

const valueX = '300';
const valueY = '200';

const lineGraph = ref(0)
const showLine = ref(false)

const props = defineProps({
    amount:{
        type: Array,
        required: false,
        default: () => []
    }
})

const emit = defineEmits(['touchLine'])

function seeAmountValues({target: label, targetTouches: touches}){
    showLine.value = true
    const elementWidth = label.clientWidth;
    const restante = label.getBoundingClientRect().left;
    const touchX = touches[0].clientX;
    if( (touchX - restante) <= elementWidth &&  (touchX - restante) >= 0){
        lineGraph.value = (((touchX - restante) * elementWidth) / elementWidth)
        emit('touchLine', lineGraph.value)
    }
}

function getOut(){
    showLine.value = false
}

function coordenadasY(value){
    const min = Math.min(...props.amount);
    const max = Math.max(...props.amount);

    const coordenadas = valueY - (((value - min) / Math.abs(max - min))* valueY)
    return coordenadas
}

console.log('Este es el resultado de y cuando esta en cero: ', coordenadasY(0));
console.log('Estos son los valores de las coordenadas enviadas: ', props.amount);

const points = computed(() => {
    const total = props.amount.length
    return props.amount.reduce((acumulador, actual, index) => {
        const x = Math.floor((Number(valueX) / total) * (index))
        console.log('Estas son las coordenadas en X: ', x);
        const y = coordenadasY(actual)
        console.log('Estas son las coordenadas de Y: ', y);
        return `${acumulador} ${x}, ${y}`
    }, `0, ${coordenadasY(0)}`)
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