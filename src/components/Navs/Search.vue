<template>
    <div class="search">
        <div class="ewm"><i class="iconfont">&#xe623;</i></div>
        <div class="input-search">
            <i class="iconfont">&#xe600;</i>
            <input type="text" name="search" id="search" placeholder="留下你的精彩评论吧">
        </div>
        <button @click.stop="ChangeSearch">取消</button>
    </div>
</template>

<script>
export default {
    name: 'search',
    data(){
        return{

        }
    },
    methods: {
        ChangeSearch (e) {
            e.preventDefault()
            this.$store.state.searchShow = false
        }
    }
}
</script>

<style>
.search{
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: -49px;
    position: fixed;
    top: 49px;
    z-index: 999;
    background: rgb(20, 22, 27);
    color: white;
}
.search .ewm{
    margin-top: 15px;
    margin-left: 10px;
    height: 25px;
    line-height: 24px;
}
.search .input-search{
    width: 79%;
    height: 24px;
    background: gray;
    margin-top: 15px;
    margin-left: 10px;
    border-radius: 3px;
    display: flex;
}
.search .input-search i{
    font-size: 13px;
    line-height: 27px;
    margin: 0 5px;
}
.search .input-search input{
    background: gray;
    height: 16px;
    width: 100%;
    margin-top: 4px;
    color: #fff;
    font-size: 12px;
}
.search button{
    margin-top: 15px;
    font-size: 13px;
    line-height: 23px;
    margin-left: 10px;
    font-weight: 600;
    color: rgb(216, 49, 49);
    height: 20px;
}
</style>