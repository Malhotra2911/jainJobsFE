import React from 'react'
import { useState } from "react";
import "./FaqFreelancer.css";
import FaqFreelancerData from "../../mockJson/FaqFreelancerData";


export default function FaqFreelancer() {

    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    };
  
  return (
    
               <div className="faqFrelancer_container">
      <div className="faqFrelancer_board">
        <div className="faqFrelancerCloseBtn">
          {/* <button
            onClick={() => {
              FaQ(false);
            }}
          >
            X
          </button> */}
        </div>

        <div className="faqFrelancer_Container">
          <div className="faqFrelancer_container_content">
            <div className="faqFrelancerup_container">
              <div className="faqFrelancerup_left">
                <h1>Hi, how we help you?</h1>
                <h1>FAQ</h1>
              </div>
              <div className="faqFrelancerup_right">
                <img src="jobseeker/FaqImage.png" alt="_" />
              </div>
            </div>
          </div>
          <div className="accordionFrelancer">
            {FaqFreelancerData.map((item, i) => (
              <div className="itemFrelancer">
                <div className="titleFrelancer" onClick={() => toggle(i)}>
                  <h6 className="questionnoFrelancer">{item.questionno}</h6>
                  <h6 className="title_headingFrelancer">{item.question}</h6>
                  <span>{selected === i ? "" : ""}</span>
                </div>
                <div className={selected === i ? "contentFrelancer showFrelancer" : "contentEmp"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
