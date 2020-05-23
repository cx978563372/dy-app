<template>
    <div class="sider-r">
        <div class="portrait">
            <div class="tx">
                <img :src="data[page].x" alt="x">
            </div>
            <i class="iconfont jia">&#xe7a5;<i class="jiabg"></i></i>
        </div>
        <div class="center">
            <div class="heart"><i :class="isRed ? 'iconfont'+' isred': 'iconfont' " @click.stop="changeRed">&#xe62f;</i><span>{{inputList[page].sub}}</span></div>
            <div class="msg" @click.stop="show"><i class="iconfont">&#xe618;</i><span>{{inputList[page].msg}}</span></div>
            <div class="share"><i class="iconfont">&#xe65a;</i></div>
        </div>
        <div class="mic">
            <div>
                <img src="@/assets/images/mx.png" alt="bg" class="bg">
                <img :src="data[page].x" alt="x" class="x">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'Sider-r',
    props: [
        'inputList'
    ],
    data () {
        return{
            Lists: null,
            isShow: false,
            page: 0,
            isRed: false,
            data: [
                {
                    x: require('@/assets/images/x1.png')
                },
                {
                    x: require('@/assets/images/x2.png')
                },
                {
                    x: require('@/assets/images/x3.png')
                },
                {
                    x: require('@/assets/images/x4.png')
                },
                {
                    x: require('@/assets/images/x5.png')
                },
                {
                    x: require('@/assets/images/x6.png')
                }
            ]
        }
    },
    methods: {
        show (e) {
            e.preventDefault()
            this.$store.state.isShow = true
            console.log(this.isShow)
        },
        changeRed () {
            if (this.isRed == false){
                this.isRed = true
            }else{
                this.isRed = false
            }

        }
    },
    computed:{
    },
    watch: {
        "$store.state.page": function(){
            this.page = this.$store.state.page;
        },
        "$store.state.isShow": function(){
            this.isShow = this.$store.state.isShow;
        }
    },
    mounted () {
    }
}
</script>

<style scoped>
.sider-r{
    width: 20%;
    height: 350px;
    color:#fff;
    position: fixed;
    z-index: 999;
    bottom: 65px;
    right: 0;
    font-size: 12px;
    padding-left: 10px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    text-align: center;  
}
.sider-r .portrait{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 40px;
}
.sider-r .portrait .tx{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1.5px solid #fff;
    overflow: hidden;
    position: relative;
}
.sider-r .portrait .tx img{
    display: block;
    width: 56px;
    position: absolute;
    top: -6px;
    left: -6px;
}
.sider-r .portrait .jia{
    display: block;
    width: 45px;
    border-radius: 50%;
    color: red;
    opacity: 1.0;
    position: absolute;
    top: 35px;
    margin: 0 auto;
    font-size: 16px;
    z-index: 999;
}
.sider-r .portrait .jiabg{
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 17px;
    bottom: 5px;
    z-index: -1;
}
.sider-r .center{
    display: flex;
    flex-direction: column;
}
.iconfont{
    display: block;
    font-size: 30px;
    opacity: 0.85;
}
.sider-r .center .heart{
    margin-bottom: 30px;
}
.sider-r .center .heart .isred{
    color: red;
}
.sider-r .center .msg{
    margin-bottom: 30px;
}
.sider-r .center .share{
    margin-bottom: 30px;
}
.sider-r .mic{
    width: 45px;
    height: 45px;
    /* border-radius: 50%; */
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    animation: roll 6s 0s linear infinite;
}
@keyframes roll {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.sider-r .mic .bg{
    position: absolute;
    width: 42px;
    top: 0;
    left: 0.5px;
    z-index: 111;
}
.sider-r .mic .x{
    position: absolute;
    width: 42px;
    top: 0;
    left: 0;
}

</style>