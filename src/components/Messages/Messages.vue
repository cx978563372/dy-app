<template>
  <div class="messges">
      <div class="top">
        <div class="title">消息</div>
        <div class="create" @click="CreateShow">创建群聊</div>
      </div>
      <div class="nav">
        <div class="fs">
          <div class="img"><img src="@/assets/images/fs.png" alt=""></div>
          <span>粉丝</span>
        </div>
        <div class="zan">
          <div class="img"><img src="@/assets/images/zan.png" alt=""></div>
          <span>赞</span>
        </div>
        <div class="aite">
          <div class="img"><img src="@/assets/images/aite.png" alt=""></div>
          <span>@我的</span>
        </div>
        <div class="pl">
          <div class="img"><img src="@/assets/images/pl.png" alt=""></div>
          <span>评论</span>
        </div>
      </div>
      <div class="ad">
        <div class="title">
          <img src="@/assets/images/ds.png" alt="">
          <span>多闪</span>
          <div class="pyq">抖音朋友圈</div>
        </div>
        <div class="content">
          <div class="tx"><img src="@/assets/images/ds_2.png" alt=""></div>
          <div class="desc">来多闪，一起美颜视频聊天</div>
          <button>下载</button>
        </div>
      </div>
      <div class="qls">
        <div class="ql" v-for="item in qls" :key="item.id">
          <img v-bind:src="item.url" alt="">
          <div class="content">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
      <div class="tjgz">
        <div class="title">推荐关注<i></i></div>
        <div class="ql" v-for="(item, index) in tjgzs" :key="item.id">
          <img v-bind:src="item.url" alt="">
          <div class="content">
            <div class="desc">
              <div class="title">{{item.title}}</div>
              <div class="age_add">
                <div class="age" v-if="ageShow(index)">{{item.age}}</div>
                <div class="add" v-if="addShow(index)">{{item.add}}</div>
              </div>
              <span>可能认识的人</span>
            </div>
            <div class="btn">
              <button>+关注</button>
              <div class="close">X</div>
            </div>
          </div>
        </div>        
      </div>
      <transition name="up">
      <create v-if="isCreateShow" @getShow="getShow"></create>
      </transition>
  </div>
</template>

<script>
import Create from './Create'
export default {
  name: 'messges',
  data () {
    return{
      qls:[
        {
          id: 1,
          url: require('@/assets/images/pls_1.png'),
          title: "发起群聊",
          desc: "要求好友一起建群吧"
        },
        {
          id: 2,
          url: require("@/assets/images/pls_2.png"),
          title: "抖音小助手",
          desc: "走进科学·12:10"
        }
      ],
      tjgzs:[
        {
          id: 1,
          url: require('@/assets/images/gz_1.png'),
          title: "浮生浮梦(no age)",
          age: '',
          add: "怀化"
        },
        {
          id: 2,
          url: require('@/assets/images/gz_1.png'),
          title: "第一无极剑圣",
          age: '23岁',
          add: "金华"
        },
        {
          id: 3,
          url: require('@/assets/images/gz_1.png'),
          title: "第二无极剑圣(no add)",
          age: '23岁',
          add: ""
        },
        {
          id: 4,
          url: require('@/assets/images/gz_1.png'),
          title: "第三无极剑圣(no add,age)",
          age: '',
          add: ""
        }
      ],
      isCreateShow: false
    }
  },
  components: {
    Create
  },
  methods: {
    ageShow(index){
      if(this.tjgzs[index].age == ''){
        return false
      }else{
        return true
      }
    },
    addShow(index){
      if(this.tjgzs[index].add == ''){
        return false
      }else{
        return true
      }
    },
    allShow(index){
      if(addShow(index) == false && ageShow(index) == false){
        return true
      }else{
        return false
      }
    },
    CreateShow () {
      this.isCreateShow = true
    },
    getShow (data) {
      this.isCreateShow = data
    }
  }
}
</script>

