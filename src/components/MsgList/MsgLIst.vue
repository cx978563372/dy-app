<template>
  <div class="msglists">
      <list-top></list-top>
      <div class="space"></div>
      <div class="lists" v-for="i in 10" :key="i">
          <div class="tx"><img src="@/assets/images/x1.png" alt="x1"></div>
          <div class="list">
              <div class="name">人民网</div>
              <div class="content">谢谢大家的点赞和支持!<span>3小时前</span></div>
              <div class="more">—<span>展开28条回复<i class="iconfont">&#xe601;</i></span></div>
          </div>
          <div class="heart"><i class="iconfont">&#xe62f;</i>432</div>
      </div>
      <bottom></bottom>
  </div>
</template>

<script>
export default {
    name: 'msglist',
    data () {
        return {
            
        }
    },
    components: {
        ListTop: () => import('./Top'),
        Bottom: () => import('./Bottom')
    }
}
</script>

<style scoped>、
.msglists::-webkit-scrollbar {
    display: none;
}
.msglists{
    width: 100%;
    height: 70%;
    position: fixed;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 999;
    padding: 10px;
    overflow-y: auto;
    padding-top: 0; 
}
.msglists .lists{
    display: flex;
    margin: 10px 0;
}
.msglists .space{
    margin-top: 40px;
}
.msglists .lists .tx{
    width: 45px;
    margin-right: 10px;
}
.msglists .lists .tx img{
    width: 45px;
}
.msglists .lists .list{
    font-size: 14px;
    padding-top: 4px;
    flex: 1;
}
.msglists .lists .list .name{
    font-size: 13px;
    padding-bottom: 5px;
}
.msglists .lists .list .content{
    position: relative;
}
.msglists .lists .list .content span{
    display: inline-block;
    font-size: 12px;
    color: #ababab;
    padding: 0 5px;
    position: relative;
    top: -1px;
}
.msglists .lists .list .more{
    margin-top: 10px;
    color: #ababab;
    font-size: 12px;
}
.msglists .lists .list .more i{
    font-size: 7px;
    margin-left: 5px;
}
.msglists .lists .heart{
    font-size: 10px;
    color: #8b8888;
    display: flex;
    flex-direction: column;
}
.msglists .lists .heart i{
   color: #c9c9ce; 
   text-align: center;
   margin-top: 10px;
   margin-bottom: 2px;
}
</style>