<template lang="">
    <div class="container">
        <div class="crypto">
            <img :src="require(`@/assets/${logo}`)" alt="">
            <h4>{{ crypto }}</h4>
        </div>
        <div class="value">
            <h2>{{ value }}</h2>
            <h2>{{ type }}</h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: "AssetsComponents",
        props: {
            logo: {
                type: String,
                required: true
            },
            crypto: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;

        .crypto {
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        

            img {
                width: 60px;
                aspect-ratio: 1/1;
            }

            h4 {
                font-size: 12px;
            }
        }

        .value {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            margin: 0 auto;
        }
    }
</style>