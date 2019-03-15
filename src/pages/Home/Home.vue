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
        <div class="swiper-container">
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
          <div class="swiper-pagination"></div>
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
            <div class="swiper-container-two" >
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
              <div class="swiper-pagination-two"></div>
            </div>
          </div>

          <Split/>

          <div class="TimeToBuy" v-if="timeToBuy">
            <div class="header">
              <span class="title">限时购</span>
              <div class="time">
                <span>03</span>
                <span>:</span>
                <span>04</span>
                <span>:</span>
                <span>05</span>
              </div>
              <div class="more">
                <span>更多></span>
              </div>
            </div>
            <ul class="list">
              <li v-for="(item,index) in timeToBuy.itemList" :key="index">
                <img v-lazy="item.picUrl" alt="">
                <div class="price">
                  <span>￥{{item.activityPrice}}</span>
                  <del>￥{{item.originPrice}}</del>
                </div>
              </li>
            </ul>
          </div>

          <Split/>

          <div class="goodsTab">
            <ul class="goodsTabList">
              <li  v-for="(category,index) in shouye.categoryModule" :key="index">
                <Split/>
                <img v-lazy="category.titlePicUrl" alt="">
                <div :class="'smallListWrap' + index">
                  <ul class="smallList">
                    <li v-for="(c,index) in category.itemList" :key="index">
                      <img v-lazy="c.scenePicUrl" alt="">
                      <p class="ellipsis">{{c.name}}</p>
                      <p class="price">￥{{c.retailPrice}}</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <Split/>

          <div class="ftWrap">
            <div  class="ftContent">
              <div class="bd">
                <a href="javascript:;" class="goApp">下载APP</a>
                <a  href="javascript:;" class="goPc">电脑版</a>
              </div>
              <p class="copyRight">
                <span>网易公司版权所有 © 1997-</span>
                <span data-v-57b29fc1="">2019</span>
                <br>
              </p>
             </div>
          </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters,mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import Split from '../../components/Split/Split'
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
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el:'.swiper-pagination',
            type:'custom',
            clickable :true,
            // 自定义分页器
            renderCustom: function (swiper, current, total) {
              var customPaginationHtml = "";
              for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i === (current - 1)) {
                  customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                }
              }
              return customPaginationHtml;
            }
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
          new Swiper ('.swiper-container-two', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el:'.swiper-pagination-two'
            }
          })
        })
      },

      shouye () {
        this.$nextTick( () => {
          const categoryModule = this.shouye.categoryModule
          for (var i = 0; i < categoryModule.length; i++) {
            new BScroll('.smallListWrap'+i,{
              click: true,
              scrollX: true,
              scrollY:false
            })
          }
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
      ...mapGetters(['navName','homeCategoryImg','personalShop3arr','timeToBuy']),
      ...mapState({
        goodsList: state => state.index.goodsList,
        homeCategoryImg : state => state.index.homePage,
        hot: state => state.index.hot,
        shouye:state => state.index.shouye,
      })
    },

    components : {
      Split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeContainer
    width 100%
    height 100%
    overflow hidden
    padding-bottom 80px
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
      img
        width 100%
        height 100%
      .swiper-pagination
        width 100%
        height 100%
        &.swiper-pagination-custom
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 100px
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
        .swiper-container-two
          width 100%
          .swiper-pagination-two
            text-align center
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
      .TimeToBuy
        width 100%
        padding 0.13333rem 0.4rem 0.4rem 0.34667rem
        box-sizing border-box
        .header
          width 100%
          height 99px
          padding-top 30px
          box-sizing border-box
          .title,.time
            float left
            font-size 32px
            margin-left 20px
          .time
            background #333
            color #fff
            span
              float left
              display block
              width 0.48rem
              height 0.48rem
              text-align center
              padding 3px
              &:nth-child(2),&:nth-child(4)
               color #000
               background #fff
          .more
            float right
            font-size 32px
        .list
          display flex
          flex-wrap wrap
          justify-content space-around
          li
            width 210px
            height 318px
            img
              width 100%
              height 216px
              background #eee
              margin-top 30px
            .price
              width 100%
              text-align center
              font-size 28px
              span
                color #b4282d


      .goodsTab
        width 100%
        .goodsTabList
          width 100%
          li
            width 100%
            height 800px
            img
              width 100%
              height 400px
            div
              width 100%
              margin-top 30px
              ul
                float left
                display flex
                justify-content space-around
                margin-top 50px
                li
                  width 200px
                  height 329px
                  margin-right 20px
                  text-align center
                  img
                    width 200px
                    height 200px
                    background #eee
                  p
                    margin-top 20px
                    font-size 26px
                  .price
                    margin-top 30px
                    color #b4282d



      .ftWrap
        border-top: 1px solid rgba(0,0,0,.15);
        background-color: #414141;
        .ftContent
          text-align: center;
          padding: .22rem .26667rem .37333rem;
          width: 10rem;
          margin-right: auto;
          margin-left: auto;
          margin-top 50px
          .bd
            .goApp
              margin-right: .66667rem;
              padding 0.23333rem 0.53333rem
              width: 2.29333rem;
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
            .goPc
              width: 2.29333rem;
              padding 0.23333rem 0.53333rem
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
          .copyRight
            margin-top: .48rem;
            font-size: .32rem;
            line-height: .42667rem;
            color: #999;
  </style>
<style>
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: .53333rem;
    height: .05333rem;
    display: inline-block;
    background: #fff;
    opacity: .4;
    border-radius: 0;
    margin: 1rem .13333rem 0 0;
  }

  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #fff;
    border-radius: 0;
  }

  .swiper-pagination-bullet {
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background: #333;
    border: none;
    vertical-align: middle;
  }

  .swiper-pagination-bullet-active {
    border: none;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .16rem;
    height: .16rem;
  }


</style>
