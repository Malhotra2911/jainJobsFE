import React, { useState, useRef, useEffect } from "react";
import "../../../css/jobseeker/DropDown.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
// import { useNavigate } from 'react-router-dom';

import JobseekerSubscriptionPopup from "../../../screens/jobseeker/jobseekersubscriptionpopup/JobSeekerSubscriptionPopup";
export default function DropDown({ Dropdown }) {
  const navigate = useNavigate();

  const [showform, setShowform] = useState(false);
  const [cancelSubscription, setCancelSubscription] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const handleClose = () => Dropdown(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowform(!showform);
  };

  const navigation = useNavigate();
  const _logoutfun = () => {
    var mytoken = sessionStorage.getItem("token");
    if (mytoken) {
      sessionStorage.removeItem("token");
      setTimeout(() => {
        navigation("/");
        window.location.reload();
      }, 700);
    }
  };

  const handleOnClick = () => {
    navigate("/createcv", { replace: "true" });

  }

  return (
    <>
      <div style={{ outline: "none", border: "none" }}>
        <Modal
          open={Dropdown}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root": {
              background: "transparent",
            },
            backgroundColor: "transparent",
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <div className="employer_dropdown_content">
            <div className="dropdown">
              <p>
                <Link
                  to="/profile"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    color: "#464353"
                  }}
                >
                  Manage Profile
                </Link>
              </p>
              <div className="v1"></div>

              {/* <p onClick={() => setSubscription(true)}>
                <Link
                  to="/subscriptiondetails"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    color: "#464353"
                  }}
                >
                  Subscriptions
                </Link>
              </p> */}
              <div className="v1"></div>
              <p onClick={handleOnClick}>Create CV</p>
              <div className="v1"></div>
              {/* <p>
                <Link
                  to="/dashboardtourmain"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    color: "#464353"
                  }}
                >
                  Dashboard Tour
                </Link>
              </p> */}
              <div className="v1"></div>
              {/* <p onClick={handleClick}>Change Theme</p> */}
              {/* <div className="v1"></div> */}
              <p>
                <Link
                  to="/referpage"
                  style={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    color: "#464353"
                  }}
                >
                  Refer
                </Link>
              </p>
              <div className="v1"></div>
              <div onClick={_logoutfun}>
                <p>Logout</p>
              </div>
            </div>
            {/* {showform && (
              <div className="DropDown-ChangeTheme">
                <div className="drop-down-theme">
                  <p>Use Device Theme</p>
                  <div className="v1"></div>
                  <p>Use Light Theme</p>
                  <div className="v1"></div>
                  <p>Use Dark Theme</p>
                </div>
              </div>
            )} */}
          </div>
        </Modal>
      </div>
    </>
  );
}
