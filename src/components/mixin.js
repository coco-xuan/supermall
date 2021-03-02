import { debounce } from './utils.js'


export const imgLoadMix = {
    data() {
        return {
            itemImagload: null,
            refresh: null
        }
    }
    ,
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 0)
        this.itemImagload = () => {
            this.refresh();
        }
        this.$bus.$on('loadOver', this.itemImagload)
    }
}
export const backTop = {
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)

        }



    }
}