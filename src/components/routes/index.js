import React from 'react';
import { Navigation } from 'react-native-navigation';
import Home from './HomeView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import stores from '../../stores';
import Provider from '../../utils/Provider'
import { observer } from 'mobx-react'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('App.Home', () => sceneCreator(Home, stores)),
  Navigation.registerComponent('App.Login', () => sceneCreator(LoginView, stores)),
  Navigation.registerComponent('App.Register', () => sceneCreator(RegisterView, stores))
}
  

function sceneCreator(sceneComp, store) {
  @observer class SceneWrapper extends React.Component {
    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {}
    }

    render() {
      return (
        <Provider store={store}>
          {React.createElement(sceneComp, this.props)}
        </Provider>
      )
    }
  }
  return SceneWrapper
}
