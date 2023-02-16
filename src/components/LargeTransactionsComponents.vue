<template lang="">
    <div class="container">
        <img class="logo" :src="require(`@/assets/${logo}`)" alt="">
        
        <div>
            <h3>{{ crypto }}</h3>
            <p>{{ short }}</p>
        </div>

        <div>
            <h3>Market Cap</h3>
            <p>{{ marketCap }}</p>
        </div>

        <div>
            <h3>24h change</h3>
            <span :style="{ color: change.includes('+') ? 'green' : 'red' }">{{ change }}</span>
        </div>

        <img :src="require(`@/assets/${chageChart}`)" alt="change chart">

        <button>Trade</button>
    </div>
</template>

<script>
    export default {
        name: "LargeTransactionsComponents",
        props: {
            logo: String,
            crypto: String,
            short: String,
            marketCap: String,
            change: String,
            chageChart: String
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background: rgba(32, 35, 43, 0.7);
        border-radius: 20px;
        width: 90%;

        .logo {
            width: 40px;
        }

        div {
            width: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 2px;

            h3 {
                font-weight: 500;
            }

            p {
                opacity: .8;
            }
        }

        button {
            padding: .3rem .5rem;
            border-radius: 15px;
            background-color: #000000;
            border: none;

        }
    }
</style>