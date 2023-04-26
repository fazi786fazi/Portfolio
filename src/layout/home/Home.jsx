import React from 'react'
import Footer from '../../components/Container/Footer/Footer'
import Header from '../../components/Container/Header/Header'
import HomeContents from '../../components/HomeContents/HomeContents'
import "../home/home.scss"

const Home = () => {
  return (
    <div className='home-layout'>
       <div className='header'>
       <Header/>
       </div>
       <div className='home-contents'>
       <HomeContents/>
       </div>
      
        <Footer/>

    </div>
  )
}

export default Home
