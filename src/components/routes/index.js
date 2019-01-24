import React from 'react';
import { Navigation } from 'react-native-navigation';
import { observer } from 'mobx-react'
import Provider from '../../utils/Provider'
import stores from '../../stores';

//Route Imports
import HomeView from './HomeView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';

export default routes = {
  'App.Home': HomeView,
  'App.Login': LoginView,
  'App.Register': RegisterView,
}

// Register all screens of the app (including internal ones)
export function registerScreens() {
  for (let r in routes) {
    Navigation.registerComponent(r, () => sceneCreator(routes[r], stores))
  }
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
