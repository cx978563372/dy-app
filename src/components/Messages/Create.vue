<template>
  <div class="create">
      <div class="top">
          <div class="close" @click="send()">X</div>
          <div class="title">多选建组</div>
          <input type="button" value="完成">
      </div>
      <div class="search">
          <i class="iconfont">&#xe600;</i>
          <input type="text" name="" id="" placeholder="搜索">
      </div>
      <div class="qls">
          <span>已加入的群聊</span>
          <i>></i>
      </div>
      <div class="hy">
          <div class="hy-top">
              <span>互关好友</span>
          </div>
          <div class="hy-lists">
                <input type="checkbox" class="list tui-checkbox">
                <div class="tx"><img src="@/assets/images/me.jpg" alt=""></div>
                <div class="name">Chenxin</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'create',
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        send () {
            this.$emit('getShow',this.isShow)
        }
    }
}
</script>

<style scoped>
.tui-checkbox:checked {
	background:#3c83ee
}
.tui-checkbox {
	width:20px;
	height:20px;
	background-color:#161823;
	border:solid 1px #dddddd;
	-webkit-border-radius:50%;
	border-radius:50%;
	font-size:0.8rem;
	margin:0;
	padding:0;
	position:relative;
	display:inline-block;
	vertical-align:top;
	cursor:default;
	-webkit-appearance:none;
	-webkit-user-select:none;
	user-select:none;
	-webkit-transition:background-color ease 0.1s;
	transition:background-color ease 0.1s;
}
.tui-checkbox:checked::after {
	content:'';
	top:5px;
	left: 4px;
	position:absolute;
	background:transparent;
	border:#fff solid 2px;
	border-top:none;
	border-right:none;
	height:6px;
	width:10px;
	-moz-transform:rotate(-45deg);
	-ms-transform:rotate(-45deg);
	-webkit-transform:rotate(-45deg);
	transform:rotate(-45deg);
}
.create{
    width: 100vw;
    height: 100%;
    background: #161823;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow: hidden;
}
.create .top{
    display: flex; 
    height: 30px;  
    line-height: 30px;
    border-bottom: 1px solid rgba(169, 169, 169, 0.219);
}
.create .top .close{
    margin-left: 20px;
    font-size: 14px;
    color: darkgray;
}
.create .top .title{
    flex: 1;
    text-align: center;

}
.create .top input{
    margin-right: 20px;
    color: brown;
    font-size: 14px;
}
.create .search{
    margin: 5px 15px;
    height: spx;
    line-height: 30px;
    border-bottom: 1px solid rgba(169, 169, 169, 0.219);
    color: darkgrey;
    font-size: 13px;
}
.create .search i{
    font-size: 13px;
}
.create .search input{
    color: darkgrey;
}
.create .qls{
    margin-top: 10px;
    display: flex;
    font-size: 15px;
    padding: 0 10px;
}
.create .qls span{
    flex: 1;
}
.create .hy{
    padding: 0 10px;
}
.create .hy .hy-top{
    margin: 10px 0;
    font-size: 12px;
    color: darkgrey;
}
.create .hy .hy-lists{
    display: flex;
    font-size: 13px;
    line-height: 21px;
}
.create .hy .hy-lists .tx{
    margin: 0 10px;
    margin-top: -5px;
}
.create .hy .hy-lists .tx img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>