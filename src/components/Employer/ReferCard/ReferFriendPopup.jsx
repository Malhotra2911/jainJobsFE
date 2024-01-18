import React from 'react'
import "../../../css/Employer/ReferFriendPopup.css"
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';


export default function ReferFriendPopup({ PopupPage }) {
  const handleClose = () => {
    PopupPage(false);
  };
  return (
    <div style={{ outline: "none" }}>
      <Modal
        // hideBackdrop
        open={PopupPage}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="referfriend_popup_containers">
          <div className="RFPP_container">
            {/* <div className="titleCloseBtn">
            <button
              onClick={() => {
                PopupPage(false);
              }}
            >
              X
            </button>
          </div> */}
            <div className="REPP_container_content">
              <div className="referral_img">
                <img src="jobseeker/referral.png" alt="" />
              </div>
              <p>Now refer your friends on our platform using
                whatsapp , email, linkedin facebook. </p>
              <div className="socialmedia_logo">
                <Link to="/Signuplogin" className='link_btn'>
                  <button className="Social_Media"><img src="employer/whatsapp.png" /></button>
                </Link>
                <Link to="/Signuplogin" className='link_btn'>
                  <button className="Social_Media_text"><img src="employer/text.png" /></button>
                </Link>
                <Link to="/Signuplogin" className='link_btn'>
                  <button className="Social_Media"><img src="employer/linkedinn.png" /></button>
                </Link>
                <Link to="/Signuplogin" className='link_btn'>
                  <button className="Social_Media"><img src="employer/facebook.png" /></button>
                </Link>

              </div>
              <div className="input_refer_btn">
                {/* <input type="text" name="name" /> */}
                <Link to="/Signuplogin" className='link_btn'>
                  <button className="btn_refer">Refer</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
