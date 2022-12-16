import { Routes, Route } from 'react-router-dom'
import { webRoutes } from '../../utils/statics/routes'

import styles from './layout.module.scss'

function Layout() {
  return (
    <div className={styles['layout']}>
      <Routes>
        {webRoutes.map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </div>
  )
}

export default Layout
