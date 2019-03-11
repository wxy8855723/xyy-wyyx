<template>
    <div id="distabContainer">
      <!--推荐模板-->
      <!--<div class="" v-if="+$route.params.id === 0">-->
        <!--<ul v-for="(item,index) in Recommend1" :key="index">-->
          <!--<li v-for="(i,index) in item" :key="index">-->

          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
      <TopBottomLayout/>
      <LeftRightLayout/>

    </div>
</template>

<script>
  import TopBottomLayout from '../../components/TopBottomLayout/TopBottomLayout'
  import LeftRightLayout from '../../components/LeftRightLayout/LeftRightLayout'
  import {mapState} from 'vuex'
  export default {

    mounted () {
      this.$store.dispatch('getRecommend1')
      this.$store.dispatch('getRecommend2')
    },

    computed : {
      ...mapState({
        Recommend1: state => state.dis.getRecommend1
      })

    },

    components : {
      TopBottomLayout,
      LeftRightLayout
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
