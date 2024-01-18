import React from 'react'
// import './EmployeeSubscription.css'
import "../../../css/Employer/EmployeeSubscription.css"
import SubscriptionPageEmployee from './SubscriptionPageEmployee'
import {Link} from "react-router-dom"
export default function EmployeeSubscription () {
  return (
    <div className='Employeesubscription_container'>
      <div className='Employeesubscription_header'>
        <h1> Employee Subscription Plans</h1>
      </div>
      <div className='Employeesunscription_card'>
        <SubscriptionPageEmployee />
      </div>
      <div className='Employeesubscriptionpage_btn'>
        <Link to="/JobNotPosted">
        <button className='proceedwith_without_subscriptionE'>
          Proceed with subscription
        </button>
        </Link>
        <Link to="/JobNotPosted">
        <button className='proceedwith_without_subscriptionE'>
          Proceed without subscription
        </button>
        </Link>
      </div>
    </div>
  )
}
