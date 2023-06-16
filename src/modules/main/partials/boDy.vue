<template>
    <main>
        <p>{{ seeTitle }}</p>
        <h1 class="f-medium" :class="seeAmount < 0 ? 'text-danger': ''">{{ transformAmount }}</h1>
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
            return this.fullAmount ? this.fullAmount: this.amount
        },
        seeTitle(){
            return this.fullAmount ? this.titeDate: this.title
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
    padding: 20px 0;
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