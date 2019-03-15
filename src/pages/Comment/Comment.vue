<template>
  <div class="listWrap">
    <ul>
      <li v-for="(item,index) in content.topicList" :key="index">
        <img v-lazy="item.bannerInfo.picUrl" alt="">
        <p class="comment">{{item.content}}</p>
        <div class="footer">
          <div class="name">
            <img v-lazy="item.avatar" alt="">
            <span>{{item.nickName}}</span>
          </div>
          <div class="star">
            <i class="iconfont icon-dianzan"></i>
            <span>{{item.bannerInfo.size}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    mounted () {
      this.$store.dispatch('getShaidanContent')
    },

    computed : {
      ...mapState({
        content: state => state.dis.shaidanContent
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .listWrap
    width 100%
    padding-bottom 100px
    ul
      column-count 2
      box-sizing border-box
      padding 0 20px
      li
        width 340px
        img
          width 100%
        p
          font-size 26px
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
    .footer
          width 100%
          height 50px
          line-height 50px
          padding 0 20px
          box-sizing border-box
          .name
            float left
            text-align center
            img
              width 48px
              height 48px
              border-radius 50%
              vertical-align middle
            span
              font-size 24px
              vertical-align middle
          .star
            float right
            text-align center
            span
              font-size 24px



</style>
