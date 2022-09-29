<template>
    <div class="app-2">
        <h1>{{ hello }}</h1>
        <h1>{{ count }}</h1>
        <button @click="count++">添加</button>
        <hello-world msg="6666666666"></hello-world>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const hello = 'hello world'
const count = ref(0)
</script>

<style scoped>

</style>
