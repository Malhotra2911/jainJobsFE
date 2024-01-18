import React from "react";
import AvailableJobs from "../JobseekerDashboard/AvailableJobs";
import DashBoardTour from "./DashBoardTour";
import {useState} from "react"
import DashboardEntry from "./DashboardEntry";


const DashboardTourmain = () => {
  const [tour1,setTour1] = useState(true);
  const [step, setStep] = useState(0);

  return (
    <div>
      {/* {TourDisplay()} */}
      <AvailableJobs/>
      {tour1 && <DashboardEntry Tour1={setTour1}/>}

    </div>
  )
}


export default DashboardTourmain
