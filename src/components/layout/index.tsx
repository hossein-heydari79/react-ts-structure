import styles from './layout.module.scss'

function Layout() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '300px', width: '300px' }}
    >
      <p className={styles['name']}>hossein</p>
    </div>
  )
}

export default Layout
