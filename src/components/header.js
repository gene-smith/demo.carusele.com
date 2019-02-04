import React from "react";

import "./style.scss";
import heroImage from "../images/heroImage.jpg";

const Header = ({ siteTitle }) => (
  <section className="hero">
    <div className="hero-body is-paddingless is-hidden-mobile">
      <img src={heroImage} alt="hero-image" />
    </div>
  </section>
);

export default Header;
