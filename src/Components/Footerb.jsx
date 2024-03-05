import React from "react";

const Footerb = () => {
  return (
    <div style={{ borderTop: "1px solid #ddd", marginTop: "100px" }}>
      <div className="footer" style={{backgroundColor: "#111111", color: "white"}}>
        <div className="footer-left">
          <p className="footer-title">Let's connect digitally</p>
          <p className="copyright">© 2024 Shivam Gupta</p>
        </div>
        <div className="footer-right">
        <a href="mailto:shivam10lam@gmail.com" className="footb">
            Email
          </a>
          <a href="https://github.com/shivam10lm" target="_blank" className="footb">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shivamgupta-sg/" target="_blank" className="footb">
            LinkedIn
          </a>
          <a href="https://twitter.com/shivam10lm" target="_blank" className="footb">
            Twitter
          </a>
        </div>
      </div>
      <p className="copyright2" style={{color:"white", margin: "40px"}}>© 2024 Shivam Gupta</p>
    </div>
  );
};

export default Footerb;
