import { observable, action, computed } from 'mobx';
import {
  Alert
} from 'react-native'
import LocalStorage from '../utils/LocalStorage';
import Theme from '../styles/theme.js'
import USERSERVICE from '../service/user.service'
import autobind from 'autobind-decorator'

@autobind
class UserStore {
  @observable _userId = '';
  @observable _user = {};
  @observable loggedIn = false;

  constructor() {
  }

  @action
  register(username, password) {
    return USERSERVICE.createUserWithEmailAndPassword(username, password).then((resp)=>{
      if (resp.user) {
        this.user = resp.user
      }
    }).catch((e) => {
      Alert.alert(e.message)
    })
  }

  @action
  login(username, password) {
    return USERSERVICE.signInWithEmailAndPassword(username, password).then((resp) => {
      if (resp.user) {
        this.user = resp.user
      }
    }).catch((e) => {
      Alert.alert(e.message)
    })
  }

  @computed
  get userId() {
    return this._userId === '' ? false : this._userId
  }

  @computed
  get user() {
    return this._user || {}
  }
  set user(user) {
    this._user = user
  }
}

export default new UserStore()