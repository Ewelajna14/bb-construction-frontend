import './ContactForm.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){

    const [name, setName] = useState("")
    const [email, setEmail] =useState("")
    const [message, setMessage] = useState("")

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_KEY}`, `${process.env.REACT_APP_TEMPLATE_KEY}`, form.current, `${process.env.REACT_APP_API_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName("")
      setEmail("")
      setMessage("")
    }

    return (
        <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Us</h2>
         <div className="form-group">
              <label><i class="fa-solid fa-user-pen"></i>Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)}type="text" name="user_name" />
              </div>
               <div className="form-group">
              <label><i class="fa-solid fa-envelope"></i>Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="user_email" />
              </div>
               <div className="form-group">
              <label><i class="fa-solid fa-message"></i>Message</label>
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="6" name="message" />
              <input type="submit" value="SEND" />
              </div>
            </form> 
        </div>
   
    )
}

export default ContactForm



