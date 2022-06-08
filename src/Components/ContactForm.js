import './ContactForm.css'

function ContactForm(){
    return(
           <div className='contact-form'>
            <form>
                <h2>Contact Us</h2>
                <div className="form-group">
                    <input type="text" name="client_name"></input>
                    <label for="client_name"><i class="fa-solid fa-user-pen"></i>Your Name</label>
                 </div>
                 <div className="form-group">
                    <input type="email" name="client_email"></input>
                    <label for="client_email"><i class="fa-solid fa-envelope"></i>Your email</label>
                 </div>
                 <div className="form-group">
                    <textarea name="message" rows="6"></textarea>
                    <label for="message"><i class="fa-solid fa-message"></i>Message</label>
                 </div>
                 <button type="submit">Send</button>
            </form>
            </div>
    )
}

export default ContactForm