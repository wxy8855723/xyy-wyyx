<template>
    <div id="PhotoWallContainer">
      <div class="title">
        {{i.title}}
      </div>
      <div class="decs">
        {{i.subTitle}}
      </div>
      <ul class="photo">
        <li v-for="(item,index) in i.itemList" :key="index">
          <img v-lazy="item.itemUrl" alt="">
        </li>
      </ul>
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #PhotoWallContainer
    width 100%
    height 570px
    padding 30px
    box-sizing border-box
    .title
      font-size: 0.48rem;
      color: #333;
      line-height: 0.62rem;
      margin: -0.08rem 0 0.16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top 5px
    .decs
      margin-top 10px
      font-size 0.38rem
      color #7f7f7f
    ul
      display flex
      flex-wrap wrap
      margin-top 20px
      justify-content space-between
      li
        width 167px
        height 167px
        background #f4f4f4
        &:nth-child(5), &:nth-child(6)
          margin-top 20px
      img
        width 100%
        height 100%
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



</style>
