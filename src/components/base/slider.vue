<template>
  <!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- 存放具体的轮播内容 -->
        <slot name ="swiper-slide"></slot>
    </div>
    <!-- If we need pagination -->
    <div :class="{'swiper-pagination':pagination}"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {};
  },
  props: {
    effect: {
      type: String,
      default: "slide"
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    pagination: {
      type: Boolean,
      default: true
    },
    paginationType: {
      type: String,
      default: "bullets"
    },
    autoPlay: {
      type: Number,
      default: 3000
    }
  },
  mounted() {
    setTimeout(() => {
      var mySwiper = new Swiper(".swiper-container", {
        //自动播放
        autoPlay: this.autoPlay,
        //方向
        direction: this.direction,
        loop: this.loop,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet"
        },
        //分页类型
        paginationType: this.paginationType,
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //特效
        effect: this.effect,
        //用户操作swiper之后，不禁止autoplay
        disableOnInteraction: false,
        //修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        //修改swiper的父元素时，自动初始化swiper
        observeParents: true
      });
    }, 3);
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '~common/stylus/variable.styl'

.swiper-container {
    .swiper-wrapper {
        position relative
        overflow hidden
        white-space nowrap

        .swiper-slide {
            img{
                width 100%
            }
        }

        .siwper-pagination-bullet {
            width 8px
            height 8px
            border-radius 50%
            background $color-text-l

            &.active {
                background $color-text-ll
            }
        }

        .swiper-button-prev, .swiper-button-next {
            background $color-text-ll
        }
    }
}
</style>
