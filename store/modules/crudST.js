import { firestoreAction } from 'vuexfire'
import { db } from '~/plugins/firebaseConfig'

export const state = () => ({

})

export const actions = {
  // Read
  readData: firestoreAction(async (context, payload) => {
    try {
      return await context.bindFirestoreRef(
        payload.collection,
        db.collection(payload.collection).doc(payload.docId)
      )
    } catch (err) {
      console.log(err)
    }
  }),

  // Create
  createData: firestoreAction(({ bindFirestoreRef }, payLoad) => {
    db.collection(payLoad.collection)
      .doc(payLoad.docId)
      .set(payLoad.create, {
        merge: true
      })
    return bindFirestoreRef(
      payLoad.collection,
      db.collection(payLoad.collection)
    )
  }),
  // Update
  updateData: firestoreAction(({ bindFirestoreRef }, payLoad) => {
    db.collection(payLoad.collection)
      .doc(payLoad.docId)
      .set(payLoad.update, {
        merge: true
      })
    return bindFirestoreRef(
      payLoad.collection,
      db.collection(payLoad.collection)
    )
  }),
  //Delete
  deleteData: firestoreAction(({ bindFirestoreRef }, payLoad) => {
    if (payLoad.docId && payLoad.collection && !payLoad.delete) {
      db.collection(payLoad.collection)
        .doc(payLoad.docId)
        .delete()
        .then(res => {
          res = 'Successfully Deleted'
          alert(res)
        })
        .catch(err => console.log(err))
    } else {
      db.collection(payLoad.collection)
        .doc(payLoad.docId)
        .set(payLoad.delete, {
          merge: true
        })
    }
    return bindFirestoreRef(
      payLoad.collection,
      db.collection(payLoad.collection)
    )
  })
}
export const getters = {

}
