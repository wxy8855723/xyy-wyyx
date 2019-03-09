<template>
    <div id="homeContainer">
        <header>
          <div class="header">
            <h1 class="logo"></h1>
            <div class="search" @click="$router.push('/search')">
              <i class="iconfont icon-soushuo"></i>
              <span class="placeholder">搜索商品, 共19966款好物</span>
            </div>
            <div class="login" @click="$router.push('/login')">登录</div>
          </div>
          <div class="headerNav">
            <div class="navList" v-show="!showMask" @mouseenter="scroll.refresh()">
              <a :class="{active:activeClass===-1}" @click="toggleClass(-1)" href="javascript:;">推荐</a>
              <a href="javascript:;" :class="{active:index === activeClass}" @click="toggleClass(index)" :key="index" v-for="(good,index) in navName">{{good}}</a>
            </div>
            <span v-if="showMask" class="all">全部频道</span>
            <div class="more" @click="showMask = !showMask">
              <i class="iconfont icon-arrow"></i>
            </div>
            <div v-show="showMask" class="showAllNav">
              <div class="allNavList">
                <a :class="{active:activeClass===-1}" @click="toggleClass(-1)" href="javascript:;">推荐</a>
                <a href="javascript:;" :class="{active:index === activeClass}" @click="toggleClass(index)" :key="index" v-for="(good,index) in navName">{{good}}</a>
              </div>
            </div>
          </div>
        </header>
        <!--遮罩层-->
        <div v-show="showMask" @click="hideMask" class="mask"></div>
          <!--轮播图-->
        <div class="swiper-container" ref="swiperNoe">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" ref="paginationNoe"></div>
        </div>

        <div class="contentContainer">
          <div class="serve">
            <ul>
              <li>
                <i class="iconfont icon-dui"></i>
                <span>网易自营品牌</span>
              </li>
              <li>
                <i class="iconfont icon-dui"></i>
                <span>30天无忧退货</span>
              </li>
              <li>
                <i class="iconfont icon-dui"></i>
                <span>48小时快速退款</span>
              </li>
            </ul>

          </div>

          <ul class="category">
            <li v-for="(everyClass,index) in homeCategoryImg" :key="index">
              <img v-lazy="everyClass.picUrl" alt="">
              <span>{{everyClass.text}}</span>
            </li>
          </ul>

          <div class="boosRecommend">
            <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
          </div>

          <ul class="hot">
            <li v-for="(h,index) in hot" :key="index">
              <p class="title">{{h.styleItem.title}}</p>
              <p class="desc">{{h.styleItem.desc}}</p>
              <img v-lazy="h.styleItem.picUrlList[0]" alt="">
              <img v-lazy="h.styleItem.picUrlList[1]" alt="">
            </li>
          </ul>

          <div class="private">
            <div class="privateText">
              私人定制
            </div>
            <div class="swiper-container" ref="swiperTwo">
              <div class="swiper-wrapper">
                <div class="swiper-slide" :key="index" v-for="(item,index) in personalShop3arr">
                  <div v-for="(i,index) in item" :key="index">
                    <img v-lazy="i.scenePicUrl" alt="">
                    <p class="ellipsis">
                      {{i.name}}
                    </p>
                    <p class="price">${{i.counterPrice}}</p>
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination" ref="paginationTwo"></div>
            </div>

          </div>

          <div class="zero"></div>

        </div>
    </div>
</template>

