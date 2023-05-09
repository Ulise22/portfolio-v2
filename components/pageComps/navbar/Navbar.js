import React, { useState, useContext } from 'react'
import spain from './../../images/lang-images/spain.png'
import uk from './../../images/lang-images/uk.jpg'
import styles from './Navbar.module.css'
import Image from 'next/image'
import { langContext } from '../../context/langContext'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const idioma = useContext(langContext)

  const toSpanish = () => idioma.changeLang('es-ES')

  const toEnglish = () => idioma.changeLang('en-UK')

  return (
    <div className={styles.navbar}>

      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <h1 className={styles.navbar__logo__um}>UM</h1>
        </div>

        <div className={styles.navbar__icon} onClick={() => setMenu(!menu)}>
          <i className={menu ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'} />
        </div>

        <ul className={menu ? `${styles.navbar__menu} ${styles.active}` : `${styles.navbar__menu}`}>
          <li className={styles.navbar__menu__item}>
            <a href='/' className={styles.navbar__menu__link}>
              <Link activeClass='active' to='home' spy smooth duration={500}>
                <FormattedMessage
                  id='nav.home'
                  defaultMessage='Home'
                />
              </Link>
            </a>
          </li>
          <li className={styles.navbar__menu__item}>
            <a href='/' className={styles.navbar__menu__link}>
              <Link activeClass='active' to='portfolio' spy smooth duration={500}>
                <FormattedMessage
                  id='nav.port'
                  defaultMessage='Portfolio'
                />
              </Link>
            </a>
          </li>
          <li className={styles.navbar__menu__item}>
            <a href='/' className={styles.navbar__menu__link}>
              <Link activeClass='active' to='contact' spy smooth duration={500}>
                <FormattedMessage
                  id='nav.contact'
                  defaultMessage='Contact'
                />
              </Link>
            </a>
          </li>
          <li className={styles.navbar__menu__item} onClick={toSpanish}>
            <Image src={spain} alt='Spain' className={styles.lang__flag} />
          </li>
          <li className={styles.navbar__menu__item} onClick={toEnglish}>
            <Image src={uk} alt='United Kingdom' className={styles.lang__flag} />
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar
