<template>
  <div class="me">
      <div class="bg">
        <img src="@/assets/images/me_bg.png" alt="">
        <div class="listbtn">-</div>
      </div>
      <div class="content">
        <div class="top">
          <div class="top-tx">
            <img src="@/assets/images/me.jpg" alt="">
            <button class="bj">编辑资料</button>
            <button class="hy">+好友</button>
          </div>
          <div class="top-name">
            <div class="name">TestID</div>
            <div class="dyid">抖音号 : 1111111</div>
          </div>
          <div class="top-desc">
            <div class="desc">你还没有填写个人简介，点击添加...</div>
            <div class="bqs">
              <div class="add">地区</div>
              <div class="bq">+增加性别年龄、学校等标签</div>
            </div>
          </div>
          <div class="top-count">
            <div class="zan"><span>0</span>获赞</div>
            <div class="gz"><span>0</span>关注</div>
            <div class="fs"><span>0</span>粉丝</div>
            <div class="hy"><span>0</span>好友</div>
          </div>
        </div>
        <div class="center">
          <div class="center-top">
            <div @click.stop="ChangeIsActive(1)" :class="isActive == 1 ? 'zp active' : 'zp'">作品<span>0</span></div>
            <div @click.stop="ChangeIsActive(2)" :class="isActive == 2 ? 'dt active' : 'dt'">动态<span>0</span></div>
            <div @click.stop="ChangeIsActive(3)" :class="isActive == 3 ? 'xh active' : 'xh'">喜欢<span>0</span></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      isActive: 1
    }
  },
  methods:{
    ChangeIsActive (index) {
      this.isActive = index
    }
  }
}
</script>

<style scoped>
.active{
  border-bottom: 1.5px solid #FACE15;
  color: #fff !important;
} 
.me{
  width: 100%;
  min-height: 100vh;
  background: #161823;
  color: #fff;
}
.me .bg{
  height: 120px;
}
.me .bg img{
  width: 100%;
}
.me .content{
  width: 100%;
  background: #161823;
  position: fixed;
  top: 140px;
  z-index: 999;
}
.me .content .top .top-tx{
  width: 100%;
  display: flex;
  margin-top: -10px;
  margin-left: 12px;
}
.me .content .top .top-tx img{
  display: block;
  width: 84px;
  border: 4px solid #161823;
  border-radius: 50%;
}
.me .content .top .top-tx .bj,
.me .content .top .top-tx .hy{
  border-radius: 2px;
  background: #393A44;
  font-size: 13px;
  color: #E7E7E8;
}
.me .content .top .top-tx .bj{
  margin-top: 25px;
  margin-left: 8px;
  width: 50%;
  height: 35px;
}
.me .content .top .top-tx .hy{
  margin-top: 25px;
  margin-left: 5px;
  width: 18%;
  height: 35px;
}
.me .content .top .top-name,
.me .content .top .top-desc,
.me .content .top .top-count{
  width: 100%;
  margin: 15px;
}
.me .content .top .top-name .name{
  margin-top: 10px;
  font-weight: 600;
}
.me .content .top .top-name .dyid{
  margin-top: 5px;
  font-size: 12px;
  color: rgba(226, 226, 228, 0.801);
}
.me .content .top .top-desc{
  font-size: 13px;
  color: rgba(226, 226, 228, 0.801);
}
.me .content .top .top-desc .bqs{
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: #8B8C91;
}
.me .content .top .top-desc .bqs .add{
  width: 35px;
  height: 20px;
  background: #242630;
  text-align: center;
  line-height: 20px;
  border-radius: 3px;
}
.me .content .top .top-desc .bqs .bq{
  width: 170px;
  height: 20px;
  background: #242630;
  text-align: center;
  line-height: 20px;
  border-radius: 3px;
  margin-left: 5px;
}
.me .content .top .top-count{
  display: flex;
}
.me .content .top .top-count .zan,
.me .content .top .top-count .gz,
.me .content .top .top-count .fs,
.me .content .top .top-count .hy{
  margin-right: 10px;
  font-size: 13px;
  color: #8B8C91;
  line-height: 20px;
}
.me .content .top .top-count .zan span,
.me .content .top .top-count .gz span,
.me .content .top .top-count .fs span,
.me .content .top .top-count .hy span{
  margin-right: 5px;
  color: #fff;
  font-size: 15px;
}
.me .content .center{
  width: 100%;
}
.me .content .center .center-top{
  display: flex;
  margin: 0 10px;
}
.me .content .center .center-top .zp,
.me .content .center .center-top .dt,
.me .content .center .center-top .xh{
  flex: 1;
  font-size: 13px;
  text-align: center;
  padding: 7px 0;
  color: #8B8C91;
}
.me .content .center .center-top .zp span,
.me .content .center .center-top .dt span,
.me .content .center .center-top .xh span{
  margin-left: 3px;
}
</style>