<template>
    <div class="container">
        <div class="logo">
            <img :src="require(`@/assets/${logo}`)" alt="">
        </div>

        <div class="crypto">
            <h2>{{ crypto }}</h2>
            <p>{{ type }}</p>
        </div>

        <div class="values">
            <h3 :style="{ color: amount.includes('+') ? 'green' : 'red' }">{{ amount }}</h3>
            <p>{{ date }}</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'TransactionComponent',
        props: {
            logo: {
                type: String,
                required: true
            },
            crypto: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            amount: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .logo {
            width: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            aspect-ratio: 2/1;

            img {
                width: 40px;
            }
        }

        p {
            color: #ffffff;
            opacity: .8;
        }

        .crypto {
            width: 70px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 5px;
        }

        .values {
            width: 120px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: flex-start;
            justify-content: center;
        }
    }
</style>