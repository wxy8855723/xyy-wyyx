<template>
  <div class="commentContainer">
    <div>
      <div class="header">
        <div class="title1">
          <span>让生活更好的N种方式</span>
        </div>
        <div class="title2">
          <span>{{header.title}}</span>
        </div>
        <div class="listWarp">
          <ul>
            <li v-for="(item,index) in header.lookList" :key="index">
              <img v-lazy="item.banner.picUrl" alt="">
            </li>
          </ul>
        </div>
      </div>

      <Split/>

      <div class="content">
        <h2>他们的严选生活</h2>
        <div class="btn">
          <div :class="{active:Index === 1}" @click="handleClass(1),$router.replace('/dis/tab3/comment1')">最近</div>
          <div :class="{active:Index === 2}"@click="handleClass(2),$router.replace('/dis/tab3/comment2')">最热</div>
          <div :class="{active:Index === 3}"@click="handleClass(3),$router.replace('/dis/tab3/comment3')">一个月</div>
        </div>
        <router-view :content="content"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Split from '../../components/Split/Split'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    data () {
      return {
       Index:1
      }
    },

    mounted () {
      this.$store.dispatch('getShaidanHeader')
      this.$store.dispatch('getShaidanContent')
      this.$nextTick(() => {
        this._initScroll()
      })
    },

    methods : {
      handleClass (index) {
        this.Index = index
      },

      _initScroll () {
        this.scrollX = new BScroll('.listWarp',{
          scrollX:true,
          click:true
        })
        this.scrollY = new BScroll('.commentContainer',{
          scrollY:true,
          click:true
        })
      }
    },

    computed : {
      ...mapState({
        header : state => state.dis.shaidanHeader,
        content : state => state.dis.shaidanContent
      })
    },

    components : {
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .commentContainer
    width 100%
    position fixed
    top 170px
    bottom 0
    .header
      width 100%
      padding-bottom 40px
      .title1
        font-size 0.37rem
        color #7f7f7f
        text-align center
        margin-top 35px
      .title2
        font-size 0.426rem
        color #333
        text-align center
        margin 40px 0
      .listWarp
        width 100%
        overflow hidden
        ul
          height 248px
          float left
          display flex
          flex-wrap nowrap
          li
            float left
            width 240px
            height 240px
            img
              width 100%
              height 100%
              border-radius 20px

    .content
      width 100%
      text-align center
      h2
        font-size 36px
        margin-top 50px
      .btn
        display flex
        align-items center
        justify-content space-around
        margin 0.66667rem 0
        div
          width 171px
          height 60px
          background #F4F4F4
          text-align center
          line-height 60px
          font-size 0.37333rem
          &.active
            color #b0955f
            background #ffe4af
</style>
