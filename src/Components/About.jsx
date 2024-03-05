import React from "react";
import Project from "./Project";
import Images from "../utils/constants";
import Footerb from "./Footerb";

const About = () => {
  return (
    <div className="about-page" style={{maxWidth: "100%", overflow: "hidden"}}>
    <div
      style={{
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection:"column",
      }}
    >
      <div
        className="head-div"
      >
        <h1
          className="heading-hello"
        >
          Hello
        </h1>
        
        <img src={Images.Profile2} alt="profile" className="pimg" />
        
      </div>

      <div style={{display: "flex", margin: "50px"}}>
        <div className="hidep"></div>
        <p className="para-about">
          My name is Semih, and I'm a digital designer from the Netherlands. I
          am currently at IKEA working in the design system team as a Senior
          Designer. <br />
          <br /> Over the years, I've transitioned from being a generalist as a
          product designer to being a specialist as a design system designer. By
          designing accessible design systems, I help product designers create
          inclusive and WCAG compliant experiences.
          <br />
          <br /> In my spare time, I write about design and help other designers
          improve their skills by sharing UI & UX related insights. Besides
          that, I enjoy some deep sci-fi movies (Interstellar is my all-time
          favorite), good music, and some quality time with my family.
        </p>
        <div className="hidep"></div>
      </div>
      <div className="main-exp">
        <div>
          <h2 className="exp-head">Experience</h2>
        </div>
        <div>
          <div className="experience">
          <p className="company-head">WIPRO <span>Project Engineer</span></p>
          <p className="exp-body"></p>
          <p className="expyears">2021 - 2022</p>
          </div>
          <div className="experience">
          <p className="company-head">RUBODEX HERBAL PRIVATE LIMITED <span>Web Developer</span></p>
          <p className="exp-body"></p>
          <p className="expyears">2020 - 2020</p>
          </div>
          <div className="experience">
          <p className="company-head">UNIVERSITY OF CALGARY <span>Teaching Assistant</span></p>
          <p className="exp-body"></p>
          <p className="expyears">2024 - Present</p>
          </div>
          <div className="experience">
          <p className="company-head">UCalgary Blockchain Society <span>Developer</span></p>
          <p className="exp-body"></p>
          <p className="expyears">2024-Present</p>
          </div>
          </div> 
        </div>
    </div>
    <Footerb/>
    </div>
  );
};

export default About;