<script>
  import {mapGetters,mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {

    data () {
      return {
        showMask:false,
        activeClass:-1  //第一个默认选中
      }
    },

    methods : {
      _initScroll () {
        this.scroll = new BScroll('.headerNav',{
          scrollX:true,
          click:true
        })
      },

      _initSweiper () {
        new Swiper (this.$refs.swiperNoe, {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el:'swiper-pagination'
          }
        })

      },

      toggleClass (index) {
        this.activeClass = index
      },

      hideMask () {
        this.showMask = !this.showMask
      }
    },

    watch : {
      personalShop3arr () {
        this.$nextTick(() => {
          new Swiper (this.$refs.swiperTwo, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el:this.$refs.paginationTwo
            }
          })
        })
      }
    },

    mounted () {
      this._initScroll()
      this._initSweiper()
      this.$store.dispatch('getGoods')
      this.$store.dispatch('getHomePage')
      this.$store.dispatch('getHot')
      this.$store.dispatch('getShouye')
    },

    computed : {
      ...mapGetters(['navName','homeCategoryImg','personalShop3arr']),
      ...mapState({
        goodsList: state => state.index.goodsList,
        homeCategoryImg : state => state.index.homePage,
        hot: state => state.index.hot,
        shouye:state => state.index.shouye
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeContainer
    width 100%
    height 100%
    overflow hidden
    header
      width 100%
      height 148px
      background #fff
      .header
        display flex
        justify-content space-around
        align-items center
        width 100%
        height 88px
        h1
          width 138px
          height 40px
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-repeat no-repeat
          margin-left 20px
        .search
          width 440px
          height 56px
          background #ededed
          border-radius 8px
          text-align center
          line-height 56px
          i
            font-size 30px
          .placeholder
            font-size 28px
            color #666

        .login
          width 76px
          height 42px
          color #b4282d
          border 1px solid #b4282d
          text-align center
          line-height 42px
          font-size 0.32rem
          border-radius 5px
          margin-right 20px
      .headerNav
        width 100%
        height 60px
        line-height 60px
        position relative
        .navList
          height 60px
          float left
          white-space:nowrap
          overflow hidden
          line-height 60px
          padding-left 20px
          a
            display inline-block
            text-align center
            height 55px
            font-size 0.37333rem
            color #333
            padding 0 0.31333rem
            &.active
              color #b4282d
              border-bottom 4px solid #b4282d
        .more
          width 105px
          height 60px
          text-align center
          line-height 60px
          position absolute
          background #fff
          right 0
          top 0
          >i
            font-size 40px
        .all
          font-size 28px
          margin-left 25px
        .showAllNav
          width 100%
          background #fff
          padding-top  0.32rem
          position absolute
          left 0
          top 58px
          z-index 1000
          .allNavList
            width 100%
            a
              text-align center
              line-height 58px
              display block
              width 152px
              height 58px
              float left
              border 1px solid #ccc
              margin-left 30px
              margin-bottom 40px
              background #fafafa
              color #000
              &.active
                color #b4282d
                border 1px solid #b4282d


    .mask
      background rgba(0,0,0,0.5)
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index -1000
    .swiper-container
      width 100%
      height 408px
      img
        width 100%
        height 100%
    .contentContainer
      width 100%
      .serve
        width 100%
        height 64px
        padding 0.21333rem 0
        box-sizing border-box
        ul
          display flex
          justify-content space-around
          color #b4282d
          font-size 22px
          i
            font-size 24px


      .category
        width 100%
        height 392px
        li
          width 109px
          height 156px
          float left
          text-align center
          margin 0.13333rem 0.26667rem 0
          img
            width 110px
            height 110px
          span
            text-align: center
            color: #333
            margin-top: 0.13333rem
            font-size: 0.32rem
            line-height: 0.48rem
            white-space: nowrap


      .boosRecommend
        width 100%
        height 160px
        img
          width 100%
          height 160px

      .hot
        width 100%
        height 616px
        padding 0.13333rem 0.4rem 0.4rem 0.34667rem
        background #fff
        li
          float left
          width 343px
          height 284px
          background-image url("https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png")
          background-repeat no-repeat
          background-size 100% 100%
          margin 0  5px 5px 0
          box-sizing border-box
          padding-top 20px
          text-align center
        .title
          color: #333
          padding-left 0.13333rem
          font-size 0.42667rem
        .desc
          color: #7f7f7f
          padding-left 0.13333rem
          font-size 0.32rem
          margin-top 0.13333rem
          margin-bottom 0.13333rem
        img
          width 150px
          height 150px
          display inline-block
      .private
        width 100%
        height 493px
        .privateText
          width: 100%;
          height: 1.33333rem
          line-height: 1.33333rem
          font-size: 0.42667rem
          padding: 0 0.4rem
          background: #fff
        .swiper-container
          width 100%
          height 393px
          .swiper-slide
            width 100%
            height 318px
            display flex
            justify-content space-around
            >div
              width 216px
              height 318px
              img
                width 216px
                height 216px
                background #f5f5f5
              p
                width 216px
                color: #333;
                margin-bottom: 0.13333rem;
                font-size: 0.32rem;
                white-space normal
                text-align center
              .price
                color red
                text-align center
      .zero
        width 100%
        height 300px
        background red
</style>
