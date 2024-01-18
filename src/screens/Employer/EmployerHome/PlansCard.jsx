import React from "react";
import { Link } from "react-router-dom";
import "../../../css/Employer/PlansCard.css";

export default function PlansCard() {
  return (
    <div className="flexibleplan_container">
      <div className="flexibleplancontent_container">
        <h2>Flexible Plans</h2>
        <h3 className="tracking-in-contract">
          Flexible and widest payment options
        </h3>

      </div>
      <div className="flexiblecard_container">
        {/* <MultiCarousel> */}
        <div className="flexiblecard">
          <div className="card_heading">
            <h3>Combo Plans</h3>
          </div>
          <div className="Fcard_content">
            <ul>
              <li>Ideal to start hiring for any two openings</li>
              <li>With and without subscription</li>
            </ul>
          </div>
          <div className="F_btn">
            <Link to="/Signuplogin" className="link_btn">
              <button className="btn_flexible">Try Now</button>
            </Link>
          </div>
        </div>
        <div className="flexiblecard">
          <div className="card_heading">
            <h3>Instant Plans</h3>
          </div>
          <div className="Fcard_content">
            <ul>
              <li> Ideal for 1 hiring</li>
              <li>With and without subscription</li>
            </ul>
          </div>
          <div className="F_btn">
            <Link to="/Signuplogin" className="link_btn">
              <button className="btn_flexible">Try Now</button>
            </Link>
          </div>
        </div>
        <div className="flexiblecard">
          <div className="card_heading">
            <h3>Create My Own Plans</h3>
          </div>
          <div className="Fcard_content">
            <ul>
              <li>Ideal for multiple hiring at the same time to begin with</li>
              <li>Available only with subscription</li>
            </ul>
          </div>
          <div className="F_btn">
            <Link to="/Signuplogin" className="link_btn">
              <button className="btn_flexible">Try Now</button>
            </Link>
          </div>
        </div>
        {/* </MultiCarousel> */}
      </div>
    </div>
  );
}
