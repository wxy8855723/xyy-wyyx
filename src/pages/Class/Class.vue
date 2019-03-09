<template>
    <div id="classContainer">
      <div class="search">
        <div>
          <i class="iconfont icon-soushuo"></i>
          <span class="placeholder">搜索商品, 共19966款好物</span>
        </div>
      </div>
      <div class="content">
        <div class="leftNav">
          <ul>
            <li :class="{active:index === Index}" v-for="(category,index) in AllClass.categoryL1List" :key="index" @click="toggleClassAndCategory(category,index)">
              <a href="javascript:;" :class="{color:index === Index}">{{category.name}}</a>
            </li>
          </ul>
        </div>
        <ClassTemplate :category="category"/>
      </div>
    </div>
</template>

<script>
  import ClassTemplate from '../../components/ClassTemplate/ClassTemplate'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    data () {
      return {
        category:{},
        Index:0
      }
    },

    mounted () {
      this.$store.dispatch('getAllClass')
    },

    methods : {
      toggleClassAndCategory (category,index) {
        this.Index = index
        this.category = category
      }
    },

    computed : {
      ...mapState({
        AllClass: state => state.category.allClass
      })
    },

    watch : {
      AllClass () {
        this.category = this.AllClass.categoryL1List[0]
        this.$nextTick(() => {
          new BScroll('.leftNav',{
            scrollY:true,
            click:true
          })
        })
      }
    },

    components:{
      ClassTemplate
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #classContainer
      width 100%
      height 100%
      .search
        position fixed
        top 0
        left 0
        z-index 1000
        width 100%
        background #fff
        >div
          margin 0 auto
          margin-top 20px
          width 90%
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

      .content
        width 100%
        border-top 1px solid #ccc
        margin-top 20px
        position fixed
        top 80px
        let 0
        .leftNav
          position absolute
          left 0
          top  0
          height 1100px
          ul
            width 162px
            border-right 1px solid #ccc
            text-align center
            li
              width 162px
              height 50px
              text-align center
              line-height 50px
              margin-top 0.53333rem
              &:nth-child(1)
                margin-top 0
              &.active
                border-left 5px solid #ab2b2b
              a
                color #7e8c8d
                font-size 28px
                &.color
                  color #ab2b2b

</style>
