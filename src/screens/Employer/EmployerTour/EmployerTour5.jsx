import React from "react";
import "../../../css/Employer/EmployerTour.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour6 from "./EmployerTour6.jsx";

const EmployerTour5 = ({Tour4 }) => {
  const navigate = useNavigate();
  const handleClose = () =>{
    Tour4(false);
    navigate("/createjobpost", { replace: "true" });

  } 
  const [tour5, setTour5] = useState(false);

  const handleOnClick = () => {
    setTour5(true);
    // Tour1(false);
  }

  return (
    <>
      <div style={{ outline: "none" }}></div>
      <Modal
        open={Tour4}
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
        <div className={tour5 ?"close":"DashBoardTour-background_emp5"}>
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
                    <h3>Jobseeker Data</h3>
                    <p onClick={handleClose}>Skip</p>
                  </div>
                </div>
                <div className="DashBoardTour-card-card-child-middle">
                  <h3>Here you can Job aspairants.</h3>
                </div>

                <div className="DashBoardTour-card-card-child-bottom">
                  <p onClick={handleOnClick}>Next</p>
                  {tour5 && <EmployerTour6 Tour5={setTour5} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EmployerTour5;