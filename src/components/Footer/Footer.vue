<template>
    <footer id="footerContainer">
      <ul class="navList">
        <li class="item" @click="$router.replace('/home')">
          <i class="icon" :class="$route.path === '/home'? 'icon-tabBar-index-active':'icon-tabBar-index'"></i>
          <span class="text">首页</span>
        </li>

        <li class="item" @click="$router.replace('/class/classDetail1022001')">
          <i class="icon" :class="$route.path === '/class/classDetail1022001'? 'icon-tabBar-class-active':'icon-tabBar-class'"></i>
          <span class="text">分类</span>
        </li>

        <li class="item" @click="$router.replace('/dis')">
          <i class="icon" :class="$route.path === '/dis'? 'icon-tabBar-dis-active':'icon-tabBar-dis'"></i>
          <span class="text">识物</span>
        </li>

        <li class="item" @click="$router.replace('/cart')">
          <i class="icon" :class="$route.path === '/cart'? 'icon-tabBar-cart-active':'icon-tabBar-cart'"></i>
          <span class="text">购物车</span>
        </li>

        <li class="item" @click="$router.replace('/login')">
          <i class="icon icon-tabBar-profile"></i>
          <span class="text">个人</span>
        </li>

      </ul>
    </footer>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../comon/stylus/mixins.styl"
  #footerContainer
    position fixed
    left 0
    bottom 0
    width 100%
    height 1.30667rem
    background #fafafa
    border-top 0.01rem solid #d9d9d9
    .navList
      display flex
      justify-content space-around
      width 100%
      height 100%
      .item
        display flex
        flex-direction column
        align-items center
        .icon
          margin-top .2rem
          display inline-block
          width 0.53333rem
          height 0.53333rem
          background-image url(""http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png"")
          background-repeat no-repeat
          background-size 0.53333rem 6.53333rem

        .icon-tabBar-index
          background-position: 0 -3.33333rem
        .icon-tabBar-index-active
          background-position: 0 -2.66667rem

        .icon-tabBar-class
          background-position: 0 -2rem
        .icon-tabBar-class-active
          background-position: 0 -1.33333rem

        .icon-tabBar-dis
          background-position: 0 -4.66667rem
        .icon-tabBar-dis-active
          background-position: 0 -4rem

        .icon-tabBar-cart
          background-position: 0 -.66667rem
        .icon-tabBar-cart-active
          background-position: 0 0

        .icon-tabBar-profile
          background-position: 0 -6rem

        .text
          margin-top .1rem
          font-size 0.32rem
</style>
