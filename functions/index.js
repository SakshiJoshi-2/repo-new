
<<<<<<< HEAD
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.customeClaims = functions.https.onCall(async (data, ctx) => {
  try {
    let sett = await admin.auth().setCustomUserClaims(data.uid, data.role)
    sett = "Role Assinged"
    // return 
    console.log(sett)
  } catch (err) {
    console.log(err)
  }

});
=======
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

>>>>>>> 1a70ced1a3cc58f4fd962a79a2a9ffa7b7e377ae
