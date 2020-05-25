<template>
  <div class="home">
      <!-- 头部 -->
      <top-nav></top-nav>
      <!-- 详情 -->
      <sider :inputList="List"></sider>
      <!-- 右侧列表 -->
      <siderr :inputList="List"></siderr>
      <!-- 视频列表 -->
      <video-lists @get="gets"></video-lists>
      <!-- msgList -->
      <transition name="up">
      <router-view v-if="isShow"></router-view>
      </transition>
  </div>
</template>

<script>
import TopNav from '@/components/Navs/TopNav'
import VideoLists from '@/components/Videos/VideoLists'
import Sider from '@/components/Navs/Sider'
import Siderr from '@/components/Navs/Sider-r'
export default {
  name: 'Home',
  data () {
    return {
      List: null,
      isShow: false
    }
  },
  components: {
    TopNav,
    VideoLists,
    Sider,
    Siderr
  },
  methods: {
    gets (dataLists,page) {
      this.List = dataLists
    }
  },
  watch: {
    "$store.state.isShow": function(){
      this.isShow = this.$store.state.isShow;
    }
  },
}
</script>

<style scoped>
  .home{
    width: 100vw;
    height: 100vh;
    background: black;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .up-enter-active, .up-leave-active {
    transition: all .2s
  }
  .up-enter, .up-leave-to {
    opacity: 1;
    transform: translateY(100%);
  }
</style>
