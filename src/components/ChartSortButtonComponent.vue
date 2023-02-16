<template lang="">
    <div class="button">
        <span>{{ sort }}</span>
    </div>
</template>

<script>
    export default {
        name: 'ChartSortButton',
        props: {
            sort: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        background-color: #000000;
        width: 40px;
        aspect-ratio: 1/1;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: rgba($color: #FFFFFF, $alpha: .8);
        
        }

        &:hover span {
                color: #000000;
        }
        
        span {
            color: #ffffff;
            font-size: 20px;
        }
    }
</style>