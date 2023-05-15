import React from 'react'
import styles from './Faq.module.css';
import data from '../../../data/data';
import FaqItem from '../../../ui/faq-item/FaqItem'
import RegisterEmail from '../../../common/register-email/RegisterEmail';

const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <span className={styles.heading}>Frequently Asked Questions</span>
      {
        data.faqData.map((item) => {
          return <FaqItem
            key={item.id}
            question={item.ques}
            answer={item.ans}
          />
        })
      }
      <div className={styles.register}>
        <RegisterEmail />
      </div>
    </div>
  )
}


export default Faq;