import React from 'react'
import { useState } from "react";
import "../../../css/Employer/FaqEmployer.css";
import FaqEmployerData from "../../../mockJson/FaqEmployerData";
import Modal from '@mui/material/Modal';


export default function FaqEmployer({FaQ}) {
  const handleClose = () => FaQ(false);



    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    };
  
  return (
<>
<Modal
    open={FaQ}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

          <div className="faqEmp_container">

      <div className="faqEmp_board">
        <div className="faqEmpCloseBtn">
          <button
            onClick={() => {
              FaQ(false);
            }}
          >
            X
          </button>
        </div>

        <div className="faqEmp_Container">
          <div className="faqEmp_container_content">
            <div className="faqEmpup_container">
              <div className="faqEmpup_left">
                <h2>Hi, how we help you?</h2>
                <h2>FAQ</h2>
              </div>
              <div className="faqEmpup_right">
                <img src= "jobseeker/FaqImage.png" alt="_" />
              </div>
            </div>
          </div>
          <div className="accordionEmp">
            {FaqEmployerData.map((item, i) => (
              <div className="itemEmp">
                <div className="titleEmp" onClick={() => toggle(i)}>
                  <h6 className="questionnoEmp">{item.questionno}</h6>
                  <h6 className="title_headingEmp">{item.question}</h6>
                  <span>{selected === i ? "" : ""}</span>
                </div>
                <div className={selected === i ? "contentEmp showEmp" : "contentEmp"}>
                  {item.answer}
                </div>
                      </div>
              
              
            ))}
          </div>
        </div>
      </div>
    </div>
    </Modal>

    </>
  )
}
