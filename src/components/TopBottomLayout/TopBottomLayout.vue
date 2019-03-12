<template>
    <div id="topbottomlayoutContainer">
      <header>
        <img v-lazy="i.avatar" alt="">
        <span>{{i.nickname}}</span>
      </header>
      <p class="title">
        {{i.title}}
      </p>
      <img  class="bigImg" v-lazy="i.picUrl" alt="">
      <div class="haveMet">
        <i class="iconfont icon-kanguo"></i>
        <p>{{i.readCount}}人看过</p>
      </div>
    </div>
</template>

<script>
  export default {
    props : {
      i:Object
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #topbottomlayoutContainer
    width 100%
    height 668px
    padding 30px
    box-sizing border-box
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
      font-size: 0.48rem;
      color: #333;
      line-height: 0.62rem;
      margin: -0.08rem 0 0.16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top 20px
    img
      width 100%
      height 394px
    .haveMet
      margin-top 10px
      display flex
      align-items center
      font-size: 0.36rem
      color #999
      i
        font-size 30px
      p
        margin-left 10px


</style>
