
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