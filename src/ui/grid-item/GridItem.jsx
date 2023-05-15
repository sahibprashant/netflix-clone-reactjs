import React from 'react'
import styles from './GridItem.module.css'

const GridItem = (props) => {
  return (
    <div className={`${styles.gridItemContainer} ${props.className}`}>
      <div className={styles.gridImg}>
        <img src={props.img} />
      </div>
      <div className={styles.gridContent}>
        <p className={styles.gridTitle}>{props.title}</p>
        <p className={styles.gridDesc}>{props.desc}</p>
      </div>
    </div>
  )
}

export default GridItem;