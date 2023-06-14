<template>
    <button class="button-action border-0" @click="emit('action')">
        <p>Agregar movimiento</p>
    </button>
</template>

<script setup>

const emit = defineEmits(['action'])

</script>

<style lang="scss" scoped>
.button-action{
    background-color: var(--brand-blue);
    padding: 20px 50px;
    border-radius: 50px;
    text-align: center;
    p{
        color: white;
    }
}

</style>