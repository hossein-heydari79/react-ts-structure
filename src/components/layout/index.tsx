import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../../libs/redux/slices/counter'

import type { RootState } from '../../libs/redux/store'
import styles from './layout.module.scss'

function Layout() {
  const dispatch = useDispatch()
  const { value } = useSelector((state: RootState) => state.count)

  return (
    <div className={styles['wrapper']}>
      <button onClick={() => dispatch(incrementByAmount(20))}>{value}</button>
    </div>
  )
}

export default Layout
