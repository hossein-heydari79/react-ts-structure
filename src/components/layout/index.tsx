import styles from './layout.module.scss'

function Layout() {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        border: '1px solid black',
        display: 'flex',
      }}
    >
      <p className='ml-auto' style={{ width: 'fit-content', height: '50px' }}>
        hossein
      </p>
    </div>
  )
}

export default Layout
