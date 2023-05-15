import React, { useEffect } from 'react'
import styles from './Footer.module.css'
import LanguageSelect from '../../ui/language-select/LanguageSelect'

const Footer = () => {

  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <span>Questions?<a onClick={() => {window.scrollTo({top:true})}}>Call 0911223134</a></span>
        </div>
        <div className={styles.footerItems}>
          <a>FAQ</a>
          <a >Media Center</a>
          <a>Redeem Gift Cards</a>
          <a>Terms of Use</a>
          <a>Corporate Information</a>
          <a>Legal Notices</a>
          <a>Help Center</a>
          <a>Investor Relations</a>
          <a>Buy Gift Cards</a>
          <a>Privacy</a>
          <a>Contact Us</a>
          <a>Only on Netflix</a>
          <a>Account</a>
          <a>Jobs</a>
          <a>Ways to Watch</a>
          <a>Cookie Preferences</a>
          <a>Speed Test</a>
        </div>
        <LanguageSelect className={styles.langSelect} />
        <a>Netflix Clone React.JS</a>
      </div>
    </>
  )
}

export default Footer;