import { Navigate } from 'react-router-dom'
import HomePage from '../../../containers/home'

import type { WebRoutesType } from './interface'

export const webRoutes: WebRoutesType = [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <Navigate to='/' /> },
]
