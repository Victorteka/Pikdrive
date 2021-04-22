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
    },
    async addSupplier({commit}, name){
        const response = await axios.post('https://codechallenge.pikdrive.com/api/new-supplier',{
            name
        })
        console.log(response.data)
        // commit('setSupplier', )
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