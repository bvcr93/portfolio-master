import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context';
import { useContext } from 'react';


const Contact = () => {
const formRef = useRef()
    const [done, setDone]= useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode


const handleSubmit = (e)=> {
  e.preventDefault()
  emailjs.sendForm('service_trb8ai8', 'template_wvurj2t', formRef.current, 'bkAKpufhHesVYT9dY')
  .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });

}

  return (
    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Contact me</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src ="https://static.vecteezy.com/system/resources/previews/003/720/498/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
            alt="" className="c-icon" />
            +385 914200355
          </div>
          <div className="c-info-item">
            <img className="c-icon" src="https://media.istockphoto.com/vectors/email-icon-simple-vector-illustration-blue-gradation-color-vector-id875070700?k=20&m=875070700&s=170667a&w=0&h=IXLlk-MUF6iW1l7-iAh7-KhSr6M6n2lvfa2oZQTSGqM=" alt="" />
            darelbavcar1@gmail.com
          </div>
          <div className="c-info-item">
            <img className="c-icon" src="https://cdn-icons-png.flaticon.com/512/4781/4781517.png" alt="" />
            Omišaljska ulica 19a, Zagreb
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <b>Whats your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref = {formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
          <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Subject" name="user_subject" />
          <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Email" name="user_email" />
          <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && "Thank you..."}
         
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact