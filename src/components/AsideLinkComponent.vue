<template>
    <a>
        <img :src="require(`@/assets/${icon}`)" alt="link icon">
        {{ text }}
    </a>
</template>

<style lang="scss" scoped>
    a {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 16px;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 30px;
        }
    }
</style>

<script>
    export default {
        name: 'AsideLinkComponent',
        props: {
            icon: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    }
</script>