import { Button } from "bootstrap"

export default function ContactInfo(){
    return(

        <div>
            <h3>Contact</h3>
            <form className="form">
				<label htmlFor="name-input" > Name: </label>
                <input id="name-input" name="yourName" placeholder=" Your Name"></input>
				<label htmlFor="email-input"> Email: </label>
                <input id="email-input" name="Email" placeholder=" Your Email"></input>
				<label htmlFor="message-input"> Message: </label>
                <input id="message-input" name="message" placeholder=" Your Message"></input>
                <button type='submit'>Submit</button>
			</form>
      
       
        </div>

    )
}