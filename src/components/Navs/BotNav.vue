<template>
    <div class="BotNav">
        <div class="items">
            <div class="item">
                <router-link to="/home">
                    <span @click="ChangeIsActive(0)" :class="isActive == 0 ? 'active': '' ">首页</span>                
                </router-link>
            </div>
            <div class="item">
                <router-link to="/location">
                    <span @click="ChangeIsActive(1)" :class="isActive == 1 ? 'active': '' ">地区</span>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/photo">
                    <span @click="ChangeIsActive(4)" :class="isActive == 4 ? 'active': '' ">
                        <img src="@/assets/images/plus_btn.png" alt="plus_btn">
                    </span>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/messages">
                    <span @click="ChangeIsActive(2)" :class="isActive == 2 ? 'active': '' ">消息</span>
                </router-link>
            </div>
            <div class="item">
                <router-link to="/me">
                    <span @click="ChangeIsActive(3)" :class="isActive == 3 ? 'active': '' ">我</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BotNav',
    data () {
        return {
            isActive: 0
        }
    },
    methods: {
        ChangeIsActive (index) {
            this.isActive = index
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #ABABAB;
}
.items .item .active{
    color: #fff;
}
.BotNav{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 888;
    background: #000;
}
.items{
    display: flex;
    justify-content: center;
    font-size: 14px;
}
.items .item{
    flex: 1;
    text-align: center;
    color: #ABABAB;
    font-weight: 600;
}
.items .item span{
    display: block;
    height: 50px;
    line-height: 50px;
}
.items .item img{
    width: auto;
    max-width: 50%;
    padding-top: 12px;
}
</style>