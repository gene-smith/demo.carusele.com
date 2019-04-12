import React from "react";
import Video from "./video";
import "./style.scss";
import "bulma-helpers/css/bulma-helpers.min.css";

const Description = () => (
  <section className="section is-paddingless">
    <div className="container is-fluid has-text-centered has-padding-top-10">
      <h1 className="title is-size-1 has-text-weight-bold">Name of Campaign</h1>
    </div>

    <div className="container is-fluid has-padding-top-10">
      <p>
        Laboris magna reprehenderit cupidatat laborum esse incididunt aute duis
        quis. Anim sunt deserunt non sint proident tempor amet aliquip.
        Voluptate dolor aute adipisicing nisi. Aliquip laborum est irure irure
        laborum veniam aliqua amet fugiat pariatur anim occaecat et. Eiusmod est
        ad est aliqua pariatur amet ipsum anim eiusmod sit. Velit id duis sunt
        adipisicing sit et est pariatur.
      </p>
    </div>

    <Video />

    <div className="container is-fluid has-padding-top-10">
      <p>
        Commodo ut adipisicing velit sunt excepteur anim. Id aliquip mollit nisi
        eiusmod consectetur sint. Elit fugiat exercitation irure laborum nostrud
        veniam voluptate incididunt nostrud commodo proident.
      </p>
    </div>
  </section>
);

export default Description;
