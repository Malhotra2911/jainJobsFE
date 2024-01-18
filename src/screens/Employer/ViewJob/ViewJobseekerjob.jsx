import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../css/Employer/ViewJob.css";

export default function ViewJobseekerjob({
  closeview,
  jobdetails,
  employerbtn,
  setApplyJob,
}) {
  return (
    <div className="viewjob_container">
      <div className="viewjobcontainer">
        <div className="close_btn">
          <button onClick={() => closeview(false)}>X</button>
        </div>
        <div className="viewdjob-Cards-Section">
          <ViewdJobsCards
            employerbtn={employerbtn}
            {...jobdetails}
            setApplyJob={setApplyJob}
          />
        </div>
      </div>
    </div>
  );
}
function ViewdJobsCards(props, { employerbtn, setApplyJob }) {
  const [iscitiesdata, setiscitiesdata] = React.useState([]);
  const cities = useSelector((state) => state.CommonReducer.cities);

  React.useEffect(() => {
    let variableOne;
    if (cities && cities.length !== 0) {
      variableOne = cities.filter(
        (itemInArray) => itemInArray.CITY_ID === parseInt(props.JOB_LOCATION)
      );
    }
    setiscitiesdata(variableOne);
  }, [cities]);

  const EXPERIENCE = JSON.parse(props.EXPERIENCE);
  const CTC = JSON.parse(props.SALARY_ANNUM);
  const [isSkills, setisSkills] = React.useState([]);
  const skills = useSelector((state) => state.AuthReducer.scope);

  const getskillname = () => {
    const newskill = JSON.parse(props.SKILLS);

    if (newskill && newskill.length > 0) {
      const arr = [];
      newskill.map((data, index) => {
        const variableOne = skills.filter(
          (itemInArray) => itemInArray.SCOPE_ID === data
        );
        arr.push(variableOne);
      });
      setisSkills(arr);
    } else {
      const arr = skills.filter(
        (itemInArray) => itemInArray.SCOPE_ID === newskill
      );

      console.log(arr);
      setisSkills(arr);
    }
  };

  React.useEffect(() => {
    getskillname();
  }, []);

  return (
    <div className="viewdjob-Card">
      <div className="job-Card">
        <div className="jOB-Name">
          <h2>{props.COMPANY_NAME.toUpperCase()}</h2>
          <h4>{EXPERIENCE && `${EXPERIENCE[0]} - ${EXPERIENCE[1]} Year`}</h4>
        </div>
        <div className="jOB-Skills">
          <h4>{props.MODE_OF_WORK}</h4>
          <h4>
            {iscitiesdata &&
              iscitiesdata.length !== 0 &&
              iscitiesdata[0].CITY_NAME + "," + iscitiesdata[0].STATE_NAME}
          </h4>
        </div>
      </div>
      <div className="job_descriptions">
        <h2 className="JD_heading">Job details</h2>
        <h3>Salary</h3>
        <p>{CTC && ` ${CTC[0]} to ${CTC[1]}  Annunm`}</p>
        <h3>Benefits</h3>
        <p>{props.MODE_OF_WORK}</p>
        <h3>Job Type</h3>
        <p>{props.JOB_POSITION}</p>
        <h3>Skills</h3>

        <ul>
          {isSkills && isSkills.length !== 0 && isSkills.length === 1
            ? isSkills.map((data, index) => <li>{data.FIELD_NAME}</li>)
            : isSkills.map((data, index) => <li>{data[0].FIELD_NAME}</li>)}
        </ul>
      </div>
      <div className="fulljob_description">
        <h2 className="JD_heading">Full Job Descriptions</h2>
        <h3>Company Profile</h3>
        <ul>
          <li className="none">{props?.COMPANY_PROFILE}</li>
        </ul>

        <h3>Job Description</h3>
        <ul>
          <li className="none">{props?.JOB_DESCRIPTION}</li>
        </ul>
      </div>
      <div className="linkedin_page">
        <h3>Linkedin</h3>
        <p>
          <Link to={{ pathname: props?.LINKEDIN_PROFILE }} target="_blank">
            {props?.LINKEDIN_PROFILE}
          </Link>
        </p>
      </div>

      <div className="linkedin_page">
        <h3>Website</h3>
        <p>
          <Link to={{ pathname: props?.WEBSITE }} target="_blank">
            {props?.WEBSITE}
          </Link>
        </p>
      </div>

      <div className="linkedin_page">
        <h3>email</h3>
        <p>
          <Link to={{ pathname: props?.EMAIL }} target="_blank">
            {props.EMAIL}
          </Link>
        </p>
      </div>
      {employerbtn && (
        <button
          className="applyjob_btn"
          onClick={() => {
            setApplyJob(true);
          }}
        >
          Apply Job
        </button>
      )}
    </div>
  );
}
