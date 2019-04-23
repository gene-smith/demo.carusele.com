import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Description from "./description";
import Portfolio from "./portfolio";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Description />
    <Portfolio />
    <Footer />
  </div>
);

export default Layout;
