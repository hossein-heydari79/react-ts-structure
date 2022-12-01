import { useTranslation } from 'react-i18next'

import styles from './layout.module.scss'

function Layout() {
  const { t, i18n } = useTranslation()

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '300px', width: '300px' }}
    >
      <p className={styles['name']}>{t('name')}</p>
      <button onClick={() => i18n.changeLanguage('en')}>
        change to english
      </button>
      <button onClick={() => i18n.changeLanguage('fa')}>
        change to persain
      </button>
    </div>
  )
}

export default Layout
