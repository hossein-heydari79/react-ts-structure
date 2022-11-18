import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Layout from './components/layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
)
