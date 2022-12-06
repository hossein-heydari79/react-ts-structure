import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './libs/redux/store'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout'
import './libs/i18next'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </StrictMode>
)
