import React, { useState } from 'react'

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function handelMessage(e) {
        e.preventDefault();
        console.log({firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message});
        fetch('/user/contact',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: firstName,
                                    lastName: lastName,
                                    email: email,
                                    phone: phone,
                                    message: message})
        }).then(console.log("Heloo MotherFuckers!!"))
    }

  return (
    <div>
        <form onSubmit={handelMessage}>
            
            <h1 className='bold'>
                Contact Me
            </h1>

            <p>
                If you want to get in touch, U can contact me on :
                Email: Nadeem.jazmawe@gmail.com
                Phone: 0547876073

                Or simply you can fill out the form and i will contact as soon as possible
            </p>

            <label htmlFor='firsName'>First Name</label>
            <input 
                type="text"
                id="firstName"
                placeholder="First Name"
                required={true}
                onChange ={(e) => {
                    setFirstName(e.target.value)
                }}/>
            
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                id="lastName"
                placeholder="Last Name"
                required={true}
                onChange={(e) => {
                    setLastName(e.target.value)
                }}/>

            <label htmlFor='email'>Email</label>
            <input 
                type="text"
                id="email"
                placeholder="Email"
                required={true}
                onChange ={(e) => {
                    setEmail(e.target.value)
                }}/>

            <label htmlFor='phone'>Phone Number</label>
            <input 
                type="text"
                id="phone"
                placeholder="Phone Number"
                onChange ={(e) => {
                    setPhone(e.target.value)
                }}/>

            <label htmlFor='firsName'>message</label>
            <textarea 
                type="text"
                id="message"
                placeholder="Enter your message.."
                onChange ={(e) => {
                    setMessage(e.target.value)
                }}/>

            <input type="submit" value="Send Message"/>
        </form>
    </div>
  )
}
