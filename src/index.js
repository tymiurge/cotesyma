import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import { store } from './store'
import './App.css'

const appStore = store()

ReactDOM.render(
  <Root store={appStore} />,
  document.getElementById('root')
)
registerServiceWorker()
