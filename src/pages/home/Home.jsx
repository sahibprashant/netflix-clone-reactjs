import React from 'react'
import styles from './Home.module.css'
import Background from '../../ui/background/Background';
import Navbar from './nav/Navbar';
import Main from './main/Main';
import Grid from './grid/Grid';
import Faq from './faq/Faq';
import Footer from '../../common/footer/Footer';

const Home = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Main />
      <Grid />
      <Faq />
      <Footer />
    </>
  )
}

export default Home;