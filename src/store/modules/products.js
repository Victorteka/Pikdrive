import axios from "axios"

const state = {
    products: [],
}

const getters = {
    allProducts : (state) => state.products,
}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get('https://codechallenge.pikdrive.com/api/products')
        commit('setProducts', response.data.data)
    },

    async postProducts ({commit}, product){
        const response = await axios.post('https://codechallenge.pikdrive.com/api/new-product', product)
        console.log(response)
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