import axios from 'axios'

const state = {
    suppliers: []
}

const getters = {
    allSuppliers: (state)=> state.suppliers
}

const actions = {
    async fetchSuppliers({commit}){
        const response = await axios.get('https://codechallenge.pikdrive.com/api/suppliers')
        commit('setSuppliers', response.data.data)
    }
}

const mutations = {
    setSuppliers: (state, suppliers) => state.suppliers = suppliers
}

export default {
    state,
    actions,
    getters,
    mutations
}