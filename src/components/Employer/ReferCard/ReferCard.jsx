import React from 'react'
import { useState } from 'react'
import ReferFriendPopup from './ReferFriendPopup'
import "../../../css/Employer/ReferCard.css"

export default function ReferCard() {
  const [referFriend, setReferFriend] = useState(false);
  return (
    <div className="refer_createprofile_feedback_container">
      <div className="refercard_container">
        <div className="RC_left">
          <h2>Now refer your friends on our platform using
            whatsapp , email, linkedin facebook. </h2>
          <button className="refer" onClick={() => { setReferFriend(true); }}>Refer</button>
          {referFriend && <ReferFriendPopup PopupPage={setReferFriend} />}
        </div>
        <div className="RC_right">
          <img src="employer/referimg.png" alt="" />
        </div>
      </div>
    </div>
  )
}