import React from "react";
import {useState} from "react"
import EmployerTour2 from "./EmployerTour2.jsx";
import CreateJobPost from "../EmployeeDashboard/CreateJobPost";


const EmployerTour1 = () => {
  const [tour1,setTour1] = useState(true);

  return (
    <div>
      <CreateJobPost/>
      {tour1 && <EmployerTour2 Tour1={setTour1}/>}

    </div>
  )
}


export default EmployerTour1
