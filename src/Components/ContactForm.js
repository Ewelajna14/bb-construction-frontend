import './ContactForm.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_axyll2n', 'template_liies63', form.current, 'aaDbabbbyUyp82JW8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Us</h2>
         <div className="form-group">
              <label><i class="fa-solid fa-user-pen"></i>Name</label>
              <input type="text" name="user_name" />
              </div>
               <div className="form-group">
              <label><i class="fa-solid fa-envelope"></i>Email</label>
              <input type="email" name="user_email" />
              </div>
               <div className="form-group">
              <label><i class="fa-solid fa-message"></i>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
              </div>
            </form> 
        </div>
   
    )
}

export default ContactForm



/*
<div className='contact-form'>
<form action='/' method='GET'>
<h2>Contact Us</h2>
    <div className="form-group">
        <label for="client_name"><i class="fa-solid fa-user-pen"></i>Your Name</label>
        <input type="text" name="client_name"></input> 
     </div>
     <div className="form-group">
        <label for="client_email"><i class="fa-solid fa-envelope"></i>Your email</label>
        <input type="email" name="client_email"></input>
     </div>
     <div className="form-group">
        <label for="message"><i class="fa-solid fa-message"></i>Message</label>
        <textarea name="message" rows="6"></textarea>
     </div>
     <button type="submit">SEND</button>
</form>

</div>*/