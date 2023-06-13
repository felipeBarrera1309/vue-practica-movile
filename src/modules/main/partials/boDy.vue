<template>
    <main>
        <p>{{ seeTitle }}</p>
        <h1 class="f-medium">{{ transformAmount }}</h1>
        <div class="graphic">
            <slot name="graphic"></slot>
        </div>
        <div class="action">
            <slot name="action"></slot>
        </div>
    </main>
</template>

<script>
import { currency } from '../../../shared/currency/currency.js';

export default{
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        },
        titeDate: {
            type: String,
            required: false,
            default: ''
        },
        amount: {
            type: Number,
            required: false,
            default: null
        },
        fullAmount:{
            type: Number,
            required: false,
            default: null
        }
    },
    computed: {
        seeAmount(){
            return this.amount ? this.amount: this.fullAmount
        },
        seeTitle(){
            return this.amount ? this.title: this.titeDate
        },
        formatNumber(){
            return new Intl.NumberFormat(('es-CO'), {
                style: 'currency',
                currency: 'COP'
            })
        },
        transformAmount(){
            return currency(this.seeAmount)
        }
    }
}

</script>

<style lang="scss" scoped>
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px);
    gap: 15px;
    h1{
        font-size: 40px;
        color: green;
    }
    .graphic{
        min-height: 60px;
    }
    .action{
        min-height: 60px;
    }
}

</style>