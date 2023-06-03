import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
  
    const submitForm = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/contact', { name, email, message })
        .then((response) => {
          setStatus("Email sent successfully!");
        }, (error) => {
          setStatus("Error in sending email");
        });
    }
  
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={submitForm}>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <label>Message:</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} required/>
          <button type="submit">Send</button>
        </form>
        <p>{status}</p>
      </div>
    );
  }
  
  export default Contact;
  