<template>
    <div class="toast" v-show='isShow'>
        {{message}}
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        methods: {
            show(message, deltime = 2000) {
                this.message = message;
                this.isShow = true
                setTimeout(() => {
                    this.isShow = false
                    this.message = ''
                }, deltime)


            }
        }
    }
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        background-color: rgba(0, 0, 0, .7);
        color: #fff;
        padding: 8px 20px;
        font-size: 16px;
    }
</style>