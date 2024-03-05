import React from "react";

const Navbarm = () => {
  return (
    <div className="navbar">
      <div
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "30px 50px 50px 70px" }}>
          {/*<img src={Images.Logo} height={70} width={250} />*/}
          <a
            href="/"
            style={{
              fontSize: "30px",
              letterSpacing: "0px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Shivam Gupta
          </a>
        </div>
        <div
          style={{
            margin: "30px 90px 50px 50px",
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" className="nav-el">
            Work
          </a>
          <a href="/" className="nav-el">
            About
          </a>
          <a href="/" className="nav-el">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbarm;
