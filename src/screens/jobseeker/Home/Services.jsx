import React from "react";
import "../../../css/jobseeker/Services.css";
import MultiCarousel from "../../Employer/ServiceCarousel/MultiCarousel";
import ServiceData from "../../../mockJson/ServiceData";
export default function Services() {
  return (
    <div className="Services">
      <div className="services">
        <div className="servicecarousel_container">
          <div className="servicecontainer_heading">
            <div className="service-leftheading">
              <h2>Choose your Services</h2>
            </div>
            <div className="service-rightheading">
              <p className="service_right_para">
                We offer top notch recruitment services along with advertisement
                and promotion for all those who are seeking employment.{" "}
              </p>
            </div>
          </div>
          <div className="service-Carousel">
            <div className="service-Carousel-Track">
              <div className="Services-card-job">
                <MultiCarousel>
                  {ServiceData.map((ServiceDataIndex, index) => (
                    <ServiceCardFunc key={index} {...ServiceDataIndex} />
                  ))}
                </MultiCarousel>
              </div>
            </div>
          </div>
        </div>
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
