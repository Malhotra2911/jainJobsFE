import React from "react";
import "../../../css/Employer/EmployerTour.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour5 from "./EmployerTour5.jsx";

const EmployerTour4 = ({Tour3 }) => {
  const navigate = useNavigate();
  const handleClose = () =>{
    Tour3(false);
    navigate("/createjobpost", { replace: "true" });

  } 
  const [tour4, setTour4] = useState(false);

  const handleOnClick = () => {
    setTour4(true);
    // Tour1(false);
  }

  return (
    <>
      <div style={{ outline: "none" }}></div>
      <Modal
        open={Tour3}
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
        <div className={tour4 ?"close":"DashBoardTour-background_emp4"}>
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
                    <h3>FMN Blogs</h3>
                    <p onClick={handleClose}>Skip</p>
                  </div>
                </div>
                <div className="DashBoardTour-card-card-child-middle">
                  <h3>Here you can View and create blog post.</h3>
                </div>

                <div className="DashBoardTour-card-card-child-bottom">
                  <p onClick={handleOnClick}>Next</p>
                  {tour4 && <EmployerTour5 Tour4={setTour4} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EmployerTour4;