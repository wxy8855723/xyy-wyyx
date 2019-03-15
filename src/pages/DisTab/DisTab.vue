<template>
    <div id="distabContainer">
      <!--推荐模板-->
      <div  v-show="+$route.params.id === 0">
        <ul  v-for="(item,index) in Recommend1" :key="index">
          <li v-for="(i,index) in item.topics" :key="index">
            <Split/>
            <TopBottomLayout :i="i" v-if="i.style === 1"/>
            <LeftRightLayout :i="i" v-if="i.style === 2"/>
          </li>
        </ul>
        <ul v-for="(item,index) in Recommend2.result" :key="index + '-label'">
          <li v-for="(i,index) in item.topics" :key="index + '-label'">
            <Split/>
            <PhotoWall :i="i" v-if="i.style === 3"/>
            <SlideImage :i="i" v-if="i.style === 4"/>
            <LeftRightLayout :i="i" v-if="i.style === 2"/>
          </li>
        </ul>
      </div>

      <!--晒单模板-->
      <div v-show="+$route.params.id === 3">
        <ShaidanTemplate/>
      </div>


    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Split from '../../components/Split/Split'
  import TopBottomLayout from '../../components/TopBottomLayout/TopBottomLayout'
  import LeftRightLayout from '../../components/LeftRightLayout/LeftRightLayout'
  import PhotoWall from '../../components/PhotoWall/PhotoWall'
  import SlideImage from '../../components/SlideImage/SlideImage'
  import ShaidanTemplate from '../../components/ShaidanTemplate/ShaidanTemplate'
  import {mapState} from 'vuex'
  export default {

    mounted () {
      console.log('mounted')
      this.$store.dispatch('getRecommend1')
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll('#distabContainer',{
            click:true,
            scrollY:true,
            pullUpLoad:{
              threshold:-10
            }
          })
          this.scroll.on('pullingUp', () => {
            this.$store.dispatch('getRecommend2')
          })
        } else {
          this.scroll.refresh()
        }
      })
    },


    computed : {
      ...mapState({
        Recommend1: state => state.dis.getRecommend1,
        Recommend2: state => state.dis.getRecommend2,
      })
    },


    components : {
      Split,
      TopBottomLayout,
      LeftRightLayout,
      PhotoWall,
      SlideImage,
      ShaidanTemplate
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 #distabContainer
   width 100%
   position fixed
   top 165px
   bottom 0
   z-index -1
</style>
