import React from 'react'
import styles from './Grid.module.css'
import data from '../../../data/data'
import GridItem from '../../../ui/grid-item/GridItem'

const Grid = () => {
  return (
    <div className={styles.gridContainer}>
      {
        data.girdData.map((item) => {
          return <GridItem
            key={item.id}
            img={item.image}
            title={item.title}
            desc={item.desc}
          ></GridItem>
        })
      }
    </div>
  )
}

export default Grid;