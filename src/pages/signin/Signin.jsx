import React, { useState } from 'react'
import Background from '../../ui/background/Background';
import Navbar from '../home/nav/Navbar';
import Footer from '../../common/footer/Footer';
import styles from './Signin.module.css'
import InputField from '../../ui/cred-input-field/InputField';
import ButtonCard from '../../ui/button-card/ButtonCard';
import data from '../../data/data';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Background />
      <Navbar showMenu={false} />
      <div className={styles.container}>
        <div className={styles.signinElements}>
          <p>Sign In</p>
          <InputField
            className={styles.InputField}
            label="Email address"
            type="email"
            value={email}
            handleChange={(val) => {
              setEmail(val)
            }} />
          <InputField
            className={styles.InputField}
            label="Password"
            type="password"
            value={password}
            handleChange={(val) => {
              setPassword(val)
            }} />
          <ButtonCard className={styles.signinButton}>Sign In</ButtonCard>
          <div className={styles.captchaText}>
            <span><input type = "checkbox"/>Remember Me</span>
            <p>{data.captchaText}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin;