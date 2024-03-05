import React from "react";
import Project from "./Project";
import Images from "../utils/constants";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="main">

      <div className="heading">
        <h1>Designing the Web, Pixel by Pixel</h1>
      </div>
      <Project
        link="/About"
        head1="Nice to"
        head2="meet you"
        head3="About me"
        imageSource={Images.Profile}
        bgcolor={"#d2e0e9"}
        clr={"#000000"}
        elm={"elm1"}
      />
      <div className="heading2">
        <h3
          style={{
            maxWidth: "930px",
            marginBottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "55px",

            
          }}
        >
          Empowering full stack development for inclusive digital experiences through accessible designs.
        </h3>
      </div>
      <Project
        link = "https://shivam10lm.github.io/carGame/"
        head1="Race to"
        head2="Victory"
        head3="Car Racing Game"
        imageSource={Images.App2}
        bgcolor={"#FFF5D3"}
        clr={"#2d2d0d"}
        elm={"elm2"}
      />

      <Project
        link = "https://csb-851kug.netlify.app/"
        head1="Your Tube,"
        head2="Your World"
        head3="YouTube Clone"
        imageSource={Images.App1}
        bgcolor={"#FFDBE1"}
        clr={"#770012"}
        elm={"elm3"}
      />

      <Project
        link = "https://csb-3rshpn.netlify.app/"
        head1="Forecast"
        head2="Your Day"
        head3="Weather Application"
        imageSource={Images.App3}
        bgcolor={"#DBF8F4"}
        clr={"#1c5049"}
        elm={"elm4"}
      />
    <Footer/>
      
    </div>
  );
};

export default Home;
