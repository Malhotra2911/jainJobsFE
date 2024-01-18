import React from "react";
// import './DashBoardTour.css'
import "../../../css/jobseeker/DashBoardTour6.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour7 from "./DashboardTour7";



// import rightArrowImg from './Arrow right.png'

const DashBoardTour6 = ({ Popups6 }) => {
    const navigate = useNavigate();
  const handleClose = () =>{
      Popups6(false);
      navigate("/availablejobs", { replace: "true" });

  }
  const [tours7, setTours] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups6}
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
          <div className={tours7 ? "close_popup":"DashBoardTour-background6"}>
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
                      <h3>Track Referal</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>Track Your Referal Status!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setTours(true)}>Next</p>
                    {tours7 && <DashBoardTour7 Popups7={setTours} />}
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

export default DashBoardTour6;
