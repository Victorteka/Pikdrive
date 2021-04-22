import axios from "axios"

const state = {
    products: [],
    dialog: false
}

const getters = {
    allProducts : (state) => state.products,
    dialog: (state) => state.dialog
}

const actions = {
    async fetchProducts({commit}){
        const response = await axios.get('https://codechallenge.pikdrive.com/api/products')
        commit('setProducts', response.data.data)
    },
    showDialog({commit}){
        commit('setDialog', true)
    },
    closeDialog({commit}){
        commit('setCloseDialog', false)
    }
}

const mutations = {
    setProducts : (state, products) => (state.products = products),
    setDialog: (state, value) => (state.dialog = value),
    setCloseDialog: (state, value) => (state.dialog = value)
}

export default {
    state,
    actions,
    getters,
    mutations
}