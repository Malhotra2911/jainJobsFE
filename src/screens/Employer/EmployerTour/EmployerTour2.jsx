import React from "react";
import "../../../css/Employer/EmployerTour.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour3 from "./EmployerTour3.jsx";

const EmployerTour2 = ({Tour1 }) => {
  const navigate = useNavigate();
  const handleClose = () =>{
    Tour1(false);
    navigate("/createjobpost", { replace: "true" });

  } 
  const [tour2, setTour2] = useState(false);

  const handleOnClick = () => {
    setTour2(true);
    // Tour1(false);
  }

  return (
    <>
      <div style={{ outline: "none" }}></div>
      <Modal
        open={Tour1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{backgroundColor: 'transparent',
        boxShadow: 'none'}}
      >
        <div className={tour2 ?"close":"DashBoardTour-background"}>
          <div className="DashBoardTour-card-box">
            <div className="DashBoardTour-card-arrow">
              {/* <img src={rightArrowImg} alt="" /> */}
              <img
                src="jobseeker/Arrow right.png"
                alt="_"
              />
            </div>
            <div className="DashBoardTour-card-card">
              <div className="DashBoardTour-card-card-child">
                <div className="DashBoardTour-card-card-child-top">
                  <div>
                    <h3>Jobs Posting</h3>
                    <p onClick={handleClose}>Skip</p>
                  </div>
                </div>
                <div className="DashBoardTour-card-card-child-middle">
                  <h3>Here you able to view posted Jobs.</h3>
                </div>

                <div className="DashBoardTour-card-card-child-bottom">
                  <p onClick={handleOnClick}>Next</p>
                  {tour2 && <EmployerTour3 Tour2={setTour2} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EmployerTour2;