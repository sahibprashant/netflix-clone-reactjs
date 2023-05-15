import React from 'react'
import styles from './Main.module.css'
import data from '../../../data/data'
import RegisterEmail from '../../../common/register-email/RegisterEmail'

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.titleText}>{data.home_title}</p>
        <p className={styles.descText}>{data.home_descText}</p>
      </div>
      <RegisterEmail />
    </div>
  )
}


export default Main;