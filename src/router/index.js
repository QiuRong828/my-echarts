import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sellerPage',
    component: () => import('../views/SellerPage.vue')
  },
  {
    path: '/trend',
    name: 'trend',
    component: () => import('../views/TrendPage.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapPage.vue')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('../views/RankPage.vue')
  },
  {
    path: '/hot',
    name: 'hot',
    component: () => import('../views/HotPage.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    component: () => import('../views/StockPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
