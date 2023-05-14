import React from 'react'
import logo from './../../images/logo.png'
import styles from './Home.module.css'
import { FormattedMessage } from 'react-intl'
import Image from 'next/image'
//  import cv from '../../../public/ulises-montenegro-resume.pdf'

const Home = () => {
  return (
    <div name='home' className={styles.home}>
      <div className={`${styles.home__container} ${styles.container}`}>
        <div className={styles.home__info}>
          <h1 className={styles.home__info__title}>Ulises Montenegro</h1>
          <h3 className={styles.home__info__subtitle}>
            <FormattedMessage
              id='home.frontend'
              defaultMessage='Frontend Developer'
            />
          </h3>
          <div className={styles.home__info__icons}>
            <a href='https://github.com/Ulise22' target='_Blank' className={styles.home__info__icons__item} rel='noreferrer'><i aria-hidden className='fab fa-github fa-3x' /> </a>
            <a href='https://www.linkedin.com/in/ulisesmontenegro/' target='_Blank' className={styles.home__info__icons__item} rel='noreferrer'><i aria-hidden className='fab fa-linkedin fa-3x' /> </a>
            <a href='mailto:ulimontenegro23@gmail.com' className={styles.home__info__icons__item}><i aria-hidden className='fas fa-envelope fa-3x' /> </a>
            <a href="./ulises-montenegro-resume.pdf" download className={styles.home__info__btn} title='cv' >CV</a>
          </div>
        </div>

        <div className={styles.home__photo}>
          <Image src={logo} alt='Ulises Montenegro' className={styles.home__photo__image} priority />
        </div>
      </div>
    </div>
  )
}

export default Home
