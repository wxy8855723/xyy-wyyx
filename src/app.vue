<template>
    <div>
      <router-view/>
      <Footer v-if="$route.meta.isShowFooter"/>
    </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
  export default {
    components: {
      Footer
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
