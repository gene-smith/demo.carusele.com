import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Description from "./description";
import Midsection from "./midsection";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Description />
    <Midsection />
    <Footer />
  </div>
);

export default Layout;
