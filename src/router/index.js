import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Orders from '../views/Orders.vue'
import TopSales from '../views/TopSales.vue'
import NotFound from '../views/NotFound.vue'
import Suppliers from '../views/Suppliers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/top-sales',
    name: 'TopSales',
    component: TopSales
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
