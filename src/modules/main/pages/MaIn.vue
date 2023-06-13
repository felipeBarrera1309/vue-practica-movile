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

                </div>
            </template>
        </fooTer>
    </section>
</template>

<script>
import boDy from '../partials/boDy.vue';
import fooTer from '../partials/fooTer.vue';

export default {
    components: {
        boDy,
        fooTer
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

        &.content-history {
            height: 500px;
            transition: height 0.3s ease-in-out;
        }
    }
}
</style>
