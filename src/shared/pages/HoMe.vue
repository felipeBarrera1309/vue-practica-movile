<template>
    <Suspense>
        <template #default>
            <HomeMain />
        </template>
        <template #fallback>
            <splash-screen />
        </template>
    </Suspense>
</template>

<script setup>
import splashScreen from '../../modules/viewReload/page/splashScreen.vue';
import { defineAsyncComponent } from 'vue';

const HomeMain = defineAsyncComponent(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('../../modules/main/pages/MaIn.vue'))
        }, 1500)
    })
})

</script>

<style lang="scss" scoped>

</style>