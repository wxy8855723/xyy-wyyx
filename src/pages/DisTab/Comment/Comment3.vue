<template>
  <div>
    <CommentTemplate :content="content"/>
  </div>
</template>

<script>
  import CommentTemplate from './CommentTemplate'
  export default {
    props:{
      content:Object
    },
    components:{
      CommentTemplate
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
