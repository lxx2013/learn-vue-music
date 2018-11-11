<template>
  <div>recommend</div>
</template>

<script>
export default{
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~common/stylus/variable'
  .recommend
    position fixed
    width 100%
    top 88px
    bottom 0
    // flex-direction column
    .recommend-content
      height 100%
      overflow hidden
      .recommend-list
        .list-title
          line-height 44px
          font-size $font-size-medium
          color $color-theme
          text-align center
        .song-list
          .song-item
            display flex
            // padding 10px 0px
            // margin 0px 20px
            padding 0 20px 20px 20px
            box-sizing border-box
            // flex属性 在交叉轴上如何对齐
            align-items center
            // overflow hidden
            font-size 0
            .icon
              flex 0 0 60px
              width 60px
              padding-right 20px
              vertical-align top
              // img
              //   height 60px
              //   width 60px
            .text
              flex 1
              display flex
              flex-direction column
              justify-content center
              overflow hidden
              line-height 20px
              font-size $font-size-medium
              // margin-left 20px
              // vertical-align top
              .name
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                margin-bottom 20px
                color $color-text
              .desc
                color $color-text-d
      .loading-wrapper
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
