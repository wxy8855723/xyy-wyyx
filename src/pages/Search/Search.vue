<template>
  <div id="searchContainer">
    <div class="search">
      <input type="text" placeholder="美妆护肤 女王专享7折起">
      <div class="cancel" @click="$router.replace('/home')">取消</div>
    </div>
    <div class="hot">
      <p>热门搜索</p>
      <ul>
        <li>按摩电器</li>
        <li>美食 3件75折</li>
        <li>美容仪器直减100</li>
        <li>电动牙刷 69元起</li>
        <li class="active">明前龙井7.5折预售</li>
        <li>活颜润肌水</li>
        <li>爆款 行李箱</li>
        <li>四件套279元起</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchContainer
    width 100%
    height 100%
    .search
      position relative
      width 70%
      margin-left 70px
      margin-top 20px
      display flex
      justify-content space-between
      align-items center
      padding-left 30px
      background #eee
      &::before
        content ''
        display block
        width 40px
        height 40px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
        background-repeat no-repeat
      input
        outline none
        width 612px
        padding-left 10px
        background #eee
        height 56px
        border-radius 5px
        font-size 0.37333rem
      .cancel
        font-size 0.37333rem
        position absolute
        right -70px
        top 15px

    .hot
      width 100%
      margin-top 50px
      padding 0 50px
      box-sizing border-box
      p
        height: 0.8rem;
        font-size: 0.37333rem;
        color: #999;
      ul
        li
          float: left;
          padding: 0 0.2rem;
          margin-right: 0.42667rem;
          margin-bottom: 0.42667rem;
          line-height: 0.61333rem;
          border: 1px solid #999;
          border-radius: 4px;
          color: #333;
          font-size: 0.37333rem;
          &.active
            color #b4282d
            border 1px solid #b4282d
</style>
