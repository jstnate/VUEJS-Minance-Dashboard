<template>
    <div>
        <img :src="require(`@/assets/${logo}`)" alt="">

        <div>
            <h2>{{ crypto }}</h2>
            <p>{{ type }}</p>
        </div>

        <div>
            <h3>{{ amount }}</h3>
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

</style>