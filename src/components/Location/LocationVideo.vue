<template>
    <div class="video-player1">
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
            >
        </video-player>
        <div class="desc">
            <div class="jl">
                <div class="dis">
                    <i class="iconfont">&#xe65c;</i>{{videos.dis}}
                </div>
                <div class="tx"><img :src="videos.tx" alt=""></div>
            </div>
            <div class="address"><i class="iconfont">&#xe65c;</i>{{videos.add}}</div>
            <div class="jj">#{{videos.desc}}#</div>
        </div>   
    </div>     
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
    name: 'LocationVideo',
    props:[
        'videos'
    ],
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
                    src: this.videos.url,//require('@/assets/videos/v1.mp4') 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目 
                    type: "video/mp4" //url地址
                }],
                notSupportedMessage: '此视频暂无法播放，请稍后再试',
                controlBar: false
            },       
        }
    },
    components: {
        videoPlayer
    },
}
</script>

<style>
.video-player1{
  width: 49.5%;
  padding-bottom: 20px;
  font-size: 13px;
}
.video-player1 .desc{
    margin-top: 10px;
    color: #fff;
    position: relative;
}
.video-player1 .desc .jl{
    width: 100%;
    display: flex;
    position: absolute;
    top: -35px;
    left: 10px;
}
.video-player1 .desc .jl .dis{
    flex: 1;
    font-size: 12px;
    line-height: 22px;
}
.video-player1 .desc .jl .dis i{
    font-size: 12px;
}
.video-player1 .desc .jl img{
    width: 20px;
    margin-right: 20px;
}
.video-player1 .address{
  margin-bottom: 5px;
  font-size: 12px;
}
.video-player1 .address i{
    color: red;
    font-size: 12px;
    margin: 0 5px;
}
.video-player1 .desc .jj{
    font-size: 12px;
    margin: 0 5px;
}
.video-player1 .vjs-custom-skin> .video-js .vjs-big-play-button{
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