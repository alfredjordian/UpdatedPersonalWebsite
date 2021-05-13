import React from "react";
import "./Portfolio.css";
import retrodraw from './pics/retrodraw.png';
import strangerthings from './pics/strangerthings.png';
import graceshopper from './pics/graceshopper.png';

function Portfolio() {
  return (
    <div>
      <h1 style={{
        display:'flex',
        justifyContent:'center',
        paddingTop:'3%',
        backgroundColor: "rgb(173, 193, 235)",
        borderTop: "double rgb(255, 187, 187)"
      }}>Projects</h1>
    <div
      style={{
        display: "flex",
        justifyContent:'center',
        backgroundColor: "rgb(173, 193, 235)"
      }}
    >
      <div class="card" style={{
          backgroundImage:`url(${strangerthings})`
           
      }}>
        <div class="card-content">
          <h2 class="card-title">Strangers Things</h2>
          <p class="card-desc">
            <br />
            App using an API to render dynamic elements; styled with Material UI{" "}
            <br />• Technologies used: Material UI, React, JSON Authentication.
          </p>
          <a
            href="https://strangerzthingz.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Link To Website
          </a>
        </div>
      </div>

      <div class="card" style={{
          backgroundImage:`url(${graceshopper})`
           
      }}>
        <div class="card-content">
          <h2 class="card-title">Grace Shopper</h2>
          <p class="card-desc">
            <br />
            App using a self made backend server to keep track of products,
            purchased items, cart, along with a user base. <br />• Technologies
            used: Material UI, React, JSON Authentication, SWAL, PostgreSQL,
            Express, BCrypt, Axios
          </p>
          <a
            href="https://salty-wildwood-03444.herokuapp.com/products"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Link To Website
          </a>
        </div>
      </div>

      <div class="card" style={{
          backgroundImage:`url(${retrodraw})`
           
      }}>
        <div class="card-content">
          <h2 class="card-title">Pixel Draw</h2>
          <p class="card-desc">
            <br />
            Fun pixel drawing app <br />• Technologies used: JQuery, Javascript,
            CSS
          </p>
          <a
            href="https://pixeldraww.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Link To Website
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Portfolio;
