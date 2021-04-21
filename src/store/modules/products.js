import axios from "axios"

const state = {
    products: []
}

const getters = {
    allProducts : (state) => state.products
}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get('https://codechallenge.pikdrive.com/api/products')
        commit('setProducts', response.data.data)
    }
}

const mutations = {
    setProducts : (state, products) => (state.products = products)
}

export default {
    state,
    actions,
    getters,
    mutations
}