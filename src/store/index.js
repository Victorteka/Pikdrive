import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import orders from './modules/orders'
import sales from './modules/topSales'
import suppliers from './modules/suppliers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    products,
    orders,
    sales,
    suppliers
  }
})
