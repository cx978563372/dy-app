<template>
  <div class="index">
        <router-view/>
        <!-- 底部 -->
        <bot-nav></bot-nav>
        <!-- 搜索页面 -->
      <transition name="search">
      <search v-if="searchShow"></search>
      </transition>
  </div>
</template>

<script>
import BotNav from '@/components/Navs/BotNav'
import Search from '@/components/Navs/Search'
export default {
  name: 'Index',
  data () {
    return {
      searchShow: false
    }
  },
  components: {
    BotNav,
    Search
  },
  watch: {
    "$store.state.searchShow": function(){
      this.searchShow = this.$store.state.searchShow;
    }
  }
}
</script>

<style>
  .search-enter-active, .search-leave-active {
    transition: all .2s
  }
  .search-enter, .search-leave-to {
    opacity: 1;
    transform: translateY(100%);
  }
</style>