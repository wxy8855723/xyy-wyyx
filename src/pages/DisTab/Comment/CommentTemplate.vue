<template>
  <div class="listWrap">
    <ul>
      <li v-for="(item,index) in content.topicList" :key="index">
        <img v-lazy="item.bannerInfo.picUrl" alt="">
        <p class="comment">{{item.content}}</p>
        <div class="footer">
          <div class="name">
            <img :src="item.avatar" alt="">
            <span>{{item.nickName}}</span>
          </div>
          <div class="star">
            <i class="iconfont icon-dianzan"></i>
            <span>{{item.size}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props : {
      content:Object
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .listWrap
      width 100%
      ul
        width 100%
        column-count 2
        li
          width 360px
          img
            width 100%
          .comment
            box-sizing border-box
            padding 0 20px
            margin-top 20px
            font-size 0.32rem
            color #333
            line-height 0.48rem
            display -webkit-box
            -webkit-box-orient: vertical
            overflow  hidden
            text-overflow ellipsis
            -webkit-line-clamp 2
          .footer
            width 100%
            height 87px
            display flex
            align-items center
            justify-content space-between
            padding 0 25px
            box-sizing border-box
            span
              font-size 28px
              vertical-align middle
            .name
              img
                width 48px
                height 48px
                border-radius 50%
                vertical-align middle
</style>
