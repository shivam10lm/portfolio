import React from "react";
import Footer from "./Footer";
import Form from "./Form";

const Contact = () => {
  return (
    <div style={{}}>
      <div
        className="section-header"
      >
        <h1 style={{ letterSpacing: "1px" }}>Get in Touch</h1>
      </div>
      <div
        className="section-form"
      >
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
