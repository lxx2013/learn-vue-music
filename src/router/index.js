import Vue from "vue"
import Router from "vue-router"
import rank from "../components/rank/rank.vue"
import recommend from "../components/recommend/recommend.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: '/recommend'
    },
    {
      path: "/rank",
      component: { rank }
    },
    {
      path: "/recommend",
      component: { recommend }
    }
  ]
})
