import React, { useState } from 'react'

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function handelMessage(e) {
        console.log("Heloo MotherFuckers!!");
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
                    setFirstName(e.target.value)
                }}/>

            <label htmlFor='firsName'>message</label>
            <textarea 
                type="text"
                id="message"
                placeholder="Enter your message.."
                onChange ={(e) => {
                    setFirstName(e.target.value)
                }}/>

            <input type="submit" />
        </form>
    </div>
  )
}
