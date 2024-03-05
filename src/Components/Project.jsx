import React from "react";

const Project = ({ head1, head2, head3, imageSource, bgcolor, clr, link, bp, bs, elm }) => {
  return (
    <div>
      <div className="sec-about">
        <a
          href={link}
          target="_blank"
          className={elm}
          style={{
            backgroundImage: `url(${imageSource})`,
            backgroundColor: `${bgcolor}`,
          }}
        >
          <h2 style={{ color: `${clr}`, backgroundPosition: `${bp}`, backgroundSize: `${bs}` }}>
            {head1} <br />
            {head2}
          </h2>
          <h3 style={{ color: `${clr}` }}>{head3}</h3>
        </a>
      </div>
    </div>
  );
};

export default Project;
