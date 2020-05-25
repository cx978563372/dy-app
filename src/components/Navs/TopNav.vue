<template>
  <div class="top-nav">
      <div class="items">
          <div class="item-left" @click="alertLive">
              <span class="iconfont">&#xe653;</span>
          </div>
          <div class="item-center">
            <div class="left item">
                <span @click="ChangeActive(1)" :class="isActive == 1 ? 'active' : ''">关注<em :class="line"></em></span>
            </div>
            <div class="right item">
                <span @click="ChangeActive(2)" :class="isActive == 2 ? 'active' : ''">推荐<em :class="line"></em></span>
            </div>
          </div>
          <div class="item-right" @click.stop="ChangeSearch">
              <span class="iconfont">&#xe600;</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TopNav',
    data () {
        return {
            isActive: 1,
            line: 'line1'
        }
    },
    methods: {
        ChangeActive (index) {
            this.isActive = index;
            this.line = 'line' + index;
        },
        alertLive () {
            alert('臣妾不会做啊！')
        },
        ChangeSearch (e) {
            e.preventDefault()
            this.$store.state.searchShow = true
        }
    }
}
</script>

<style scoped>
.active{
    display: block;
    color: #fff;
    padding-bottom: 3px;
    position: relative;
}
.active .line1{
    display: block;
    width: 20px;
    border: 1px solid #fff;
    position: absolute;
    right: 5px;
    bottom: 10px;
}
.active .line2{
    display: block;
    width: 20px;
    border: 1px solid #fff;
    position: absolute;
    left: 5px;
    bottom: 10px;
}
.top-nav{
    width: 100%;
    height: 45px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
}
.top-nav .items{
    display: flex;
    justify-items: center;
    color: #ABABAB;   
    line-height: 45px;
}
.top-nav .items .item-left .iconfont{
    font-size: 20px;
}
.top-nav .items .item-center{
    flex: 1;
    display: flex;
    justify-items: center;
}
.top-nav .items .item-center .item{
    flex: 1;
    font-size: 15px;
    font-weight: 600px;
}

.top-nav .items .item-center .left{
    text-align: right;
    margin-right: 20px;
}
.top-nav .items .item-center .right{
    margin-left: 20px;
}
.top-nav .items .item-right{
    font-size: 20px;
}
</style>