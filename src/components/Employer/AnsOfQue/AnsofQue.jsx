import React, { useEffect } from "react";
import { useState } from "react";
import "../../../css/Employer/FaqEmployer.css";
import FaqEmployerData from "../../../mockJson/FaqEmployerData";
import Modal from "@mui/material/Modal";
import { ImageBackend } from "../../../config/Config";

export default function AnsofQue({
  isanswerpopup,
  setisanswerpopup,
  isUserDetais,
}) {
  const [isqueans, setisqueans] = useState([]);
  const handleClose = () => setisanswerpopup(false);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    if (isUserDetais && isUserDetais.length !== 0  && parseInt(isUserDetais.ANSWER_SUBBMITTED) !== 0) {    
      setisqueans(JSON.parse(isUserDetais.ANSWER_SUBBMITTED));
       
    }
  }, [isUserDetais]);

  return (
    <>
      <Modal
        open={isanswerpopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="faqEmp_container">
          <div className="faqEmp_board">
            <div className="faqEmpCloseBtn">
              <button
                onClick={() => {
                  setisanswerpopup(false);
                }}
              >
                X
              </button>
            </div>

            <div className="faqEmp_Container">
              <div className="faqEmp_container_content">
                <div className="faqEmpup_container">
                  <div className="faqEmpup_left">
                    <h1>Hi, here is the answer given by</h1>
                    <h1>FAQ</h1>
                  </div>
                  <div className="faqEmpup_right">
                    <img src="jobseeker/FaqImage.png" alt="_" />
                  </div>
                </div>
              </div>
              <div className="accordionEmp">
                {isqueans.length !== 0 &&
                  isqueans.map((item, i) => (
                    <div className="itemEmp">
                      <div className="titleEmp" onClick={() => toggle(i)}>
                  <h6 className="questionnoEmp">{i + 1}</h6>
                  <h6 className="title_headingEmp">{item.Que}</h6>
                  <span>{selected === i ? "" : ""}</span>
                </div>
                <div className={selected === i ? "contentEmp showEmp" : "contentEmp"}>


                  {
                    parseInt(item.type) === 0  ?  item.Ans : <a href={ ImageBackend + item.Ans} > { ImageBackend + item.Ans}</a>    
                  }
                </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
