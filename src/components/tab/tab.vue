<template>
  <div class="tab">
    <!-- router-link点击跳转到相应的路径，歌手页是点击后触发this.$router.push({path: `/singer/${singer.id}`}) -->
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排名</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'tab',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  .tab
    display flex
    width 100%
    height 44px
    line-height 44px
    font-size $font-size-medium
    .tab-item
      flex 1 1 auto
      // display inline-block
      text-align center
      .tab-link
        padding-bottom 5px
        color $color-text-l
      &.router-link-active
        .tab-link
          color $color-theme
          border-bottom 2px solid $color-theme
</style>
