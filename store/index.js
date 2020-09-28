// import { vuexfireMutations } from 'vuexfire'
// import { getUserFromCookie } from '../helper/index'



// export const mutations = {
//   ...vuexfireMutations,
// }

// export const actions = {
//   async nuxtServerInit({ dispatch, commit }, { req }) {
//     try {
//       const user = getUserFromCookie(req)
//       if (user) {
//         await dispatch('modules/user/setUSER', {
//           name: user.name,
//           email: user.email,
//           avatar: user.picture,
//           uid: user.user_id,
//           phone: user.phoneNumber,
//           isInstructor: user.Instructor,
//           isStudent: user.Student,
//           isAdmin: user.Admin,
//         })

//         let profile = await dispatch('modules/crudSI/readData', {
//           collection: 'profileInstructor',
//           docId: user.user_id,
//         })

//         commit('modules/user/setProfile', profile)

//         // let expirationDate = req.headers.cookie
//         //   .split(';')
//         //   .find(c => c.trim().startsWith('expirationDate='))
//         //   .split('=')[1]
//         // if (new Date().getTime() >= expirationDate) {
//         //   await dispatch('modules/user/logout')
//         // }
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   },
// }
const state = () => ({
  Img: []
});

const actions = {
  showImg(ctx, payload) {
    const url = window.URL.createObjectURL(payload);
    const saveimg = url;
    console.log(saveimg);
    ctx.commit("showImg", saveimg);
  }
};
const mutations = {
  showImg(state, saveimg) {
    state.Img.push(saveimg);
  }
};

const getters = {
  set(state) {
    return state.Img;
  }
};

export { state, actions, mutations, getters };