import React from "react";
import Project from "./Project";
import Images from "../utils/constants";
import Footer from "./Footer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Work = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
          marginTop: "200px",
        }}
      >
        <h1>Project Gallery</h1>
      </div>
      <div>
        <Project
          link = "https://shivam10lm.github.io/carGame/"
          head1="Race to"
          head2="Victory"
          head3="Car Racing Game"
          imageSource={Images.App2}
          bgcolor={"#FFF5D3"}
          clr={"#2d2d0d"}
          elm = {"elm2"}
        />

        <Project
          link = "https://csb-851kug.netlify.app/"
          head1="Your Tube,"
          head2="Your World"
          head3="YouTube Clone"
          imageSource={Images.App1}
          bgcolor={"#FFDBE1"}
          clr={"#770012"}
          elm = {"elm3"}
        />

        <Project
          link = "https://csb-3rshpn.netlify.app/"
          head1="Forecast"
          head2="Your Day"
          head3="Weather Application"
          imageSource={Images.App3}
          bgcolor={"#DBF8F4"}
          clr={"#1c5049"}
          elm = {"elm4"}
        />
      </div>
      <div style={{display: "flex", margin: "80px 40px", justifyContent:"center", alignItems: "center"}}>
        <a href="https://github.com/shivam10lm" target="_blank" className="all-pro"><p style={{paddingRight: "10px"}}> Show all projects</p> <ArrowForwardIcon/></a>
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Work;
