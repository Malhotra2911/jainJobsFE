import React from "react";
import ReferCard from "../../../components/Employer/ReferCard/ReferCard";
import PlansCard from "./PlansCard";
import "../../../css/jobseeker/Services.css"
import Employerhomebanner2 from "./Employerhomebanner2";
import StartHiring from "./StartHiring";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MultiCarousel from "../ServiceCarousel/MultiCarousel";
import Hirecard from "./Hirecard";
import HomeDashboard from "./HomeDashboard";
import ServiceData from "../../../mockJson/ServiceData";
import { Carousel } from "react-responsive-carousel";
import NavbarEmployer from "./NavbarEmployer";
// import Footer from "./Footer";
import "../../../css/Employer/EmployerHome.css";
import Footer from "../../jobseeker/Home/Footer";
import PhotoAni from "./PhotoAni/PhotoAni";
import ServiceDataEm from "../../../mockJson/ServiceDataEm";

export default function EmployerHome() {
  return (
    <div className="home_container_mainE">
      <div className="home_container">
        <NavbarEmployer/>


        <div className="showcaseskill_container">
          <div className="leftside_container">
            <div className="card_container_skills">
              <div className="skills_heading">
                <h3>Showcase your skills globally</h3>
                <p>
                  Based on your skill profile FindMyNext provides seamless
                  access to fulltime, freelancing, work from home, consulting,
                  remote working opportunities worldwide.z
                </p>
                <hr />
              </div>
              <div className="skills_subheading">
                <h3>Find Work Faster</h3>
                <hr />
                <h3>Get the Goodness Score Advantage</h3>
                <hr />
                <h3>Get work that suits you best</h3>
                {/* <hr /> */}
              </div>
            </div>
          </div>
          <div className="rightside_container">
            <img
              className="first"
              src="employer/rename.png"
              alt=""
            />
            <img
              className="second"
              src="employer/rename2.png"
              alt=""
            />
          </div>
          
        </div>

        
          <PhotoAni/>
          <div className="servicecarousel_container">
          <div className="servicecontainer_heading">
            <div className="service-leftheading">
              <h2>Choose your Services</h2>
            </div>
            <div className="service-rightheading">
              <p className="service_right_para">
              We offer unique, customized, and client centric solutions that help find businesses with the right talent and workforce for their company.              </p>
            </div>
          </div>
          <div className="service-Carousel">
            <div className="service-Carousel-Track">
              <div className="Services-card-job">
                  <MultiCarousel>
                  {ServiceDataEm.map((ServiceDataIndex, index) => (
                    <ServiceCardFunc key={index} {...ServiceDataIndex} />
                  ))}
                  </MultiCarousel>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flexibleplan_container_main">
          <PlansCard />
        </div> */}
        {/* <div className="homedashboard_main">
          <HomeDashboard />
        </div> */}
        <div className="GET_overview_container">
          <div className="get_heading">
            <h2>How to apply</h2>
          </div>
          <div className="GET_left">
            <h2 className="employee_h1">GET 2021-22 Launched!</h2>
            <p className="em_para">
              <span>Jain Jobs</span> employer branding solutions help you show job
              seekers what it’s like to work at your company and help you
              uncover ways to improve your employee experience
            </p>
          </div>
          <div className="GET_right">
            <div className="img_container">
              <h3 className="registrationget">Registration</h3>
              <img
                src="employer/payments.png"
                alt=""
              />
            </div>
            <div className="img_container">
              <h3 className="loginget">Login</h3>

              <img
                src="employer/authentication.png"
                alt=""
              />
            </div>
            <div className="img_container">
              <h3 className="applyget">Apply GET</h3>

              <img
                src="employer/programming.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
        <Footer />
      </div>
    </div>
    
  );
}
function ServiceCardFunc(props) {
  const { image, Heading, content } = props;
  return (
    <div className="service-Card">
      <div className="img_size">
        <img className="service_img" src={image} alt="" />
      </div>

      <h2 className="service_card_heading">{Heading}</h2>
      <p className="service_card_content">{content}</p>
    </div>
  );
}
