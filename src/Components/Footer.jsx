import React from "react";

const Footer = () => {
  return (
    <div style={{ borderTop: "1px solid #ddd", marginTop: "100px" }}>
      <div className="footer">
        <div className="footer-left">
          <p className="footer-title">Let's connect digitally</p>
          <p className="copyright">© 2024 Shivam Gupta</p>
        </div>
        <div className="footer-right">
    
          <a href="mailto:shivam10lam@gmail.com" className="foot">
            Email
          </a>
          <a href="https://github.com/shivam10lm" target="_blank" className="foot">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shivamgupta-sg/" target="_blank" className="foot">
            LinkedIn
          </a>
          <a href="https://twitter.com/shivam10lm" target="_blank" className="foot">
            Twitter
          </a>
          
        </div>
        
      </div>
      <p className="copyright2" style={{margin: "40px"}}>© 2024 Shivam Gupta</p>
    </div>
  );
};

export default Footer;
