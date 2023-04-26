import React from 'react'
import Button from '../../Common/ButtonCompunent/Button'
import "./hometopview.scss"
const HomeTopView = () => {
  return (
    <>
    <div className='home-top-view'>
        <div className='home-top-view-contents'>
        <h1>Accelerating Your Software Development</h1>
      <h4>We solve business problems with technology</h4>
     <Button title={"Get Started"} link={"https://technowis.co/"}/>
        </div>
     
    </div>
    </>
  )
}

export default HomeTopView
