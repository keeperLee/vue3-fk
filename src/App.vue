<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
<!--    {{ count }}-->
<!--    {{ double }}-->
<!--    <button @click="increase">增加</button>-->
    <h1>x:{{x}} , y: {{y}}</h1>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted} from 'vue';


export default defineComponent({
    name: 'App',
    components: {},
    setup() {
        const x = ref(0)
        const y = ref(0)
        const updateMouse = (e:MouseEvent) =>{
            x.value = e.pageX
            y.value = e.pageY
        }

        onMounted(() => {
            document.addEventListener('click',updateMouse)
        })

        onUnmounted(()=>{
            document.removeEventListener('click',updateMouse)
        })

        return {
            x,y
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
