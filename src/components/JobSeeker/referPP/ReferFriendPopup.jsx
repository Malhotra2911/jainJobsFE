import React from 'react'
import "../../../css/jobSeeker/ReferFriendPopup.css"


export default function ReferFriendPopup({PopupPage}) {
  return (
    <div className="referfriend_popup_container">
      <div className="RFPP_container">
      <div className="titleCloseBtn">
          <button
            onClick={() => {
              PopupPage(false);
            }}
          >
            X
          </button>
        </div>
        <div className="REPP_container_content">
        <div className="referral_img">  
        <img src="jobseeker/referral.png"alt=""  />
</div>
          <p>Now refer your friends on our platform using 
whatsapp , email, linkedin facebook. </p>
<div className="socialmedia_logo">
    {/* <button className="Social_Media"><img src={Whatsapp} /></button> */}
    <button className="Social_Media"><img src="employer/text.png" /></button>
    <button className="Social_Media"><img src="employer/linkedinn.png" /></button>
    <button className="Social_Media"><img src="employer/facebook.png" /></button>

</div>
<div className="input_refer_btn">
    <input type="text" name="name"/>
    <button className="btn_refer">Refer</button>
</div>

        </div>
      </div>
    </div>
  )
}
