<template>
    <div id="templateContainer">
      <div class="scrollWrap">
        <img class="banner" v-lazy="category.wapBannerUrl" alt="">
        <ul>
          <li v-for="(c,index) in category.subCateList" :key="index">
            <img v-lazy="c.wapBannerUrl" alt="">
            <p>{{c.name}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {

    props:{
      category:Object
    },

    watch : {
      category () {
        this.$nextTick( () => {
          new BScroll('#templateContainer',{
            scrollY:true,
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #templateContainer
    width 558px
    height 1150px
    position absolute
    right 0
    top 0
    .scrollWrap
      width 100%
      .banner
        width 528px
        height 192px
      ul
        display flex
        flex-wrap wrap
      li
        width 144px
        height 216px
        margin 0.2rem 0.55rem 0 0
        img
          width 144px
          height 144px
          background #fff
          p
            height: 0.96rem;
            font-size: 0.32rem;
            text-align: center;
            line-height: 0.48rem;
</style>
