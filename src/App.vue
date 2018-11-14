<template>
  <div id="app">
    <m-header></m-header>
    <Tab></Tab>
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
import MHeader from "./components/m-header/m-header"
import Tab from "./components/tab/tab"
import Rank from "./components/rank/rank.vue"
import Recommend from "./components/recommend/recommend.vue"

export default {
  name: "App",
  components: {
    MHeader,
    Tab,
    Rank,
    Recommend
  }
}
</script> 

<style lang="stylus">
@import '~src/common/stylus/index.styl'
</style>