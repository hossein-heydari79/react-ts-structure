import { useGetUsersQuery } from '../../libs/redux/services/home'

import styles from './layout.module.scss'

function Layout() {
  const { data, isLoading } = useGetUsersQuery(null)

  return (
    <div className={styles['wrapper']}>
      {!isLoading && <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default Layout
