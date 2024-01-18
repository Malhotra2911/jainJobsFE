import { NavLink,Link } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { TbTrack } from "react-icons/tb";
import { AiFillSave } from "react-icons/ai";
import { FeedbackForm } from "../../JobSeeker/FeedbackForm/FeedbackForm";
import { useState } from "react";
import { MdFeedback } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "../../../css/jobseeker/JobSeekerdashboard.css";
import FaqEmployer from "../FaqEmployer/FaqEmployer";

const SideBar = ({ children }) => {
  const [feedback, setFeedback] = useState(false);
  const [faqEmp, setFaqEmp] = useState(false);

  
  const [isOpen, setIsOpen] = useState(true);
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
                ><Link to="/" style={{ listStyle: "none" }}>
                    <img style={{width:"40px",height:"40px"}} src="/images.png" alt="FMN" />
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
              to="/AllJobs"
              // key={index}
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
                    Job Posting
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink
              to="/createjobpost"
              // key={index}
              className="link"
              activeclassname="active"
            >
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
                    Create Job Post
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>


            <NavLink
              to="/Notification"
              className="link"
              activeclassname="active"
            >
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
                    Notification
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
                    Jain Jobs Blogs &amp; Activity
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink
              to="/acessfromdb"
              className="link"
              activeclassname="active"
            >
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
                    Jobseeker Data
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>{" "}
            <NavLink
              to="/activitybook"
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
                    Activity Book
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink
              to="/freelance"
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
                    Freelancing
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <h3
              className="link"
              activeclassname="active"
              onClick={() => setFaqEmp(true)}
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
            {faqEmp && <FaqEmployer FaQ={setFaqEmp} />}
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
