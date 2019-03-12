<template>
    <div id="disContainer">
      <header>
        <div class="headerLeft" @click="$router.push('/home')">
          <i class="iconfont icon-shouye"></i>
        </div>

        <div class="headerCenter">
          <span class="find">发现</span>
          <span>甄选家</span>
        </div>
        <div class="headerRight">
          <i class="iconfont icon-sousuo search" @click="$router.push('/search')"></i>
          <i class="iconfont icon-qicheqianlian-1-copy cart" @click="$router.push('/cart')"></i>
        </div>
      </header>
      <ul>
        <li :key="index" v-for="(item,index) in navlist" @click="toggleClass(index)">
          <router-link :to="`/dis/tab${index}`">
            {{item.tabName}}
          </router-link>
        </li>
      </ul>

      <router-view/>

    </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {

    data () {
      return {
        Index:0
      }
    },

    methods: {
      toggleClass (index) {
        this.Index = index
      }
    },

    mounted () {
      this.$store.dispatch('getNavList')
    },

    computed : {
      ...mapState({
        navlist : state => state.dis.navList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #disContainer
    width 100%
    header
      width 100%
      height 75px
      background #FAFAFA
      display flex
      justify-content space-around
      align-items center
      font-size 28px
      color #7f7f7f
      i
        font-size 45px
      .headerCenter
        margin 0 150px
        display flex
        justify-content space-around
        align-items center
        .find
          font-size 36px
          font-weight bold
          color #b4282d
          margin-right 30px


    ul
      width 100%
      background #FAFAFA
      border-top 1px solid  #d9d9d9
      display flex
      align-items center
      justify-content space-around
      li
        a
          line-height 76px
          display block
          font-size 28px
          padding 0 10px
          color #7f7f7f
          font-weight normal
        .router-link-active
           border-bottom 3px solid #b4282d
</style>
