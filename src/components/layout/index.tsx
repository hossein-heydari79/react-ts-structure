import { useDispatch, useSelector } from 'react-redux'
import {
  increasePrice,
  incrementByAmount,
} from '../../libs/redux/slices/counter'

import type { RootState } from '../../libs/redux/store'
import styles from './layout.module.scss'

function Layout() {
  const dispatch = useDispatch()
  const { value, price } = useSelector((state: RootState) => state.count)

  return (
    <div className={styles['wrapper']}>
      <button onClick={() => dispatch(incrementByAmount(20))}>{value}</button>

      <button onClick={() => dispatch(increasePrice(20))}>{price}</button>
    </div>
  )
}

export default Layout
