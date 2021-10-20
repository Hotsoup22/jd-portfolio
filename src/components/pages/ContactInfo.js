import { Button } from "bootstrap"
import { useState, useEffect } from "react"
export default function ContactInfo(){
    const [values, setValues]= useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = e =>{
        const{name,value} = e.target
       
        if(name === "yourName"){
            setValues(value)
        } else if (name ==="email"){
            setValues(value)
        }
    }
    return(

        <div>
            <h3>Contact</h3>
            <form className="form">
				<label htmlFor="name-input"  > Name: </label>
                <input 
                 id="name-input"
                 name="yourName"
                 value={values.name}
                 onChange={handleChange}
                 placeholder="Your Name"/>
				<label htmlFor="email-input"> Email: </label>
                <input 
                 id="email-input"
                 name="Email" 
                 value={values.email}
                 onChange={handleChange}
                 placeholder=" Your Email"/>
				<label htmlFor="message-input"> Message: </label>
                <input
                  id="message-input"
                  name="message" 
                  value={values.message}
                  onChange={handleChange}
                  placeholder=" Your Message"/>
                <button type='submit'>Submit</button>
			</form>
      
       
        </div>

    )
}
