<template>
    <div class="parent-form">
        <div class="parent-head">
            <h1 class="f-medium">Movimiento</h1>
            <img @click="emit('closeModal')" src="/public/icons/icon-close-vue.svg" alt="" />
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['closeModal'])

</script>

<style lang="scss" scoped>

.parent-form{
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    background-color: white;
    padding: 10px;
    .parent-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        h1{
            color: var(--brand-blue);
            font-size: 1.5rem;
        }
    }
}

</style>