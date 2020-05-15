import { initializeReactApp } from './initializeReactApp'
import { registerServiceWorker } from './registerServiceWorker'

 // global scope
initializeReactApp()

window.addEventListener("load", () => {
  registerServiceWorker()
})
