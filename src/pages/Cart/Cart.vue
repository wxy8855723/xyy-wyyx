<template>
    <div id="cartContainer">
        <div class="header">
          <span>购物车</span>
        </div>

        <div class="getCoupon">领券</div>

        <div class="serve">
        <ul>
          <li>
            <span>30天无忧退货</span>
          </li>
          <li>
            <span>48小时快速退款</span>
          </li>
          <li>
            <span>满88元免邮费</span>
          </li>
        </ul>

      </div>

        <div class="cartBigImg">
          <img src="" alt="">
        </div>

        <div class="login">
          <p>去添加点什么吧</p>
          <button @click="$router.push('/login')">登录</button>
        </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #cartContainer
    width 100%
    background #F4F4F4
    position fixed
    top 0
    bottom 0
    .header
      width 100%
      height 88px
      text-align center
      background #fff
      line-height 88px
      span
        font-size 36px
    .getCoupon
      position absolute
      right 50px
      top 15px
      width 60px
      height 60px
      text-align center
      line-height 60px
      color: #b4282d;
      font-size: 0.4rem
    .serve
        margin-top 10px
        width 100%
        height 64px
        padding 0.21333rem 0
        box-sizing border-box
        ul
          display flex
          justify-content space-around
          color #666
          font-size: 0.32rem;


    .cartBigImg
        margin 5rem auto 0
        width 248px
        height 248px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
        background-repeat no-repeat
    .login
      width 100%
      text-align center
      line-height 169px
      p
        margin-bottom: 0.66667rem;
        line-height: 1;
        font-size: 0.37333rem;
        color: #999;
      button
        width 480px
        height 92px
        color #fff
        background #b4282d
        font-size 0.37333rem


</style>
