<template lang="">
    <div>
        <img class="icon" :src="require(`@/assets/${logo}`)" alt="">
        <span class="crypto">{{ crypto }}</span>
        <img src="@/assets/images/down-chevron.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'EditButton',
        props: {
            logo: {
                type: String,
                required: true
            },
            crypto: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .3rem .6rem;
        border-radius: 10px;
        background-color: #000000;
        gap: 15px;
        color: #ffffff;

        @media screen and (max-width: 1024px) {
            .crypto {
                display: none;
            }
        }

        .icon {
            width: 30px
        }
    }
</style>