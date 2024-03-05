import React, { useState } from "react";

const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    alert('Email successfully sent');
    
  };

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What is your name?</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">What is your email address?</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E.g. name@website.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Your message</label>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "15px",
          }}
        >
          <button className="submit" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
