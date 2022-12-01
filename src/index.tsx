import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import './utils/translate/i18n'
import Layout from './components/layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading ... </div>}>
      <Layout />
    </Suspense>
  </StrictMode>
)
