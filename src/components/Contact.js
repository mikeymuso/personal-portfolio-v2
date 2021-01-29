import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="main-grid">
        <div className="form-container">
          <form>
            <label>name</label>
            <input
              name="name"
              type="text"
              placeholder="Client/Employer name..."
            />
            <label>email</label>
            <input name="email" type="email" placeholder="Contact email..." />
            <label>message</label>
            <textarea name="message" placeholder="Your message..."></textarea>
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
