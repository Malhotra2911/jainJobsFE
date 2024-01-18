import React from 'react'
import "../../../css/jobseeker/JobseekerSubscription.css"
import { Link, useNavigate } from 'react-router-dom'
import SubscriptionPage from './SubscriptionPage'
import { toast } from 'react-toastify';
import JsSubscription from '../JsSubscription/JsSubscription';

export default function JobseekerSubscription() {
  const navigate = useNavigate();
  const signuproute = "/Signuplogin";


  const _subscribation = () => {
    toast.success("Submitted Successfully");
    navigate(signuproute);    
  }

  return (
    <div className="jobseekersubscription_container">
      <div className="jobseekersubscription_header">
        <h1>
          Job Seekers Subscription Plans
        </h1>
      </div>
      <div className="jobseekersunscription_card">
        {/* <SubscriptionPage /> */}
        <JsSubscription/>
      </div>
      <div className="subscriptionpage_btn">
        <button type='button' onClick={_subscribation} className="proceedwith_without_subscription" style={{ textDecoration: "none", color: "#000000" }}>
          Proceed without subscription
        </button>
      </div>

    </div>
  )
}
