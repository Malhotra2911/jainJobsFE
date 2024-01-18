import { NavLink } from "react-router-dom";
import { FaBars, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { TbTrack } from "react-icons/tb";
import { AiFillSave } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { SiFreelancer } from "react-icons/si";
import { FcManager } from "react-icons/fc";
import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";
import Faq from "../UserDashboardProfile/Faq";
import { Link } from "react-router-dom";

import "../../../css/jobseeker/JobSeekerdashboard.css";
import Blogpopup from "../../../screens/jobseeker/JobseekerDashboard/Blogpopup";
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [feedback, setFeedback] = useState(false);
  const [faq, setFaq] = useState(false);
  const [blogpopup, setBlogPopup] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let showAnimation = {};
  const isMobile = window.innerWidth < 1000;
  if (!isMobile) {
    showAnimation = {
      hidden: {
        width: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
      show: {
        opacity: 1,
        width: "auto",
        transition: {
          duration: 0.5,
        },
      },
    };
  }

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={isOpen ? `sidebar ` : `sidebarclose`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <Link to="/" style={{ listStyle: "none" }}>
                    <img  style={{width:"30px",height:"30px"}} src="/images.png" alt="FMN" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            <NavLink
              to="/availablejobs"
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <MdPersonSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Jobs Available
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink to="/AppliedJob" className="link" activeclassname="active">
              <div className="icon">
                <FaUser />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Applied Jobs
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink
              to="/Applicationtrack"
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <TbTrack />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Track Your Jobs
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink to="/SavedJob" className="link" activeclassname="active">
              <div className="icon">
                <AiFillSave />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Saved Jobs
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink
              to="/TrackReferralDashboard"
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <MdOutlineContactPhone />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Track Referal
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink
              to="/blogs"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <FaBloggerB />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Blogs &amp; Activity
                  </motion.div>
                )}
              </AnimatePresence>
              {/* </h3> */}
            </NavLink>

            {blogpopup && <Blogpopup blogPopup={setBlogPopup} />}

            <NavLink
              to="/Notification"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <FaBloggerB />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Notification
                  </motion.div>
                )}
              </AnimatePresence>
              {/* </h3> */}
            </NavLink>

            {/* <NavLink
              to="/jc-frelancing"
              className="link"
              // activeclassname="active"
            >
              <div className="icon">
                <SiFreelancer />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Freelance World
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}

            <h3
              className="link"
              activeclassname="active"
              onClick={() => setFaq(true)}
            >
              <div className="icon">
                <FaQuestionCircle />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {/* Blogs &amp; Activity */}
                    FAQ
                  </motion.div>
                )}
              </AnimatePresence>
            </h3>
            {faq && <Faq FaQ={setFaq} />}

            <h3
              className="link"
              activeclassname="active"
              onClick={() => {
                setFeedback(true);
              }}
            >
              <div className="icon">
                <MdFeedback />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {/* Blogs &amp; Activity */}
                    Feedback
                  </motion.div>
                )}
              </AnimatePresence>
            </h3>
            {feedback && <FeedbackForm Feedback={setFeedback} />}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
