<template>
    <section>
        <header>
            <img src="/public/icons/cashFlow-paisaje.svg" alt="LogoReload" @click="reload" />
            <p class="f-medium">Cash<span>Flow</span></p>
            <div />
        </header>

        <boDy
            :title="title"
            :titeDate="titleSelect"
            :amount="amount"
            :fullAmount="fullAmount"
        >
            <template #graphic>
                <p>Graphic</p>
            </template>
            <template #action>
                <p>Action</p>
            </template>
        </boDy>
        <fooTer @showFooter="showHistory = !showHistory">
            <template #cards>
                <div class="transition-footer" :class="{ 'content-history': showHistory }">
                    <template v-if="showHistory">
                        <moVements
                            v-for="(movimiento, i) in movimientos"
                            :key="i"
                            :data="movimiento"
                        />
                    </template>
                </div>
            </template>
        </fooTer>
    </section>
</template>

<script>
import { ref } from 'vue';
import boDy from '../partials/boDy.vue';
import fooTer from '../partials/fooTer.vue';
import moVements from '../components/moVements.vue';

export default {
    components: {
        boDy,
        fooTer,
        moVements
    },
    setup(){
        const movimientos = ref([
            { id: 1, title: "Movimiento", description: "Deposito de salarios", amount: "1000", },
            { id: 2, title: "Movimiento 1", description: "Deposito de honorarios", amount: "500", },
            { id: 3, title: "Movimiento 3", description: "Comida", amount: "-100", },
            { id: 4, title: "Movimiento 4", description: "Colegiatura", amount: "1000", },
            { id: 5, title: "Movimiento 5", description: "Reparación equipo", amount: "1000", },
        ])


        return {
            movimientos
        }
    },
    data: () => ({
        showHistory: false,
        amount: 0,
        fullAmount: 6000000,
        title: 'Ahorro total',
        titleSelect: '13/6/2023'
    }),
    methods: {
        reload() {
            location.reload();
        }
    }
}

</script>

<style lang="scss" scoped>
section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        font-size: 20px;
        width: 100vw;

        img {
            width: 50px;
        }

        p {
            margin: 0;
            color: var(--brand-green);

            span {
                color: var(--brand-blue);
            }
        }

        div {
            width: 30px;
        }
    }

    .transition-footer {
        transition: height 0.3s ease-in-out;
        height: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow-y: auto;

        &.content-history {
            height: 500px;
            transition: height 0.3s ease-in-out;
        }
    }
    .transition-footer::-webkit-scrollbar{
        width: 0;
    }
}
</style>
