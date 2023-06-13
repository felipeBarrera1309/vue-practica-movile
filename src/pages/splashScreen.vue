<template>
    <section>
        <img src="/public/icons/cashFlow-paisaje.svg" alt="" />
        <p>Cash<span>Flow</span></p>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 15px;
    font-size: 30px;

    img {
        width: 200px;
        height: 200px;
    }

    p {
        color: var(--brand-green);
        font-weight: 500;
    }

    span {
        color: var(--brand-blue);
    }
}
</style>