import styles from './layout.module.scss'

function Layout() {
  return (
    <div
      className='d-flex'
      style={{
        width: '300px',
        height: '300px',
      }}
    >
      <p className={styles['name']}>hossein</p>
    </div>
  )
}

export default Layout
