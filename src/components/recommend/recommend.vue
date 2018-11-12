<template>
  <div class="recommend" ref="recommend">
    <div class="slide-wrapper">
          <div :autoPlay=true>
            <div v-if="recommends.length" v-for="(item, index) in recommends" :key ="index">
              <a :href="item.linkUrl">
                <!-- better-scroll 与 fastclick冲突 添加needsclick fastclick会识别 -->
                <img class="needsclick" @load="loadImg" :src="item.picUrl">
              </a>
            </div>
          </div>
        </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import jsonp from "common/js/jsonp";
export default {
  data() {
    return {
      recommends: [],
      songList: []
    };
  },
  async mounted() {
    let {data} = await jsonp(
      "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
      {},
      {
        timeout: 3000,
        param: 'jsonpCallback'
      }
    );
    console.log(data);
    this.recommends = data.slider;
    this.songList = data.songList;
  },
  methods: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable'

.recommend {
  position fixed
  width 100%
  top 88px
  bottom 0

  // flex-direction column
  .recommend-content {
    height 100%
    overflow hidden

    .recommend-list {
      .list-title {
        line-height 44px
        font-size $font-size-medium
        color $color-theme
        text-align center
      }

      .song-list {
        .song-item {
          display flex
          // padding 10px 0px
          // margin 0px 20px
          padding 0 20px 20px 20px
          box-sizing border-box
          // flex属性 在交叉轴上如何对齐
          align-items center
          // overflow hidden
          font-size 0

          .icon {
            flex 0 0 60px
            width 60px
            padding-right 20px
            vertical-align top
            // img
            // height 60px
            // width 60px
          }

          .text {
            flex 1
            display flex
            flex-direction column
            justify-content center
            overflow hidden
            line-height 20px
            font-size $font-size-medium

            // margin-left 20px
            // vertical-align top
            .name {
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              margin-bottom 20px
              color $color-text
            }

            .desc {
              color $color-text-d
            }
          }
        }
      }
    }

    .loading-wrapper {
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
    }
  }
}
</style>
