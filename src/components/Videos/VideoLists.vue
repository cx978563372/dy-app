<template>
    <div class="video-lists">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item, index) in dataLists" :key="index">
                <videos ref="videos" :videoList="item" :index="index" class="videos"></videos>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Videos from './Video';
export default {
    name: 'VideoLists',
    data () {
        return{
            page: 0,
            swiperOptions: {
                direction: 'vertical',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                slidesPerView: 1,
                height: window.innerHeight,
                resistanceRatio: 0,
                observeParents: true,
                on: {
                    tap:()=>{
                        this.playAction(this.page)
                    },
                    slideNextTransitionStart: ()=>{
                        this.page += 1
                        console.log(this.page)
                        this.$store.state.page = this.page
                        this.nextVideo(this.page)
                    },
                    slidePrevTransitionEnd: ()=>{
                        this.page -= 1
                        console.log(this.page)
                        this.$store.state.page = this.page
                        this.prevVideo(this.page)
                    }
                }
            },
            dataLists: [
                {
                    id: '1',
                    url: require('../../assets/videos/v1.mp4'),
                    sub: '66.5w',
                    msg: '2.5w',
                    name: '人民网',
                    desc: '男同胞们，来看兵姐姐啦!',
                    mic: '人民网的原创音乐-'
                },
                {
                    id: '2',
                    url: require('../../assets/videos/v2.mp4'),
                    sub: '7.2w',
                    msg: '1.1w',
                    name: '糖糖的520',
                    desc: '快乐大本营搞笑片段。',
                    mic: '糖糖的520的原创音乐-'
                },
                {
                    id: '3',
                    url: require('../../assets/videos/v3.mp4'),
                    sub: '23.5w',
                    msg: '6.5w',
                    name: '生活小妙招',
                    desc: '烧烤烤串制作教程，不看亏死！',
                    mic: '生活小妙招的原创音乐-'
                },
                {
                    id: '4',
                    url: require('../../assets/videos/v4.mp4'),
                    sub: '30.5w',
                    msg: '1.2k',
                    name: '日常',
                    desc: '这次大家来快来看看蛋里的幼崽啦！',
                    mic: '日常的原创音乐-'
                },
                {
                    id: '5',
                    url: require('../../assets/videos/v5.mp4'),
                    sub: '1.5w',
                    msg: '0.5k',
                    name: '老外有个中国媳妇',
                    desc: '有个中国媳妇的日常！',
                    mic: '老外有个中国媳妇的原创音乐-'
                },
                {
                    id: '6',
                    url: require('../../assets/videos/v6.mp4'),
                    sub: '99.5w',
                    msg: '50.5w',
                    name: '人民教师',
                    desc: '学生不在的时候老师都在教室干什么呢？',
                    mic: '人民教师的原创音乐-'
                }
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Videos
    },
    methods: {
        send () {
            this.$emit('get', this.dataLists)
        },
        playAction (index) {
            this.$refs.videos[index].playOrStop()
        },
        //上滑
        prevVideo(index){
            this.$refs.videos[index+1].stop()
            this.$refs.videos[index].play()
        },
        //下滑
        nextVideo(index){
            this.$refs.videos[index-1].stop()
            this.$refs.videos[index].play()
        }
    },
    computed: {
 
    },
    watch:{

    },
    mounted () {
        this.send()
    }
}
</script>

<style scoped>
.videos{
    border-radius: 20px;
}
</style>