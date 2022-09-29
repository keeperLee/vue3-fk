<template>
    <div class="message">
        <h1>{{text}}</h1>
        <button @click="onChange">发送自定义事件</button>
    </div>
</template>

<script setup lang="ts">
import {defineProps ,defineEmits} from "vue";
const props = defineProps({text:String})

const emit = defineEmits(['change','focus'])
const onChange =  ()=>{
    emit('change',props.text)
}
</script>

<style scoped>

</style>
