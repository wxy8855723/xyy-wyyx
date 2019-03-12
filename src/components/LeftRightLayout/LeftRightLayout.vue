<template>
    <div id="LeftRightLayoutContainer">
      <div class="left">
        <header>
          <img v-lazy="i.avatar" alt="">
          <span>{{i.nickname}}</span>
        </header>
        <p class="title">
          {{i.title}}
        </p>
        <p class="decs">
          {{i.subTitle}}
        </p>
        <div class="haveMet">
          <i class="iconfont icon-kanguo"></i>
          <p>{{i.readCount}}人看过</p>
        </div>
      </div>
      <div class="right">
        <img v-lazy="i.picUrl" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    props : {
      i:Object
    }
  }
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
