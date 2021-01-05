export const state = () => ({
  token: '',
  user: ''
})

export const mutations = {
  init(state, token) {
    state.token = token
  }
}

export const actions = {
  login({ commit, getters }, u) {
    
  }
}