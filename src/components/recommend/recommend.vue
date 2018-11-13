<template>
  <div class="recommend" ref="recommend">
     <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in recommends" :key="index">
      <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
    </el-carousel-item>
  </el-carousel>
     <div class="recommend-list">
       <h1 class="list-title">
            热门歌单推荐
          </h1>
      <el-row class="recommend-row" >
        <el-col :span="12"  class="song-item" v-for="(item, index) in songList" :key=index>
              <div class="icon">
                <img :src="item.picUrl" alt="pic">
              </div>
              <div class="text">
                <h2 class="name">{{item.songListDesc}}</h2>
                <p class="desc">{{item.songListAuthor}}</p>
              </div>
          </el-col>
      </el-row>
          
          
      </div>
      
      <!-- 添加外部容器用于定位loading到中部 -->
      <div class="loading-wrapper" v-show="!songList.length">
        <!-- <loading></loading> -->
      </div>   
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import slider from "../base/slider.vue";
import jsonp from "common/js/jsonp";
export default {
  components: {
    slider
  },
  data() {
    return {
      recommends: [],
      songList: []
    };
  },
  filters: {
    getPic(url) {
      return "//y.gtimg.cn/music/photo_new/T006R300x300M000" + url + ".jpg";
    }
  },
  async mounted() {
    let { data } = await jsonp(
      "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
      {},
      {
        timeout: 3000,
        param: "jsonpCallback"
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
  .recommend-list {
      display flex
      flex-direction row
      flex-wrap wrap
      box-sizing border-box
      padding 0 0px 0 10px
      overflow hidden
      .song-item {
        padding 10px 10px 0 0px
        margin 0

        .icon {
          img {
            width 100%
          }
        }

        .text {
                  background white

          .name {
            font-size 14px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
          }

          .desc {
            font-size 12px
          }
        }
      }
    
  }
}
</style>
