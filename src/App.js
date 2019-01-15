import { Navigation } from 'react-native-navigation';
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated'];

export default class App {
  constructor() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            id: 'HOME',
            children: [
              {
                component: {
                  name: 'App.Home'
                }
              }
            ]
          }
        }
      });
    });
  }
}


