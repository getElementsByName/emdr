  
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppRoot } from './AppRoot'

function initializeReactApp() {
  ReactDOM.render(<AppRoot />, document.getElementById('react-app-root'))
}

export { initializeReactApp }