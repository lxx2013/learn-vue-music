<template>
  <!-- <div class="rank" ref="rank">
    <scroll class="toplist" :data="toplist" v-show="toplist" ref="list">
      <ul>
        <li class="item" v-for="(item, index) in toplist" :key="index" @click="selectItem(item)">
          <div class="icon">
            <img width="100" height="100" v-lazy="item.picUrl">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.songList" :key="index">
              <span>{{index+1}}</span>
              <span>{{song.songname}}-{{song.singername}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
    <loading v-show="!toplist"></loading>
    <router-view></router-view>
  </div> -->
  <div>rank</div>
</template>

<script>
export default {
  name: "rank"
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.rank {
  position fixed
  top 88px
  left 0
  bottom 0
  right 0
  overflow hidden

  .toplist {
    width 100%
    height 100%

    .item {
      display flex
      margin 0 20px
      padding-top 20px
      height 100px

      .icon {
        flex 0 0 100px
        vertical-align top
      }

      .songlist {
        flex auto
        display flex
        flex-direction column
        justify-content center
        padding 0 20px
        height 100px
        width 100%
        overflow hidden
        background $color-highlight-background
        color $color-text-d
        font-size $font-size-small

        .song {
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          line-height 26px
        }
      }
    }
  }
}
</style>
