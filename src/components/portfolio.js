import React from "react";
import { StaticQuery, graphql } from "gatsby"
import "./style.scss";
import "bulma-helpers/css/bulma-helpers.min.css";

export default () => (
  <StaticQuery
    query={graphql`
      {
        allAirtable(
          filter: {data: {Campaign: {elemMatch: {data: {Campaign_Name: {eq: "Infinitive at Walgreens"}}}}}}
          ) {
          nodes {
            id
            data {
              Entry_Name
              Campaign {
                data {
                  Campaign_Name
                }
              }
              Image {
                thumbnails {
                  full {
                    url
                  }
                }
              }
              URL
              Post_Type {
                data {
                  Post_Type_Name
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="columns is-multiline">
        {data.allAirtable.nodes.map(node => (
          <div className="column is-one-third">
            <div className="card" key={node.id}>
              <div className="card-image">
                <figure className="image">
                  <img
                    src={node.data.Image[0].thumbnails.full.url}
                    alt={node.data.Campaign[0].data.Campaign_Name}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media-content">
                  <p className="title is-4">{node.data.Entry_Name}</p>
                  <p className="subtitle is-6">{node.data.Campaign[0].data.Campaign_Name}</p>
                  <p>
                    <a className="button is-primary" href={node.data.URL} target="_blank">Button</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))};
      }
      </div>
    )}
  />
)