<template>
  <div class="videos">
        <video-player  class="video-player vjs-custom-skin"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true">
        </video-player>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
    name: 'Video',
    props: ['videoList','index'],
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
                    src: this.videoList.url,//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                    type: "video/mp4" //url地址
                }],
                notSupportedMessage: '此视频暂无法播放，请稍后再试',
                controlBar: false
            },
            playing: true,
            page: 0
        }
    },
    components: {
        videoPlayer
    },
    methods: {
        //视频播放和暂停
        playOrStop () {
            if (this.playing) {
                this.$refs.videoPlayer.player.pause();
                this.playing = false;
            } else {
                this.$refs.videoPlayer.player.play();
                this.playing = true;
            }
        },
        //自动播放
        autoPlayAction () {
            if (this.index == 0) {
                this.playerOptions.autoplay = true
            }   
        },
        play () {
            this.$refs.videoPlayer.player.play();
            this.playing = true
        },
        stop () {
            this.$refs.videoPlayer.player.pause();
            this.playing = false
        }
    },
    mounted () {
        this.autoPlayAction()
    }
}
</script>

<style>
    .videos{
        border-radius: 10px;
        z-index: 999;
        position: relative;
    }
    .videos .vjs-custom-skin> .video-js .vjs-big-play-button{
        background: rgba(0, 0, 0, 0);
        border-radius: 50%;
        font-size: 60px;
        width: 50px;
        height: 50px;
        border: none;
        position: absolute;
        top: 50%;
        left: 65%;
        color: rgba(0, 0, 0, 0.4);
    }
</style>