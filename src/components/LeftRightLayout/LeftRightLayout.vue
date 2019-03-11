<template>
    <div id="LeftRightLayoutContainer">
      <div class="left">
        <header>
          <img src="https://yanxuan.nosdn.127.net/cd62a3ee15e849f6543829e98f12708d.png" alt="">
          <span>文成</span>
        </header>
        <p class="title">
          开发半年的神仙杯子，半天抢光。问我感想，我说太假了
        </p>
        <p class="decs">
          星愿双层玻璃杯，高调回归！
        </p>
        <div class="haveMet">
          <i class="iconfont icon-kanguo"></i>
          <p>200人看过</p>
        </div>
      </div>
      <div class="right">
        <img src="https://yanxuan.nosdn.127.net/e5e9a59b218ac8eb238e125bc30e9f3d.jpg" alt="">
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 #LeftRightLayoutContainer
    width 100%
    height 361px
    padding 30px
    box-sizing border-box
    display flex
    align-items center
   .left
     width 425px
     height 280px
     header
      width 100%
      img
       width 40px
       height 40px
       border-radius 50%
       vertical-align middle
       span
         font-size 28px
         vertical-align middle
     .title
      font-size: 0.48rem
      color #333
     .decs
      font-size 0.38rem
      color #7f7f7f
     .haveMet
       margin-top 30px
       display flex
       align-items center
       font-size: 0.36rem
       color #999
       i
        font-size 30px
       p
        margin-left 10px
   .right
     overflow hidden
     width 280px
     height 280px
     img
      height 100%
</style>
