import React, { useState } from 'react';

const Contact = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onFormSubmit = event => {
    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
      }),
    })
      .then(() =>
        alert(
          `Thanks for your message, ${name}. I'll be in touch shortly. Mike`
        )
      )
      .catch(error => alert(error));

    event.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-section">
      <div className="main-grid">
        <div className="form-container">
          <form onSubmit={onFormSubmit}>
            <label>name</label>
            <input
              name="name"
              type="text"
              placeholder="Client/Employee name..."
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label>email</label>
            <input
              name="email"
              type="email"
              placeholder="Contact email..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label>message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="header-container">
          <div className="subheader">
            <p>Get in touch</p>
          </div>
          <div className="svg"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
