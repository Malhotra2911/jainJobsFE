import React from "react";
import "../../../css/jobseeker/StoryClub.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import { ImLinkedin } from "react-icons/im";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare} from "react-icons/ai";
import InstagramIcon from '@mui/icons-material/Instagram';
import MultiCarouselStory from "./StoryCarousel/MultiCarouselStory";
import NavbarJS from "../Home/NavbarJS";
import { useDispatch,useSelector } from 'react-redux'
import Footer from "../Home/Footer";
import { getStorys } from "../../../redux/action/CommonAction";

export default function StoryClub() {
  const dispatch = useDispatch();
  const StorysData = useSelector(
    (state) => state.CommonReducer.storys
  );
  // const Loading = (lyd) => {
  //   dispatch(CircularLoding(lyd));
  // }
  console.log(StorysData);
  React.useEffect(() => {
    // getcv();
    dispatch(getStorys());
  }, []);

  return (
    <>
    <NavbarJS/>
    <div className="storycontainer_main">
      <div className="multicarousel_container">
        <div className="storyclub_carousel">
          <MultiCarouselStory>
            {StorysData.map((story)=>{
              <img src={story.IMAGE} alt="" />
              console.log(story.IMAGE);
            })}
            {/* <img src="jobseeker/A2.png" alt="" />
            <img src="jobseeker/A3.png" alt="" />
            <img src="jobseeker/A4.png" alt="" />
            <img src="jobseeker/A1.png" alt="" />
            <img src="jobseeker/A1.png" alt="" />
            <img src="jobseeker/A1.png" alt="" /> */}
          </MultiCarouselStory>
        </div>
      </div>
      <div className="mystorycontainer_main">
        <h2 className="Story_heading">My Story</h2>
        <div className="mystoryimg_content">
          <div className="mystoryimg">
            <img src="jobseeker/A1.png" alt="" />
          </div>
          <div className="mystorycontent">
            <p>
              Global Case Management System (GCMS) is a centralized system used
              by Immigration, Refugees and Citizenship Canada (IRCC) to process
              applications for immigration and citizenship. The GCMS notes
              contains detailed records of each application to IRCC, which
              includes, the complete application file, the supporting documents
              processing of the applications. They also help in knowing the
              status of the application and taking the necessary steps, if
              required.
            </p>
            <br />
            <p>
              Global Case Management System (GCMS) is a centralized system used
              by Immigration, Refugees and Citizenship Canada (IRCC) to process
              applications for immigration and citizenship. The GCMS notes
              contains detailed records of each application to IRCC, which
              includes, the complete application file, the supporting documents
              submitted by the applicant, correspondences sent to and/or from
              required.
            </p>
            <br/>
            <p>
              Global Case Management System (GCMS) is a centralized system used
              by Immigration, Refugees and Citizenship Canada (IRCC) to process
              applications for immigration and citizenship. The GCMS notes
              contains detailed records of each application to IRCC, which
              us of the application and taking the necessary steps, if
              required.
            </p>
          </div>
        </div>
      </div>
      <div className="mystory_youtube">
        <h2 className="mystoryyoutube_heading">My Youtube Videos</h2>
        <iframe className="youtube_iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E_gYhUSlaUs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mystory_last_container">
        <div className="last_heading">
            <h2>Personal Information</h2>
        </div>
        <div className="last_content">
            <div className="last_content_left">
            <img src="jobseeker/A1.png" alt="" />

            </div>
            <div className="last_content_right">
                <h3>Name: Akash Singh</h3>
                <h3>Education : Btech (Computer Science)</h3>
                <h3>Company : Techjain It Solution</h3>
                <h3>Awards : National In Cricket</h3>
                <h3>Awards : Best Player  In Cricket</h3>
                <h3>Achievements :National In Cricket</h3>
                <h3 className="socialmedia_iconstory">Social Media :
                <a href="/">
                  <FacebookRoundedIcon sx={{transform:"scale(1.5)",color:"#000000"}} />
                </a>
                <a href="/">
                  <LinkedInIcon sx={{transform:"scale(1.5)", color:"#000000"}} />
                </a>
                <a href="/">
                  <InstagramIcon sx={{transform:"scale(1.5)",color:"#000000"}} />
                </a>
                <a href="/">
                  <AiFillTwitterSquare  className="twitterstory"  style={{transform:"scale(2.1)",marginTop:".2rem" ,padding:"0rem 0rem 0rem 0rem",color:"#000000"}}/>

                </a>
                </h3>
                <h3>Portfolio: akashsingh39/behance.net</h3>

            </div>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}
