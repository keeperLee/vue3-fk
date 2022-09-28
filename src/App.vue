<template>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <h1 v-if="loading">Loading!.....</h1>
    <img v-if="loaded" :src="result.message" >
</template>

<script lang="ts">
import { defineComponent} from 'vue';

import useURLLoader from "@/hooks/useURLLoader";
export default defineComponent({
    name: 'App',
    components: {},
    setup() {
        const {result,loading,loaded,error} = useURLLoader('https://dog.ceo/api/breeds/image/random')
        return {
            result,loading,loaded,error
        }
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
