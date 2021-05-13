import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "row",
      }}
    >
      <div class="card" style={{
          backgroundImage:'url("https://images.pexels.com/photos/2705888/pexels-photo-2705888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
           
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
          backgroundImage:'url("https://images.pexels.com/photos/2705888/pexels-photo-2705888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
           
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
            href="https://pixeldraww.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            Link To Website
          </a>
        </div>
      </div>

      <div class="card" style={{
          backgroundImage:'url("https://images.pexels.com/photos/2705888/pexels-photo-2705888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'
           
      }}>
        <div class="card-content">
          <h2 class="card-title">Pixel Draw</h2>
          <p class="card-desc">
            <br />
            Fun pixel drawing app <br />• Technologies used: JQuery, Javascript,
            CSS
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
    </div>
  );
}

export default Portfolio;
