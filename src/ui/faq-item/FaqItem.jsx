import React, { useState } from 'react'
import styles from './FaqItem.module.css'

const FaqItem = (props) => {

  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setActive(!active);
  }


  return (
    <div className={`${styles.faqItemContainer} ${props.className}`}>
      <div className={`${styles.question} ${active ? styles.quesActive : ''}`} onClick={handleClick}>
        <p>{props.question}</p>
        <span className={`${styles.expand} ${active ? styles.close : ''}`}>+</span>
      </div>
      <div className={`${styles.answer} ${active ? styles.ansActive: ''}`}>
        <p dangerouslySetInnerHTML={{ __html: props.answer }}>
        </p>
      </div>
    </div>
  )
}

export default FaqItem;