import React from 'react'
import { useState } from 'react';
import "../../../css/jobseeker/Refer.css"
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import ReferFriendPopup from "../../../components/Employer/ReferCard/ReferFriendPopup";
export default function Refer() {
  const [referFriend, setReferFriend] = useState(false);


  return (
    <div className='Refer' id='referal'>
      <div className="refercard_containeR">
        <div className='refer_leftcontent'>
          <h4 className='referhead'> Refer your Friends and Earn Amazing Credits!</h4>
          <h5 className='refer_conten'>Now refer your friends on our platform using whatsapp , email, linkedin facebook. </h5>
          <Link to="/Signuplogin" style={{ listStyle: "none", textDecoration: "none" }}>
            <Button variant="contained"
              onClick={() => { setReferFriend(true); }}
              sx={{
                width: "23%",
                textTransform: "none",
                color: "#ffffff",
                backgroundColor: "#F7701D",
                "&:hover": { backgroundColor: "#F7701D" },
              }}
            >Refer</Button>
          </Link>

        </div>
        <div className="refer_rightcontent">
          <img src="jobseeker/referfriendjob.png" alt="" />

        </div>

      </div>
    </div>
  )
}
