const functions = require('firebase-functions');
const admin = require('./admin');

module.exports = functions.auth.user().onCreate((user) => {
  var email = user.email;
  return admin.database().ref('users/' + user.uid).update({
    email: email && email.toLowerCase ? email.toLowerCase() : email,
    uid: user.uid,
    createdAt: new Date().getTime()
  });
});