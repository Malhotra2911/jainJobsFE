import React from "react";
// import './DashBoardTour.css'
import "../../../css/jobseeker/DashBoardTour5.css";
import { useState } from "react";
import DashBoardTourMiddle from "./DashBoardTourMiddle";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour6 from "./DashboardTour6";



// import rightArrowImg from './Arrow right.png'

const DashBoardTour5 = ({ Popups5 }) => {
    const navigate = useNavigate();
  const handleClose = () =>{
      Popups5(false);
      navigate("/availablejobs", { replace: "true" });

  }
  const [tours6, setTours] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups5}
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
          <div className={tours6 ? "close_popup":"DashBoardTour-background5"}>
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
                      <h3>GET</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>Check Your Skill Score !</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setTours(true)}>Next</p>
                    {tours6 && <DashBoardTour6 Popups6={setTours} />}
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

export default DashBoardTour5;
