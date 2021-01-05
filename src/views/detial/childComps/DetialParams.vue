<template>

    <div class="param-info" v-if="Object.keys(paramInfo).length !==0">

        <div v-for="tables in paramInfo.rule.tables">
            <table>
                <!-- <table v-for="(table,index) in tables" class="info-size" :key='index'> -->
                <!-- <tr v-for="(tr,indey) in tables" :key="indey">
                    <td v-for="(td, indez) in tr" :key="indez">
                        {{td}}
                    </td>
                </tr> -->
                <tr v-for="(tr,indey) in tables" :key="indey">
                    <td v-for="(td, indez) in tr" :key="indez">
                        {{td}}
                    </td>
                </tr>
            </table>
        </div>
        <table class="info-param">
            <tr v-for="(info,index) in paramInfo.info.set">
                <td class="info-param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="paramInfo.info.images">
            <img :src="paramInfo.info.images[0]" alt="">
        </div>
        <!-- {{paramInfo}} -->

    </div>
</template>

<script>
    export default {
        name: 'DetialParams',
        props: {
            paramInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .param-info {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }

    .param-info table {
        width: 100%;
        border-collapse: collaps;
    }

    .param-info table tr {
        height: 42px;
    }

    .param-info table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }

    .info-param-key {
        width: 95px;
    }

    .info-param {
        border-top: 1px solid rgba(0, 0, 0, .1);
    }

    .param-value {
        color: #eb4868;
    }

    .info-img img {
        width: 100%;
    }
</style>