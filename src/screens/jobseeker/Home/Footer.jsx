import React from "react";
import "../../../css/jobseeker/Footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AiFillTwitterSquare} from "react-icons/ai";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="image_header">
      <img className="footer_img"
            src= "jobseeker/footertop.png"
            alt="_"
          />
      </div>
      <div className="footer">
        <div className="Foot">
          <div className="card">
            <div className="card-1">
              <img
                src="/images.png"
                alt=""
                style={{width:"30px",height:"30px"}}
              />
              <h3 className="connect_us_heading">Connect With Us</h3>
              <div className="footer_social_icons">
                <a href="https://www.facebook.com/" target="_blank">
                  <FacebookRoundedIcon sx={{transform:"scale(1.5)",color:"#000000"}} />
                </a>
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <LinkedInIcon sx={{transform:"scale(1.5)", color:"#000000"}} />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <InstagramIcon sx={{transform:"scale(1.5)",color:"#000000"}} />
                </a>
                <a href="https://twitter.com/home" target="_blank">
                  <AiFillTwitterSquare style={{transform:"scale(2.4)",padding:"0rem 0rem 0rem 0rem",color:"#000000"}}/>

                </a>
              </div>
            </div>
            <div className="card-2">
              <a href="/">About US</a>
              <a href="/">Career</a>
              <a href="/">Employer</a>
              <a href="/">Sitemap</a>
            </div>
            <div className="card-2">
              <a href="/">About US</a>
              <a href="/">Career</a>
              <a href="/">Employer</a>
              <a href="/">Sitemap</a>
            </div>
            <div className="card-3">
              <h2 className="card_3_main_head">Headquarters</h2>
              <h3 className="card_3_main_sub_head">
                Hyderabad, <br /> Telangana <br /> 500084, IN
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
