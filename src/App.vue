<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>x:{{x}} , y: {{y}}</h1>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import useMousePosition from "@/hooks/useMousePosition";

export default defineComponent({
    name: 'App',
    components: {},
    setup() {
        const {x,y} = useMousePosition()
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
