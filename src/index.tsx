import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout'
import './index.scss'
import './libs/i18next'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
)
