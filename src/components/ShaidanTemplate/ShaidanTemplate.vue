<template>
  <div id="commentContainer">
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
  </div>
</template>

<script>
  import Split from '../../components/Split/Split'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    mounted () {
      this.$store.dispatch('getShaidanHeader')
    },

    computed : {
      ...mapState({
        header : state => state.dis.shaidanheader
      })
    },

    watch : {
      header () {
       this.$nextTick( () => {
         new BScroll('.listWarp',{
           click:true,
           scrollX:true,
           snapSpeed:1000
         })
       })
      }
    },

    components : {
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #commentContainer
    width 100%
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

</style>
