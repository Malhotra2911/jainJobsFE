import React from "react";
import "../../../css/jobseeker/DashBoardTour.css";
import DashBoardTour2 from "./DashBoardTour2";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTourMiddle from "./DashBoardTourMiddle";
// import rightArrowImg from './Arrow right.png'

const DashBoardTour = ({Open }) => {
  const navigate = useNavigate();
  const handleClose = () =>{
    Open(false);
    navigate("/availablejobs", { replace: "true" });

  } 
  const [tours, setTours] = useState(false);

  const handleOnClick = () => {
    setTours(true);
    // Tour1(false);
  }

  return (
    <>
      <div style={{ outline: "none" }}></div>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{backgroundColor: 'transparent',
        boxShadow: 'none'}}
      >
        <div className={tours ?"close":"DashBoardTour-background"}>
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
                    <h3>Jobs Available</h3>
                    <p>Skip</p>
                  </div>
                </div>
                <div className="DashBoardTour-card-card-child-middle">
                  <h3>Jobs available for your Profile.</h3>
                </div>

                <div className="DashBoardTour-card-card-child-bottom">
                  <p onClick={handleOnClick}>Next</p>
                  {tours && <DashBoardTourMiddle Popup={setTours} />}

                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DashBoardTour;