<template>
    <div class="footer">
        <div @click="emit('showFooter')" />
        <h1 class="f-medium">Historial</h1>
        <slot name="cards"></slot>
    </div>
</template>

<script setup>

const emit = defineEmits(['showFooter'])

</script>

<style lang="scss" scoped>
.footer {
    min-height: 70px;
    box-shadow: 0px 3px 6px blue;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    gap: 10px;
    position: absolute;
    width: 100vw;
    bottom: 0;
    background-color: white;

    div:first-child {
        height: 10px;
        width: 80px;
        border-radius: 10px;
        background-color: lightblue;
        margin: auto;
    }

    h1 {
        font-size: 25px;
        margin: 0;
    }
}
</style>