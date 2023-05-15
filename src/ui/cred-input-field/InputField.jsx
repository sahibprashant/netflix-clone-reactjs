import { useState } from 'react'
import styles from './InputField.module.css';

const InputField = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <label className={`${styles.inputLabel} ${props.value ? styles.filled : ''}`}>{props.label}</label>
      <input
        className={`${styles.input}`}
        type={props.type}
        value={props.value}
        onChange={(e) => {
          props.handleChange(e.target.value);
        }}
        autoComplete='email'/>
    </div>
  )
}

export default InputField;