<template>
    <teleport to="#modal">
        <div id="center" v-if="isOpen">
            <h2><slot>this is a modal</slot></h2>
            <button @click="btnClick">Close</button>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "Modal",
    props:{
        isOpen:Boolean,
    },
    emits:{
      'closeModal' : null
    },
    setup(props,context){
        const btnClick = ()=>{
            context.emit('closeModal')
        }
        return {
            btnClick
        }
    }

})
</script>

<style scoped>
#center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
}
</style>
