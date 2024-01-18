import React from "react";
import "../../../css/Employer/EmployerTourtop.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour9 from "./EmployerTour9.jsx";

const EmployerTour8  = ({Tour7}) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Tour7(false);
    navigate("/createjobpost", { replace: "true" });
  };
  const [tour8, setTour8] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Tour7}
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
          <div className={tour8 ? "close_popup":"DashBoardTour-background"}>
            <div className="middle-card-box_emp8">
              <div className="middle-card-box-img">
                {/* <img src={downArrowShort} alt="" /> */}
                <img
                  src="jobseeker/down_arrow_short.png"
                  alt="_"
                />
              </div>

              <div className="middle-card-box-content">
                <div className="middle-card-box-content-left">
                  {" "}
                  <h3>Credit &amp; Refer Section!</h3>
                </div>

                <div className="middle-card-box-content-right">
                  <p>Skip</p>
                  <p onClick={() => setTour8(true)}>Next</p>
                  {tour8 && <EmployerTour9 Tour8={setTour8} />}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EmployerTour8;
