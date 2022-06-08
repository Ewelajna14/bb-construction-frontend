
function ContactForm(){
    return(
      
            <form>
                <div className="form-group">
                    <input type="text" name="client_name"></input>
                    <label for="client_name">Your Name</label>
                 </div>
                 <div className="form-group">
                    <input type="email" name="client_email"></input>
                    <label for="client_email">Your email</label>
                 </div>
                 <div className="form-group">
                    <textarea name="message" rows="6"></textarea>
                    <label for="message">Message</label>
                 </div>
            </form>
       
    )
}

export default ContactForm