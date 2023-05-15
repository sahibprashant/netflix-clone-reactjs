import React, { useState } from 'react'
import styles from './RegisterEmail.module.css'
import data from '../../data/data';
import ButtonCard from '../../ui/button-card/ButtonCard';
import InputField from '../../ui/cred-input-field/InputField';

const RegisterEmail = (props) => {
  
  const [email, setEmail] = useState('');

  return (
    <div className={`${styles.container}`}>
      <p className={styles.descText}>{data.email_regText}</p>
      <div className={styles.inputContainer}>
        <InputField
          type = "email"
          label = "Email address"
          className = {styles.emailInput}
          value = {email}
          handleChange = {(val) => {
            setEmail(val);
          }}
        />
        <ButtonCard className={styles.getStarted}>
          <span>Get Started</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Hawkins-Icon Hawkins-Icon-Standard"
            data-name="ChevronRight"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
              fill="currentColor"
            ></path>
          </svg>
        </ButtonCard>
      </div>
    </div>
  )
}

export default RegisterEmail;