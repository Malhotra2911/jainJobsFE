import React from "react";
import { useState } from "react";
// import vq from "../../components/assets/FaqImage.png";
import "../../../css/jobseeker/Faq.css";
import FaqData from "../../../mockJson/FaqData";
import Modal from '@mui/material/Modal';

export default function Faq({FaQ}) {
  const [selected, setSelected] = useState(null);
  const handleClose = () => FaQ(false);

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

    <div className="faq_container">
      <div className="faq_board">
        <div className="faqCloseBtn">
          <button
            onClick={() => {
              FaQ(false);
            }}
          >
            X
          </button>
        </div>

        <div className="faq_Container">
          <div className="faq_container_content">
            <div className="faqup_container">
              <div className="faqup_left">
                <h2>Hi, how we help you?</h2>
                <h2>FAQ</h2>
              </div>
              <div className="faqup_right">
                <img src="jobseeker/FaqImage.png" alt="_" />
              </div>
            </div>
          </div>
          <div className="accordion">
            {FaqData.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h6 className="questionno">{item.questionno}</h6>
                  <h6 className="title_heading">{item.question}</h6>
                  <span>{selected === i ? "" : ""}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
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

  );
}
