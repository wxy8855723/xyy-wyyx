<template>
    <div id="distabContainer">
      <!--推荐模板-->
      <div  v-if="+$route.params.id === 0">
        <ul ref="firstUl" v-for="(item,index) in Recommend1" :key="index">
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
      <div v-if="+$route.params.id === 3" >
        <ShaidanTemplate/>
      </div>

    </div>
</template>

<script>
  import Split from '../../components/Split/Split'
  import TopBottomLayout from '../../components/TopBottomLayout/TopBottomLayout'
  import LeftRightLayout from '../../components/LeftRightLayout/LeftRightLayout'
  import PhotoWall from '../../components/PhotoWall/PhotoWall'
  import SlideImage from '../../components/SlideImage/SlideImage'
  import ShaidanTemplate from '../../components/ShaidanTemplate/ShaidanTemplate'
  import {mapState} from 'vuex'
  export default {

    data () {
      return {
        flag:true
      }
    },

    mounted () {
      window.addEventListener('scroll',this.handleScroll)
      this.$store.dispatch('getRecommend1')
    },

    methods : {
      handleScroll () {
       const top = document.documentElement.scrollTop || document.body.scrollTop
       const height = this.$refs.firstUl.reduce( (pre,ul) => {
          return pre + ul.clientHeight
        },0)
        if (top >= 8000 && this.flag) {
          this.flag = false
          this.$store.dispatch('getRecommend2')
        }
      }
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

</style>
