import React from "react";
import "./style.scss";

import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "heroImage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="hero">
        <div className="hero-body is-paddingless is-hidden-mobile">
          <Img fluid={data.heroImage.childImageSharp.fluid} />
        </div>
      </section>
    )}
  />
);

export default Header;
