<template>
    <div class="parent-card d-flex">
        <div>
            <h1 class="f-medium">{{ data.title }}</h1>
            <p>{{ data.description }}</p>
        </div>
        <div>
            <img src="/public/icons/icon-trash-vue.svg" alt="" width="25" />
            <p
                :class="Number(data.amount) >= 0
                    ?
                    'price-amount-positive' :
                    'price-amount-negative'
                "
            >
                {{ currency(data.amount) }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { currency } from '../../../shared/currency/currency';

const props = defineProps({
    data:{
        type: Object,
        required: true,
        default: () => {}
    }
})


</script>

<style lang="scss" scoped>
.parent-card{
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(227, 238, 241);
    min-height: 80px;
    overflow: hidden;
    gap: 5px;
    div:first-child{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 10px;
        h1{
            font-size: 20px;
        }
        p{
            word-break: break-word;
        }
    }
    div:last-child{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        .price-amount-positive{
            color: var(--brand-green);
        }
        .price-amount-negative{
            color: red;
        }
    }
}

</style>