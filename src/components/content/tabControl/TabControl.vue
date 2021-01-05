<template>
    <div class="tab-control">
        <div class="spn" v-for="(item,index) in titles" :class="{active: index === somenum}"
            @click="activeClick(index)">
            <span>{{item}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TabControl',
        data() {
            return {
                somenum: 0
            }
        },
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            activeClick(index) {
                this.somenum = index;
                this.$emit("tabClick", index)

            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        background-color: #fff;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }

    .spn {
        flex: 1;
        text-align: center;

    }

    .spn span {
        padding: 5px;
    }

    .active {
        transition: all .1s;
        color: var(--color-high-text);
    }

    .active span {
        transition: all .1s;
        border-bottom: 3px solid var(--color-high-text);
    }
</style>