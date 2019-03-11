<template>
    <div id="loginContainer">
      <div class="header">
        <div class="headerLeft" @click="$router.push('/home')">
          <i class="iconfont icon-shouye"></i>
        </div>

        <div class="headerCenter">

        </div>
        <div class="headerRight">
          <i class="iconfont icon-sousuo search" @click="$router.push('/search')"></i>
          <i class="iconfont icon-qicheqianlian-1-copy cart" @click="$router.push('/cart')"></i>
        </div>
      </div>

      <div class="content" v-if="loginWay === 0">
        <div class="bigLogo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>

        <div class="loginPhone" @click="loginWay = 1">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>

        <div class="loginEmail">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>

        <div class="register">
          手机号快速注册
        </div>

        <div class="loginOther">
          <ul>
            <li>
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </li>
            <li>
              <i class="iconfont icon-qq"></i>
              <span>QQ</span>
            </li>
            <li>
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="codeContent" v-if="loginWay === 1">
        <div class="bigLogo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>

        <input class="phone" type="text" placeholder="请输入手机号">

        <div class="codeWrap">
          <input class="code" type="text" placeholder="请输入短信验证码">
          <div class="getCode">获取验证码</div>
        </div>

        <div class="loginPhone">
          <i class="iconfont icon-shouji"></i>
          <span>登录</span>
        </div>

        <div class="loginEmail">
          <i class="iconfont icon-youxiang"></i>
          <span>其他登录方式</span>
        </div>

        <div class="register">
          注册账号>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    data () {
      return {
        loginWay:0 //0正常显示界面  1手机短信登录 2 账号密码登录
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #loginContainer
    width 100%
    position fixed
    top 0
    bottom 0
    .header
      width 100%
      height 98px
      display flex
      justify-content space-around
      padding-top 20px
      box-sizing border-box
      background #FAFAFA
      i
        font-size 50px
        margin-right 15px
      .headerLeft
        width 60px
        height 75px
      .headerCenter
        width 172px
        height 54px
        margin 10px 0 0 70px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png")
        background-repeat no-repeat
        background-position: 0 -1.70667rem;
      .headerRight
        width 150px
        height 75px
    .content
      width 100%
      height 100%
      background #F2F5F4
      text-align center
      .bigLogo
        width 100%
        height 418px
        text-align center
        line-height 418px
        img
          width 268px
          height 90px
      .phone
        width 675px
        height 91px
        font-size: 0.4rem;
        line-height: 91px
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        border-bottom: 1px solid #bdbdbd;
      .loginPhone,.loginEmail
        width 677px
        height 96px
        margin 25px auto
        text-align center
        line-height 96px
        font-size 28px
        border 1px solid #b4282d
        border-radius 5px
        i
          font-size 35px
          margin-right 5px
      .loginPhone
        color #fff
        background #b4282d
      .loginEmail
        color #b4282d
      .register
        font-size 28px
        margin-top 40px
      .loginOther
        width 100%
        ul
          display flex
          justify-content center
          position absolute
          bottom 80px
          left 50%
          transform translateX(-50%)
          li
            display flex
            align-items center
            justify-content center
            width 175px
            height 40px
            font-size 28px
            color #7f7f7f
            &:nth-child(2)
              border-right  2px solid
              border-left  2px solid
            i
              font-size 35px
              margin-right 5px


    .codeContent
      width 100%
      height 100%
      background #fff
      text-align center
      .bigLogo
        width 100%
        height 418px
        text-align center
        line-height 418px
        img
          width 268px
          height 90px
      .codeWrap
        position relative
      .phone,.code
        width 675px
        height 91px
        font-size: 0.4rem;
        line-height: 91px
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        border-bottom: 1px solid #bdbdbd;
      .getCode
        position absolute
        right 40px
        bottom 40px
        width 174px
        height 59px
        text-align: center;
        color: #333;
        background: #fff;
        line-height: 59px
        border: 1px solid #333;
        border-radius: 10px;
        font-size: 0.36rem;
      .loginPhone,.loginEmail
        width 677px
        height 96px
        margin 25px auto
        text-align center
        line-height 96px
        font-size 28px
        border 1px solid #b4282d
        border-radius 5px
        i
          font-size 35px
          margin-right 5px
      .loginPhone
        color #fff
        background #b4282d
      .loginEmail
        color #b4282d
      .register
        font-size 28px
        margin-top 40px
      .loginOther
        width 100%
        ul
          display flex
          justify-content center
          position absolute
          bottom 80px
          left 50%
          transform translateX(-50%)
          li
            display flex
            align-items center
            justify-content center
            width 175px
            height 40px
            font-size 28px
            color #7f7f7f
            &:nth-child(2)
              border-right  2px solid
              border-left  2px solid
            i
              font-size 35px
              margin-right 5px


</style>
