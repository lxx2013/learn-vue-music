<template>
  <div class="singer">
    <listview :data="map" @select="getSingerDetial"></listview>  
  </div>
</template>


<script>
const ERR_OK = 0;
const HOT_NAME = "热门";
import Pinyin from 'common/js/ChinesePY'
import Listview from "../base/listview.vue";
import { getSinger, Singer } from "../../api/singer.js";
import { mapMutations } from "vuex";

export default {
  components: {
    Listview
  },
  created() {
    this._getSinger();
  },
  data() {
    return {
      singers: {},
      map: [],
      isDetial: false,
      showClass: "slideTo"
    };
  },
  methods: {
    async _getSinger() {
      let { singerList } = await getSinger();
      console.log("singer");
      console.log(singerList.data);
      this.singers = this._normalizeSinger(singerList.data.singerlist);
    },

    // 此时的list是根据歌手的热度排序的，不符合名字首字母排序
    _normalizeSinger (list) {
      // console.log(list)
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < 3) {
          map.hot.items.push(new Singer({
            name: item.singer_name,
            id: item.singer_mid
          }))
        }
        // JS实现获取汉字首字母拼音、全拼音及混拼音的方法_javascript技巧_脚本之家 https://www.jb51.net/article/128190.htm
        item.Findex = Pinyin.GetJP(item.singer_name.substr(0, 1))
        // console.log('Findex', item.Findex)
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.singer_mid,
          name: item.singer_name
        }))
      })
      // 处理map 为 ["热门","a",b,c,d,...,z]
      let ret = []
      for(let i in map){
        ret.push(map[i])
      }
      ret.sort((a, b) => a.title == HOT_NAME ? -1 : b.title ==HOT_NAME?1:(a.title[0] < b.title[0]? -1:1))
      return ret
    },
    _orderList(list) {
      let hot = [];
      let ret = [];
      for (let key in list) {
        let val = list[key];
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      console.log(ret);
      console.log(hot);
      this.map = hot.concat(ret);
      console.log(this.map);
    },
    ...mapMutations({
      setSinger: "SET_SINGER",
      showContent: "SHOW_CONTENT"
    }),
    getSingerDetial(singer) {
      this.showContent("singer-detial");
      this.setSinger(singer);
      console.log("singer-detial");
      this.$router.push({
        path: `/singer/${singer.id}`
      });
    }
  },
  watch: {
    $route(to, from) {
      let indexTo = [];
      let indexFrom = [];
      indexTo = to.path.split("/");
      indexFrom = from.path.split("/");
      if (indexTo.length > indexFrom.length) {
        this.isDetial = true;
        this.showClass = "slideTo";
        console.log(1);
      } else {
        this.showClass = "slideFrom";
        this.isDetial = false;
      }
    }
  }
};
</script>


<style lang="stylus" scoped>
.singer {
  background-color aqua
  min-height 100vh
}

</style>
