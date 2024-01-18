import React from "react";
import "../../../css/Employer/EmployerTourtop.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour10 from "./EmployerTour10.jsx";

const EmployerTour9  = ({Tour8}) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Tour8(false);
    navigate("/createjobpost", { replace: "true" });
  };
  const [tour9, setTour9] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Tour8}
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
          <div className={tour9 ? "close_popup":"DashBoardTour-background"}>
            <div className="middle-card-box_emp9">
              <div className="middle-card-box-img">
                <img
                  src="jobseeker/down_arrow_short.png"
                  alt="_"
                />
              </div>

              <div className="middle-card-box-content">
                <div className="middle-card-box-content-left">
                  {" "}
                  <h3>Notification Section!</h3>
                </div>

                <div className="middle-card-box-content-right">
                  <p>Skip</p>
                  <p onClick={() => setTour9(true)}>Next</p>
                  {tour9 && <EmployerTour10 Tour9={setTour9} />}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EmployerTour9;
