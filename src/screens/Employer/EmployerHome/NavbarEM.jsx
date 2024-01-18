import React, { useState } from "react";
import "../../../css/Employer/NavbarEmployer.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpecialServiceCard from "../../jobseeker/Home/SpecialServiceCard";

export default function NavbarEM() {
  const [popup, setPopup] = React.useState(false);

  const [hamberger, setHamberger] = useState(false);
  const toggle = () => setHamberger(!hamberger);

  const handleOnClick = () => {
    // if(age == 10 || age == 20 || age == 30){
    // return true;
    setPopup(true);
    // }
  };

  return (
    <>
      <div className="Navbar_content">
        <div
          className={hamberger ? "navbarEmResponsive" : "navbarEm"}
          onClick={() => setHamberger(false)}
        >
          <Link to="/">
            <img
              style={{ width: "100%", height: "4rem" }}
              src="images.png"
              alt="-"
            />
          </Link>
          <div className="navbar_contents">
            {/* <a href="/">Job</a> */}
            {/* <a href="/JobseekerSubscription">Subscriptions</a> */}
            <h3 className="special_fmn" onClick={handleOnClick}>
              Specialised Jain Service
            </h3>
            {popup && <SpecialServiceCard Popup={setPopup} />}

            {/* <a href="/JobseekerSubscription">Specialied FMN Service</a> */}

            {/* <a href="#referal">Referral</a> */}
            <a href="/FaqTab">FAQ</a>
            <a href="/">Blogs</a>
            <a href="/#contact">Contact</a>
            <Link to="/Signuplogin" className="Next_Page">
              <button>Register / Login</button>
            </Link>
          </div>
        </div>
        <button className="mobile-menu-icon" onClick={toggle}>
          {hamberger ? "X" : <FaBars />}
        </button>
      </div>
    </>
  );
}
