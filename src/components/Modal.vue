<template>
    <teleport to="#modal">
        <div id="center" v-if="isOpen">
            <h2><slot>this is a modal</slot></h2>
            <button @click="btnClick">Close</button>
            <h2>lang:{{lang}}</h2>
            <h2>currentUser:{{currentUser.name}}</h2>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent,inject} from "vue";

export default defineComponent({
    name: "Modal",
    props:{
        isOpen:Boolean,
    },
    emits:{
      'closeModal' : null
    },
    setup(props,context){

        //inject拿到provide提供的数据
        const lang = inject('lang')
        const currentUser = inject<{name:string}>('currentUser')
        const btnClick = ()=>{
            context.emit('closeModal')
        }
        return {
            lang,
            currentUser,
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
