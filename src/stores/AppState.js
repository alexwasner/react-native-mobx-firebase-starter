import { computed, observable, action } from 'mobx';
import { Keyboard, Platform, Dimensions } from 'react-native'
import LocalStorage from '../utils/LocalStorage'
import Theme from '../styles/theme.js'

class AppState {
  @observable root = 'after-login';

  constructor() {
    LocalStorage.getItem('authenticated').then((res) => {
      this.setRoot((res && res.isLoggedIn) ?  'after-login' : 'login')
    });
  }

	@action
  setRoot(newRoot){
    this.root = newRoot
  }
}

export default new AppState()