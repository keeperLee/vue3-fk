<template>
    <div class="message">
        <h1>{{}}</h1>
        <button @click="onChange">发送自定义事件</button>
    </div>
</template>

<script setup lang="ts">
import {defineProps ,defineEmits} from "vue";

interface IUser {
    name:string;
    age:number
}
interface IEvents{
    (e:'change',age:number) : void
}
const props = defineProps<{user:IUser}>()
const emit = defineEmits<IEvents>()
const onChange =  ()=>{
    emit('change',props.user.age)
}
</script>

<style scoped>

</style>
