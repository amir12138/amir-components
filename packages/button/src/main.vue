<template>
    <el-button class="amir-button" v-bind="$attrs" :loading="loadingState" :size="size" :type="type" @click="click">
        <slot></slot>
    </el-button>
</template>


<script>
export default {
    name: 'AmirButton',

    props: {
        size: {
            type: String,
            default: 'mini'
        },
        type: {
            type: String,
            default: ''
        },
        autoLoading: {
            type: Boolean,
            default: false
        },
        
    },

    data() {
        return {
            loadingState: false
        };
    },

    methods: {
        /**
        * 点击时触发事件
       */
        click() {
            if (this.autoLoading) {
                this.loadingState = true;
            }
            this.$emit('click', () => {
                this.loadingState = false;
            });
        }
    },

    computed: {
    }
};
</script>
