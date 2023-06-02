import React, { useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      alert('Please fill in all the fields.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${fullName}, thank you for your message!`);
    setFullName('');
    setEmail('');
    setMessage('');
    setEmailError('');
  };

  return (
    <div id="form-content">
      <h1>Contact</h1>
      <form className="form">
        <h3>Name:</h3>
        <input
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <h3>Email address:</h3>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        <h3>Message:</h3>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
