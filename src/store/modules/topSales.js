import axios from 'axios'

const state = {
    sales: []
}

const getters = {
    allSales: (state) => state.sales
}

const actions = {
    async fetchSales({commit}){
        const response = await axios.get('https://codechallenge.pikdrive.com/api/top-sales')
        commit('setSales', response.data.data)
    }
}

const mutations = {
    setSales: (state, sales) => (state.sales = sales)
}

export default {
    state,
    actions,
    getters,
    mutations
}