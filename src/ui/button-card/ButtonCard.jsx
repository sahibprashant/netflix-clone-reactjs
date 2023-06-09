import React from 'react'
import styles from './ButtonCard.module.css'

const ButtonCard = (props) => {
  return (
    <button className={`${styles.buttonCard} ${props.className}`}
      onClick={() => {props.handleClick()}}
    >
      {props.children}
    </button>
  )
}

export default ButtonCard;
