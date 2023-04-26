import React from 'react'
import { MdOutlinePhoneInTalk,MdEmail } from "react-icons/md";
import { BsWhatsapp,BsTwitter } from "react-icons/bs";
import Button from '../../Common/ButtonCompunent/Button';
import Input from '../../Common/InputComponent/Input';
import './contactDetails.scss'

const ContactDetails = () => {
  // const styles = {
  //   width: "130%"
  // };
  
  return (
    <div className='contact-wrapper'>
        <div className='contact-deatils'>
            <div>
            <h3>Your App Ideas Ready For Launch </h3> <MdOutlinePhoneInTalk size={"40px"}/>
            </div>
     
        <h1>+1-443-545-7399</h1>
        <p>Monday to Saturday from 9am to 7pm.</p>
        <p>WY local time. International call.</p>
        <div>
           <BsWhatsapp size={"20px"} className="logo"/>
           <h3>+92-301-84-84-652 </h3>
            </div>
            <div>
           <BsTwitter size={"20px"} className="logo"/>
           <h3>faizanakram</h3>
            </div>
            <div>
           <MdEmail size={"20px"} className="logo"/>
           <h3>faizanakram115@gmail.com </h3>
            </div>
        <Button title={"Contacts Us"} link={"https://www.youtube.com/"}/>
        </div>
        <div className='form'>
        <div className='contact-from'>
          <div className='left'>
          <Input type={"text"} placeholder={"Enter Your Name"} title={"Name"} />
            <Input type={"text"} placeholder={"Enter Your Name"} title={"Name"}  />
          </div>
          <div className='right'>
          <Input type={"text"} placeholder={"Enter Your Name"} title={"Name"}  />
            <Input type={"text"} placeholder={"Enter Your Name"} title={"Name"}  />
          </div>
       
        </div>
        <textarea autofocus required placeholder="type your message" maxlength="180"  cols="50" rows="6" wrap="hard">
 </textarea>
<div>
<input type="checkbox" name="" id="" />
  I Agree Terms & Coditions
</div>
 
  <input type="file"  />
 <Button title={"Submit"}/>
        </div>
      
     
    </div>
  )
}

export default ContactDetails
