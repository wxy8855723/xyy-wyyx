<template>
  <div id="templateContainer">
    <div class="scrollWrap">
      <div class="banner">
        <img  v-lazy="category.wapBannerUrl" :key="category.wapBannerUrl" alt="">
      </div>
      <ul>
        <li v-for="(c,index) in category.subCateList" :key="index">
            <img v-lazy="c.wapBannerUrl" :key="c.wapBannerUrl" alt="">
            <p>{{c.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {

    data () {
      return {
        category:{}
      }
    },

    computed : {
      ...mapState({
        AllClass: state => state.category.allClass
      }),

    },

    watch : {
      AllClass () {
       this.category = this.AllClass.categoryL1List[0]
      },

      $route () {
        const path = this.$route.params.id
        const category = this.AllClass.categoryL1List.filter(item => item.id === path*1)
        this.category = category[0]
      },

      category () {
        this.$nextTick( () => {
          /*
          单例对象，一个组件只有这样的一个对象
           */
          if (!this.scroll) {
            this.scroll = new BScroll('#templateContainer',{
              scrollY:true,
              click:true
            })
          }
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #templateContainer
    width 558px
    height 1150px
    position fixed
    right 0
    top 120px
    .scrollWrap
      width 100%
      .banner
        width 528px
        height 192px
        img
          width 100%
          height 100%
      ul
        display flex
        flex-wrap wrap
        li
          width 144px
          height 216px
          margin 0.2rem 0.55rem 0 0
          text-align center
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
