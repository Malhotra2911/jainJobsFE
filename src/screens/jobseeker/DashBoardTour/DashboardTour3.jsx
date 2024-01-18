import React from "react";
// import './DashBoardTour.css'
import "../../../css/jobseeker/DashBoardTour3.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour4 from "./DashboardTour4";



// import rightArrowImg from './Arrow right.png'

const DashBoardTour3 = ({ Popups }) => {
    const navigate = useNavigate();
  const handleClose = () =>{
      Popups(false);
      navigate("/availablejobs", { replace: "true" });

  }
  const [tours4, setTours] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root":{
              background:"transparent"
            },
            backgroundColor: 'transparent',
          background:"transparent",
          // border:"3px solid green",
          boxShadow: 'none'}}
        >
          <div className={tours4 ? "close_popup":"DashBoardTour-background3"}>
            <div className="DashBoardTour-card-box2">
              <div className="DashBoardTour-card-arrow2">
                {/* <img src={rightArrowImg} alt="" /> */}
                <img
                  src="jobseeker/Arrow right.png"
                  alt="_"
                />
              </div>
              <div className="DashBoardTour-card-card2">
                <div className="DashBoardTour-card-card-child2">
                  <div className="DashBoardTour-card-card-child-top2">
                    <div>
                      <h3>Track Application</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>Track Your Application Status!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setTours(true)}>Next</p>
                    {tours4 && <DashBoardTour4 Popups4={setTours} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DashBoardTour3;
