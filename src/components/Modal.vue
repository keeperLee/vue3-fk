<template>
    <teleport to="#modal">
        <div id="center">
            <h2>this is a modal</h2>
        </div>
    </teleport>
</template>

<script lang="ts">
export default {
    name: "Modal"
}
</script>

<style scoped>
    #center {
        width: 200px;
        height: 200px;
        border:2px solid black;
        background: white;
        position:fixed;
        left: 50%;
        top: 50%;
    }
</style>
