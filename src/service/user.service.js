import firebase from 'react-native-firebase'

export default {
  createUserWithEmailAndPassword: (username, password) => firebase.auth().createUserWithEmailAndPassword(username, password),
  signInWithEmailAndPassword: (username, password) => firebase.auth().signInWithEmailAndPassword(username, password)
}