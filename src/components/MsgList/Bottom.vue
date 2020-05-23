<template>
    <div class="bottom">
        <div class="input"><input type="text" placeholder="留下你的精彩评论吧"></div>
        <div class="aite"><span>@</span></div>
        <div class="emoji"><span>☺</span></div>
    </div>
</template>

<script>
export default {
    name: 'bottom'
}
</script>

<style scoped>
.bottom{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 40px;
    background: white;
    font-size: 10px;
    color: #c9c9ce;
    line-height: 40px;
    padding: 0 10px;
}
.bottom .input{
    flex: 1;
}
.bottom .input input{
    width: 100%;
    outline: none;
}
.bottom .aite{
    font-size: 16px;
    color: #8b8888;
}
.bottom .emoji{
    font-size: 16px;
    color: #8b8888;
    margin: 0 10px;
}
</style>