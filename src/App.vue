<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    {{ count }}
    {{ double }}
    <button @click="increase">增加</button>
</template>

<script lang="ts">
import {computed, ref, reactive, defineComponent, toRefs, onMounted, onUpdated} from 'vue';
import HelloWorld from './components/HelloWorld.vue';

interface Idata {
    count: number,
    double: number,
    increase: () => void
}

export default defineComponent({
    name: 'App',
    components: {
        // HelloWorld
    },
    setup() {
        // const count = ref(0)
        // const double = computed(() => {
        //     return count.value * 2
        // })
        // const increase = () => {
        //     count.value++
        // }
        onMounted(() => {
            console.log('onMounted')
        })

        onUpdated(()=>{
            console.log('onUpdated')
        })
        const hello = 'hello'
        const data: Idata = reactive({
            count: 0,
            increase: () => {
                data.count++
            },
            double: computed(() => {
                return data.count * 2
            })
        })

        const refData = toRefs(data)

        return {
            hello,
            ...refData
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
