<template>
  <!-- <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index" @click="addQuery(item.k)">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length" ref="history">
            <h1 class="title" ref="historyTitle">
              <span class="text">搜索历史</span>
              <span class="clear" @click.stop="showConfirm">
                <i class="icon-clear"></i>
              </span>
            </h1>
            <div class="search-list-wrapper" ref="historyList" v-show="searchHistory">
              <search-list :searches="searchHistory" @select="addQuery" @delete="deleteSearchHistory"></search-list>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-result" ref="searchResult" v-show="query">
      <suggest :query="query" @select="saveSearch" ref="suggest"></suggest>
    </div>
    <confirm ref="confirm" text="是否清空所有搜索历史" confirmBtnText="清空" @confirm="clearSearchHistory"></confirm>
    <router-view></router-view>
  </div> -->
  <div>search</div>
</template>

<script>
export default{
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable'
  .search
    position fixed
    top 88px
    bottom 0px
    width 100%
    .search-box-wrapper
      margin 20px
    .shortcut-wrapper
      position fixed
      top 178px
      bottom 0
      width 100%
      .shortcut
        margin 0 20px
        height 100%
        overflow hidden
        .hot-key
          .title
            font-size $font-size-medium
            color $color-text-l
            margin-bottom 20px
          .item
            display inline-block
            padding 5px 10px
            margin 0 20px 10px 0
            background $color-highlight-background
            border-radius 6px
            font-size $font-size-medium
            color $color-text-d
        .search-history
          .title
            display flex
            justify-content space-between
            font-size $font-size-medium
            color $color-text-l
            margin 20px 0
          // .search-list-wrapper
          //   position fixed
          //   left 0
          //   right 0
          //   bottom 0
    .search-result
      position fixed
      top 178px
      bottom 0
      width 100%
</style>
