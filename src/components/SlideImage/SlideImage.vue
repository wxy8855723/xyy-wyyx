<template>
    <div id="slideimageContainer" v-if="i">
      <div class="title">
        {{i.title}}
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide " v-for="(loock,index) in i.lookList" :key="index">
            <img class="image" v-lazy="loock.picUrl" alt="">
          </div>
        </div>
      </div>
      <div class="haveMet">
        <i class="iconfont icon-kanguo"></i>
        <p>{{i.readCount}}人看过</p>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {

    props : {
      i:Object
    },

    mounted () {
      new Swiper('.swiper-container',{
        initialSlide:this.i.lookList.length / 2,
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 3,
          depth: 100,
          modifier: 2,
          slideShadows : true
        },
      })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #slideimageContainer
    width 100%
    height 451px
    box-sizing border-box
    padding 30px
    .title
      font-size: 0.48rem;
      color: #333;
      line-height: 0.62rem;
      overflow: hidden;
      text-overflow: ellipsis;
      margin 10px 0 20px 0
    .haveMet
      margin-top 50px
      display flex
      align-items center
      font-size: 0.36rem
      color #999
      i
        font-size 30px
      p
        margin-left 10px
    .swiper-slide
      width 250px
      height 250px
      opacity 0.8
      &.swiper-slide-active
        opacity 1
    .image
      width 250px
      height 250px
</style>
