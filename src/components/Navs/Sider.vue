<template>
  <div class="sider">
      <div class="title"><span>@{{inputList[page].name}}</span></div>
      <div class="desc"><span>{{inputList[page].desc}}</span></div>
      <div class="mic">
        <i class="iconfont">&#xe605;</i><div class="mic-name"><span :data-text="inputList[page].mic">{{inputList[page].mic}}</span></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Sider',
    props: [
        'inputList'
    ],
    data () {
        return {
            interval: null,
            Lists: null,
            page: 0
        }
    },
    methods: {

    },
    watch: {
        "$store.state.page": function(){
            this.page = this.$store.state.page; 
        }
    },
    mounted () {

    }
}
</script>

<style scoped>
.sider{
    width: 80%;
    color:#fff;
    position: fixed;
    z-index: 999;
    bottom: 65px;
    font-size: 12px;
    padding-left: 10px;
    font-weight: 600;
}
.sider .desc{
    font-size: 8px;
    font-weight: 400;
    padding: 10px 0;
}
.sider .mic{
    display: flex;
}
.sider .mic .mic-name{
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
}
.sider .mic i{
    font-size: 8px;
    margin-right: 5px;
}

.sider .mic .mic-name span{
    display: inline-block;
    animation:  scroll 5s linear infinite;
}
.sider .mic .mic-name span::after{
    content: attr(data-text);
    margin-left: 35px;
}
@keyframes scroll {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(calc(-50% - 30px));
    }
}


</style>