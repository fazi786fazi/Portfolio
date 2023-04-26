import React from 'react'
import LanguageCountup from './countup/LanguageCountup'
import GameArea from './game/game'
import HomeServices from './homeServices/HomeServices'
import HomeTopView from './homeTopView/HomeTopView'
import ContactDetails from './contactsdetails/ContactDetails'
import InfoDetails from './infomation/InfoDetails'
import LogoSlick from './languangeLogo/LogoSlick'
import ServicesCarousel from './servicesCarousel/ServicesCarousel'

const HomeContents = () => {
  return (

    <>
    <div>
    <HomeTopView/>
    <HomeServices/>
    <ServicesCarousel/>
    <LogoSlick/>
    <LanguageCountup/>
    <GameArea/>
    <InfoDetails/>
    <ContactDetails/>
    </div>
     
    </>
  )
}

export default HomeContents