<style scoped>
.up-enter-active, .up-leave-active {
  transition: all .2s
}
.up-enter, .up-leave-to {
  opacity: 1;
  transform: translateY(100%);
}
.messges{
  width: 100%;
  min-height: 100vh;
  background: #161823;
  color: #fff;
}
.messges .top{
  height: 45px;
  width: 100%;
  display: flex;
  line-height: 45px;
  border-top: 1px solid #ababab;
  border-bottom: 1px solid #cccbcb13;
  position: fixed;
  background: #161823;
  margin-top: -45px;
}
.messges .top .title{
  flex: 1;
  text-align: center;
  padding-left: 58px;
  font-size: 15px;
}
.messges .top .create{
  font-size: 12px;
  padding-right: 10px;
}
.messges .nav{
  margin-top: 45px;
  padding: 20px 0;
  height: 90px;
  display: flex;
  text-align: center;
  font-size: 12px;
  align-items: center;
  border-bottom: 1px solid #cccbcb13;
}
.messges .nav span{
  display: block;
  margin-top: 3px;
}
.messges .nav .fs,
.messges .nav .zan,
.messges .nav .aite,
.messges .nav .pl{
  flex: 1;
}
.messges .ad{
  height: 100px;
  border-bottom: 1px solid #cccbcb13;
  padding: 20px 20px;

}
.messges .ad .title{
  display: flex;
  height: 14px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #676870;
}
.messges .ad .title span{
  display: block;
  padding: 0 5px;
  height: 12px;
  line-height: 12px;
  border-right: 1px solid #cccbcb13;
}
.messges .ad .title .pyq{
  padding: 0 5px;
  line-height: 12px;
}
.messges .ad .title img{
  height: 14px;
  width: 14px;
}
.messges .ad .content{
  height: 40px;
  display: flex;
  font-size: 13px;
  line-height: 40px;
}
.messges .ad .content .tx img{
  width: 45px;
  margin-right: 10px;
}
.messges .ad .content .desc{
  flex: 1;
}
.messges .ad .content button{
  width: 70px;
  height: 25px;
  background: #FE2C55;
  margin-top: 10px;
  line-height: 25px;
}
.qls{
  min-height: 100px;
  border-bottom: 1px solid #cccbcb13;
  padding: 10px 15px;
}
.qls .ql{
  display: flex;
  padding-bottom: 10px;
  position: relative;
}
.qls .ql::after{
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FACE15;
  position: absolute;
  right: 0;
  top: 25px;
}
.messges .qls .ql .content{
  margin-left: 10px;
}
.messges .qls .ql .content .title{
  font-size: 13px;
  margin-top: 5px;
  color: #B2B2B6;
}
.messges .qls .ql .content .desc{
  margin-top: 5px;
  font-size: 10px;
  color: #66676E;
}
.messges .qls .ql img{
  width: 50px;
}
.messges .tjgz{
  min-height: 100px;
  padding: 10px;
  padding-bottom: 40px;
}
.messges .tjgz .title{
  font-size: 12px;
  color: #676870;
}
.messges .tjgz .ql{
  margin: 15px 0;
  margin-bottom: 40px;
  height: 50px;
  display: flex;
}
.messges .tjgz .ql img{
  width: 50px;
  margin-left: 5px;
}
.messges .tjgz .ql .content{
  width: 100%;
  display: flex;
}
.messges .tjgz .ql .content .desc{
  flex: 1;
  width: 100px;
}
.messges .tjgz .ql .content .desc .title{
  font-size: 14px;
  color: #C5C5C8;
}
.messges .tjgz .ql .content .desc .age_add{
  height: 18px;
  width: 40px;
  display: flex;
  font-size: 12px;
  color: #77787F;
  margin: 5px 0;
}
.messges .tjgz .ql .content .desc .age_add .age,
.messges .tjgz .ql .content .desc .age_add .add{
  min-width: 30px;
  height: 18px;
  line-height: 18px;
  background: #242630;
  text-align: center;
}
.messges .tjgz .ql .content .desc .age_add .age{
  margin-right: 5px;
}
.messges .tjgz .ql .content .desc span{
  font-size: 12px;
  color: #77787F;
}
.messges .tjgz .ql .content .btn{
  display: flex;
  line-height: 50px;
}
.messges .tjgz .ql .content .btn button{
  width: 60px;
  height: 25px;
  background: #FE2C55;
  font-size: 12px;
  line-height: 25px;
  margin-right: 5px;
  margin-top: 12.5px;
}
.messges .tjgz .ql .content .btn .close{
  width: 25px;
  height: 25px;
  color: #77787F;
  font-size: 12px;
  text-align: center;
  line-height: 50px;
}
</style>