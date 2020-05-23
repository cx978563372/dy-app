<template>
    <div class="list-top">
          <div class="num"><span>996</span>条评论</div>
          <div class="close" @click.stop="notShow">X</div>
    </div>
</template>

<script>
export default {
    name: 'top',
    data () {
        return{
            isShow: false
        }
    },
    methods: {
        notShow (e) {
            e.preventDefault()
            this.$store.state.isShow = false
            console.log(this.isShow)
        }
    },
    watch: {
        "$store.state.isShow": function(){
            this.isShow = this.$store.state.isShow;
        }
    }
}
</script>

<style scoped>
.list-top{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    width: 100%;
    height: 35px;
    position: fixed;
    background: white;
    z-index: 888;
    text-align: center;
    margin-top: -1px;
    margin-left: -10px;
    padding-top: 8px;
}
.list-top .num{
    flex: 1;
    font-size: 10px;
    padding-left: 20px;
}
.list-top .num span{
    margin-right: 3px;
}
.list-top .close{
    font-size: 14px;
    padding-right: 17px;
}
</style>