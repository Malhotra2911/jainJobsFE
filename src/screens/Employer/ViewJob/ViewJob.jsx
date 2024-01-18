/* eslint-disable array-callback-return */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../css/Employer/ViewJob.css";
import Data from "../../../mockJson/ViewData";

export default function ViewJob({ closeview, jobdetails, employerbtn }) {
  return (
    <div className="viewjob_container">
      <div className="viewjobcontainer">
        <div className="close_btn">
          <button onClick={() => closeview(false)}>X</button>
        </div>
        <div className="viewdjob-Cards-Section">
          <ViewdJobsCards employerbtn={employerbtn} {...jobdetails} />
        </div>
      </div>
    </div>
  );
}
function ViewdJobsCards(props, { employerbtn }) {
  const [iscitiesdata, setiscitiesdata] = React.useState(null);
  const cities = useSelector((state) => state.CommonReducer.cities);

  React.useEffect(() => {
    let variableOne;
    if (cities && cities.length !== 0) {
      variableOne = cities.filter(
        (itemInArray) => itemInArray.CITY_ID === parseInt(props.JOB_LOCATION)
      );
      console.log(variableOne, "variableOne");
    }
    setiscitiesdata(variableOne);
  }, [cities]);

  const EXPERIENCE = JSON.parse(props.EXPERIENCE);
  const CTC = JSON.parse(props.SALARY_ANNUM);
  const [isSkills, setisSkills] = React.useState([]);
  const skills = useSelector((state) => state.AuthReducer.scope);

  const getskillname = () => {
    const newskill = JSON.parse(props.SKILLS);

    if (newskill && newskill.length > 0 && newskill.length !== 0) {
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
          <h4>{props?.MODE_OF_WORK}</h4>
          <h4>
            {iscitiesdata &&
              iscitiesdata[0].CITY_NAME + "," + iscitiesdata[0].STATE_NAME}
          </h4>
        </div>
      </div>
      <div className="job_descriptions">
        <h2 className="JD_heading">Job details</h2>
        <h3>Salary</h3>
        <p>{CTC && ` ${CTC[0]} to ${CTC[1]}  Annunm`}</p>
        <h3>Benefits</h3>
        <p>{props?.MODE_OF_WORK}</p>
        <h3>Job Type</h3>
        <p>{props?.JOB_POSITION}</p>
        <h3>Skills</h3>

        <ul>
          {isSkills && isSkills.length !== 0 && isSkills.length === 1
            ? isSkills.map((data, index) => <li>{data?.FIELD_NAME}</li>)
            : isSkills.map((data, index) => <li>{data[0]?.FIELD_NAME}</li>)}
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
          <Link to={{ pathname: props.LINKEDIN_PROFILE }} target="_blank">
            {props.LINKEDIN_PROFILE}
          </Link>
        </p>
      </div>

      <div className="linkedin_page">
        <h3>Website</h3>
        <p>
          <Link to={{ pathname: props.WEBSITE }} target="_blank">
            {props.WEBSITE}
          </Link>
        </p>
      </div>

      <div className="linkedin_page">
        <h3>email</h3>
        <p>
          <Link to={{ pathname: props.EMAIL }} target="_blank">
            {props.EMAIL}
          </Link>
        </p>
      </div>
      {employerbtn && <button className="applyjob_btn">Apply Job</button>}
    </div>
  );
}

// export default function ViewJob() {
//   return (
//     <div className="viewjob_container">
//       <div className="viewdjob-Cards-Section">
//         {Data.map((Card, index) => (
//           <ViewdJobsCards key={index} {...Card} />
//         ))}
//       </div>
//         </div>
//   );
// }
// function ViewdJobsCards(props) {
//     const { Name, Company, Experience, JobMode, Skills, Income } = props;

//     return(
//         <div className="viewdjob-Card">
//       <div className="job-Card">
//         <div className="jOB-Name">
//           <h2>{Name}</h2>
//           <h3>{Company}</h3>
//           <h4>{Experience}</h4>
//         </div>
//         <div className="jOB-Skills">
//           <h4>{JobMode}</h4>
//           <h4>{Skills}</h4>
//         </div>
//         <div className="earning">
//           <h4>{Income}</h4>
//         </div>
//     </div>
//     <div className="job_descriptions">
//         <h3 className="JD_heading">Job description</h3>
//         <ul>
// <li>5-10 years of experience as anFull stack developer or similar role
// </li>
// <li>Excellent interpersonal and communication skills
// </li>
// <li>Excellent interpersonal and communication skills
// </li>
// <li>xAbility to discuss and explain design options
// </li>
// <li>Optimize existing user interface designs
// </li>
// <li>Communicate with internal/external stake holders to understand their business goals and objectives
// </li>
// <li>Develop Usability guidelines, UX style guides and always strive to deliver intuitive and user-centered solutions
// </li>
// <li>Combine creativity with an awareness of the design elements
// </li>
// <li>Create prototypes for new product ideas
// </li>
// <li>Test new ideas before implementing
// </li>
// <li>Conduct an ongoing user research
// </li>
// <li>Should be detail oriented and critical thinker
// </li>
// <li>Problem solver and customer-centered
// </li>
// <li>Proficiency in Adobe range of products including Photoshop, Illustrator, InDesign, Acrobat and Dreamweaver
// </li>
// <li>Good understanding of HTML, CSS</li>

//         </ul>
//     </div>
//     <div className="linkedin_page">
//         <h3>Linkedin</h3>
//         <p>
//         <a href="https://www.linkedin.com/in/akash-singh-8515b095/">"https://www.linkedin.com/in/akash-singh-8515b095/"</a>

//             </p>
//     </div>
//     <button className="applyjob_btn">Apply Job</button>
//     </div>
//     );
//     }
