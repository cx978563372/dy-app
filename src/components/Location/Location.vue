<template>
  <div class="location">
      <div class="top">地区</div>
      <div class="content">
        <div class="chose-location">
          <div class="floating">自动定位：中国</div>
          <div class="chose">切换&nbsp;></div>
        </div>
        <div class="video-lists" >
          <div v-for="i in 3" :key="i" class="video-player1">
            <video-player  class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    > 
            </video-player>
            <div class="desc">
                <div class="address">China</div>
                <div class="jj">男同胞们，来看兵姐姐啦!</div>
            </div>   
          </div>   
        </div>
      </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'location',
  data () {
    return{
      playerOptions: {
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: true, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    src: require('@/assets/videos/v1.mp4'),//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                    type: "video/mp4" //url地址
                }],
                notSupportedMessage: '此视频暂无法播放，请稍后再试',
                controlBar: false
      },
      dataLists: [],
      url: []
    }
  },
  components: {
    videoPlayer
  },
  methods: {
    get(){
      this.$axios.get('../../../static/json/dataLists.json').then((response) => {
        console.log(response.data.dataLists)
        this.dataLists = response.data.dataLists
        console.log(this.dataLists[0].url)
      })
    }
  },
  created () {
    this.get()
  }
}
</script>

<style>
.location{
   min-height: 100vh;
   color: #ababab;
   background: #161823;
   padding-bottom: 30px;
}
.location .top{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  position:fixed;
  z-index: 888;
  background: #161823;
  margin-top: -30px;
}
.location .content{
  margin-top: 30px;
}
.location .content .chose-location{
  height: 22px;
  font-size: 12px;
  display: flex;
  padding: 0 10px;
  padding-bottom: 2px;
}
.location .content .chose-location .floating{
  flex: 1;
}
.location .content .video-lists{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.location .content .video-lists .video-player1{
  width: 49.5%;
  padding-bottom: 20px;
  font-size: 13px;
}
.location .content .video-lists .video-player1 .address{
  margin-bottom: 10px;
}
.location .content .video-lists .vjs-custom-skin> .video-js .vjs-big-play-button{
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  font-size: 60px;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  top: 50%;
  left: 80%;
  color: rgb(255, 255, 255, 0.5);
}
</style>