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
    },
    async deleteOrder({commit}, id){
        const response = await axios.post('https://codechallenge.pikdrive.com/api/delete-order', {
            id
        })
        console.log(response)
        // commit('setOrderAfterDelete', response.data.data )
    }
}

const mutations = {
    setOrders: (state, orders) => (state.orders = orders),
    // setOrderAfterDelete: (state, orders) => 
}


export default {
    state,
    getters,
    actions,
    mutations
}