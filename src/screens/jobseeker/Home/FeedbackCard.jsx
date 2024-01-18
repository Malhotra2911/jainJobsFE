import React, { useState} from 'react'
import "../../../css/jobseeker/FeedbackCard.css"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useDispatch } from "react-redux"
import { FeedbackAction} from '../../../redux/action/CommonAction';
import { toast } from 'react-toastify';


export default function FeedbackCard() {
  const [message, setMessage] = useState("");

  var userId = 0;
  var userRole = 0;
  var name = "unknown";
  var email= "unknown";
  var subject = "unknown";

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!message){
      toast.error("Please Fill the Feedback Fields");
      return false;
    }
    dispatch(FeedbackAction(userId,userRole,name,email,subject,message));
    setMessage("");
  }

  return (
    <div className="feedback_container">
      <div className="feedbackProfile_container">
        <div className="FB_card_container">
          <h3 className='feedback_heading'>Do you have some feedback?</h3>
          <div className="fb_logo">
            <SentimentVeryDissatisfiedIcon />
            <TagFacesIcon />
          </div>
          <h5 className='feedback_heading'>So we did a good job?</h5>
          <div className="textarea">
            <form action="" className="textarea_form"  onSubmit={handleSubmit}>
              <textarea name="" id="" cols="30" rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >Tell in words</textarea>
            </form>
          </div>
          <button className="SUBMIT" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

    </div>
  )
}