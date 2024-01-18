import React from "react";
// import downArrowLong from './downArrowLong.png'
// import './DashBoardTourMiddle.css'
// import "../../../css/jobseeker/DashBoardTourMiddle.css"
import "../../../css/jobseeker/DashBoardTourEnd.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour2 from "./DashBoardTour2";

const DashBoardTourEnd = ({ Popupstour }) => {
  const navigate = useNavigate();
  const [tour,setTour]= useState(false);
  const handleClose = () => {
    Popupstour(false);
    navigate("/availablejobs", { replace: "true" });
  };
  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popupstour}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root":{
              background:"transparent"
            },
            backgroundColor: 'transparent',
          boxShadow: 'none'}}
        >
          <div 
          className={tour ? "close_popup" : "DashBoardTour-background_end"}
          >
            <div className="middle-card-box_end long-down-arrow-div_end">
              <div className="middle-card-box-img_end">
                {/* <img src={downArrowLong} alt="" /> */}
                <img
                  src=
                    "jobseeker/downArrowLong.png"
                  
                  alt="_"
                />
              </div>

              <div className="middle-card-box-content_end">
                <div className="middle-card-box-content-left_end">
                  {" "}
                  <h3>Manage your Notifications!</h3>
                </div>

                <div className="middle-card-box-content-right_end">
                  <p onClick={handleClose}>Skip</p>
                  <p onClick={()=>setTour(true)}>Next</p>
                  {tour&& <DashBoardTour2 popup2={setTour}/>}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DashBoardTourEnd;
