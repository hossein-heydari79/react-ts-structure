import { Routes, Route } from 'react-router-dom'
import { webRoutes } from '../../utils/statics/routes'

import styles from './layout.module.scss'

function Layout() {
  return (
    <div className={styles['layout']}>
      <h1>header</h1>
      <Routes>
        {webRoutes.map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
      <h1>footer</h1>
    </div>
  )
}

export default Layout
