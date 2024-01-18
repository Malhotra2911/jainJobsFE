import React from "react";
// import "./employeesubscriptionpage.css"
import "../../../css/Employer/employeesubscriptionpage.css"

export default function SubscriptionPageEmployee() {
  return (
    <div className="employeeSubscription_plan_container" style={{"overflow":'hidden'}}>
      <div className="employeesubscription_card">
        {/* <div className="ESC_heading"> */}
          <h3 className="h3-title">Type of Subscription Plans</h3>
        {/* </div> */}
        <div className="ESC_plans" >
          <div className="checkbox1">
            {/* <label> */}
              <input type="checkbox" name="remember" />
            {/* </label> */}
          </div>
          <div className="subscription_content">
            <h2>Get access to all premium and high priority jobs</h2>
            <p>1. One time payment of 800 INR . Serves one opening. Advertisement
              valid for 10 days. Access to all applied CV'S upto 12. To access
              more applied CV'S the employer willl need to purchase subscription
              for 3/6/9 months.{" "}
            </p>
            <p>2. If the employer goes for subscription plan then the following
              benefits will be given.{" "}
            </p>
          </div>
        </div>
        <hr className="line_braker" />
        <div className="ESC_plans">
          <div className="checkbox1">
            {/* <label> */}
              <input type="checkbox" name="remember" />
            {/* </label> */}
          </div>
          <div className="subscription_content">
            <h2>Combo hiring with and without subscription</h2>
            <p>
              One time payment of 1300 INR for two openings to begin with. Valid
              for 20 days. Access to all applied CV upto 18. To access more switch
              to subscription 3 subscription plans 3 months 3750 INR , 6 months
              7200 INR and 9 months for 9900 INR.
            </p>
          </div>

        </div>
        <hr className="line_braker" />
        <div className="ESC_plans">
          <div className="checkbox1">
            
              <input type="checkbox" name="remember" />
            

          </div>
          <div className="subscription_content">
            <h2>Create your own plan </h2>
            <p>
              This support upto 4 new hirings in every month. Fully customisable.
              This is a subscription based service. To unlock one time payment of
              6 months and 9 months. <br />
              This is a subscription based service. To unlock one time payment of
              6 months and 9 months.
            </p>
          </div>
        </div>
        <hr className="line_braker" />
        <div className="ESC_plans">
          <div className="checkbox1">
            
              <input type="checkbox" name="remember" />
           

          </div>
          <div className="subscription_content">
            <h2>To FMN bidding </h2>
            <p>
              This support upto 4 new hirings in every month. Fully customisable. <br />
              This is a subscription based service. To unlock one time payment of
              6 months and 9 months.
            </p>
          </div>
        </div>
        <hr className="line_braker" />
        <div className="ESC_plans">
          <div className="checkbox1">
           
              <input type="checkbox" name="remember" />
            

          </div>
          <div className="subscription_content">
            <h2>Pay per click</h2>
            <p>
            This support upto 4 new hirings in every month. Fully customisable.<br/> This is a subscription based service. To unlock one time payment of
              6 months and 9 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
