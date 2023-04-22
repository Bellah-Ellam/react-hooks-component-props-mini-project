import React from "react";

function About(props) {
  const { aboutImage = "https://via.placeholder.com/215", aboutText } = props;

  return (
    <aside>
      <img src={aboutImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;