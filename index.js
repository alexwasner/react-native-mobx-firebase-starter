import App from './src/App';

if (window.__FETCH_SUPPORT__) {
  window.__FETCH_SUPPORT__.blob = false
}

import {registerScreens} from './src/components/routes';
registerScreens();

const app = new App();