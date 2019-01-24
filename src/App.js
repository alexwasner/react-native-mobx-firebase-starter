import { Navigation } from 'react-native-navigation';
import Theme from './styles/theme'
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated'];

export default class App {
  constructor() {
    Navigation.events().registerAppLaunchedListener(async () => {
      Navigation.setDefaultOptions({
        topBar: {
          backButton: {
            color: Theme.linkColor,
          },
        }
      });
      Navigation.setRoot({
        root: {
          stack: {
            id: 'HOME',
            children: [
              {
                component: {
                  name: 'App.Home',
                }
              }
            ]
          }
        }
      });
    });
  }
}


