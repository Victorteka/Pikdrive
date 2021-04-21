import axios from "axios"

const state = {
    orders: []
}

const getters = {
    allOrders: (state) => state.orders
}

const actions = {
    async fetchOrders({commit}){
        const response = await axios.get('https://codechallenge.pikdrive.com/api/orders')
        commit('setOrders', response.data.data)
    }
}

const mutations = {
    setOrders: (state, orders) => (state.orders = orders)
}


export default {
    state,
    getters,
    actions,
    mutations
}