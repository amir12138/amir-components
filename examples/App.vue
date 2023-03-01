<template>
    <div id="root">
        1234
        <AmirButton>按钮</AmirButton>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    props: {},
    data() {
        return {
        };
    },
    computed: {
    },
    created() {
    },
    mounted() { },
    updated() { },
    methods: {
    }


};
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

#root {
    width: 100%;
    height: 100%;
}
</style>
