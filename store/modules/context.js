export const state = () => ({
  submit:false,
  selectclass:false,
  selectsection:false
})

// export const actions = {
//   xyz() {
//     commit('test1',payload)
//   }
// }
export const mutations = {
  
  // test1(state, payload) {
  //   console.log('before update', state)
  //   state.test2 = payload.xyz
    // console.log('after update state', state.test2)
  submitvalue(state, payload) {
    state.submit=payload
  },
  selectclassvalue(state, payload) {
    state. selectclass=payload
  },
  selectsectionvalue(state, payload) {
    state.selectsection=payload
  }
  
}

// export const getters = {
//   test2(state) {
//     return state.test2
//   }
// }
