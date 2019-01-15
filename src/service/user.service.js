import firebase from 'react-native-firebase'
import userStore from '../stores/UserStore'

export default {
  fetchUserSubscriptions:()=>{
    let colRef = firebase.firestore().collection('users').doc(userStore.userId).collection('subscriptions');
    
  },

  createUserWithEmailAndPassword: (username, password) => firebase.auth().createUserWithEmailAndPassword(username, password),
  signInWithEmailAndPassword: (username, password) => firebase.auth().signInWithEmailAndPassword(username, password)
}