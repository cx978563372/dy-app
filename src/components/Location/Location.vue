<template>
  <div class="location">
      <div class="top">地区</div>
      <div class="content">
        <div class="chose-location">
          <div class="floating">自动定位：中国</div>
          <div class="chose">切换&nbsp;></div>
        </div>
        <div class="video-lists">
          <location-video v-for="item in dataLists" 
                          :key="item.id" 
                          :videos="item">
          </location-video>
        </div>
      </div>
  </div>
</template>

<script>
import LocationVideo from './LocationVideo'
export default {
  name: 'location',
  data () {
    return{
      dataLists: [
        {
          id: 1,
          url: require('@/assets/videos/v1.mp4'),
          add: '浙江',
          desc: '男同胞们，来看兵姐姐啦',
          dis: '8.8km',
          tx: require('@/assets/images/x1.png')
        },
        {
          id: 2,
          url: require('@/assets/videos/v2.mp4'),
          add: '北京',
          desc: '快乐大本营搞笑片段。',
          dis: '>10km',
          tx: require('@/assets/images/x2.png')
        },
        {
          id: 3,
          url: require('@/assets/videos/v3.mp4'),
          add: '杭州',
          desc: '烧烤烤串制作教程，不看亏死！',
          dis: '>10km',
          tx: require('@/assets/images/x3.png')
        }
        
      ]
    }
  },
  components: {
    LocationVideo
  },
  methods: {
    get(){
      this.$axios.get('../../../static/json/dataLists.json').then( response => {
        var array = response.data.dataLists
        console.log(array)
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
   color: #ababab;
   background: #161823;
   padding-bottom: 30px;
   overflow-x: hidden;
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

</style>