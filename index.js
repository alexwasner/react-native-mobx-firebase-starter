import App from './src/App'
import { registerScreens } from './src/components/routes'

if (window.__FETCH_SUPPORT__) {
  window.__FETCH_SUPPORT__.blob = false
}

registerScreens()

export default new App()