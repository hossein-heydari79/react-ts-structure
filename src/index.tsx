import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './libs/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout'
import './libs/i18next'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
