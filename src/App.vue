<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    {{ data.count }}
    {{ data.double }}
    <button @click="data.increase">增加</button>
</template>

<script lang="ts">
import {computed, ref, reactive, defineComponent} from 'vue';
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
        const hello = 'hello'
        const data:Idata = reactive({
            count: 0,
            increase: () => {
                data.count++
            },
            double: computed(() => {
                return data.count * 2
            })
        })
        return {
            hello,
            data
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
