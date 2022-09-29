<template>
    <img :src="result && result.message" alt="">
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
    name: "DogShow",
    async setup() {
        const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
        // const rawData = await axios.get('https://dog.ceo/api/breeds/image/ran1dom')
        return {
            result:rawData.data
        }
    }
})
</script>

<style scoped>

</style>
