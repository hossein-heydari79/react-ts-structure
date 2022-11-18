import styles from './layout.module.scss'

function Layout() {
  return (
    <div
      className='d-flex'
      style={{
        width: '300px',
        height: '3000px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p className='p-static' style={{ top: '10px' }}>
        hossein
      </p>
    </div>
  )
}

export default Layout
