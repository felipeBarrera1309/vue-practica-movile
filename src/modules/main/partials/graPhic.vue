<template>
    <div class="parent-graph">
        <svg
            viewBox="0 0 300 200"
        >
            <line
                stroke="lightgrey"
                stroke-width="2"
                x1="0"
                x2="300"
                y1="100"
                y2="100"
            />
            <polyline
                fill="none"
                stroke="#0689b0"
                stroke-width="2"
                points="0,0 100,50 110,50 120,80 180,100 230,100 300,200"
            />
            <line
                stroke="#04b500"
                stroke-width="2"
                x1="120"
                x2="120"
                y1="0"
                y2="200"
            />
        </svg>
        <p class="f-medium">Ultimos 30 dias</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.parent-graph{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    svg{
        width: 100%;
    }
}


</style>