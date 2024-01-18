import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import "../../css/jobseeker/Faq.css";
import FaqData from "../../mockJson/FaqData"
import "./FaqTab.css"
import "../../css/Employer/FaqEmployer.css";
import FaqEmployerData from "../../mockJson/FaqEmployerData";
import "../FaqFreelancer/FaqFreelancer.css";
import FaqFreelancerData from "../../mockJson/FaqFreelancerData";




import Box from '@mui/material/Box';
import Faq from "../../components/JobSeeker/UserDashboardProfile/Faq"
import FaqEmployer from "../../components/Employer/FaqEmployer/FaqEmployer"
import FaqFreelancer from "../FaqFreelancer/FaqFreelancer"
import NavbarJS from '../jobseeker/Home/NavbarJS';
import Footer from '../jobseeker/Home/Footer';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: '100%', display: "flex", flexDirection: "column", gap: "1rem" }}>
      <NavbarJS />
      <Box sx={{ width: '100%',marginTop:"5rem"}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="JobSeeker" {...a11yProps(0)} />
            <Tab label="Employer" {...a11yProps(1)} />
            <Tab label="Freelancer" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

          <div className="faq_Containertab">
            <div className="faq_container_content">
              <div className="faqup_container">
                <div className="faqup_left">
                  <h1>Hi, how we help you?</h1>
                  <h1>FAQ</h1>
                </div>
                <div className="faqup_right">
                  <img src="jobseeker/FaqImage.png" alt="_" />
                </div>
              </div>
            </div>
            <div className="accordion">
              {FaqData.map((item, i) => (
                <div className="item">
                  <div className="title" onClick={() => toggle(i)}>
                    <h6 className="questionno">{item.questionno}</h6>
                    <h6 className="title_heading">{item.question}</h6>
                    <span>{selected === i ? "" : ""}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="faqEmp_ContainerTab">
            <div className="faqEmp_container_content">
              <div className="faqEmpup_container">
                <div className="faqEmpup_left">
                  <h1>Hi, how we help you?</h1>
                  <h1>FAQ</h1>
                </div>
                <div className="faqEmpup_right">
                  <img src="jobseeker/FaqImage.png" alt="_" />
                </div>
              </div>
            </div>
            <div className="accordionEmp">
              {FaqEmployerData.map((item, i) => (
                <div className="itemEmp">
                  <div className="titleEmp" onClick={() => toggle(i)}>
                    <h6 className="questionnoEmp">{item.questionno}</h6>
                    <h6 className="title_headingEmp">{item.question}</h6>
                    <span>{selected === i ? "" : ""}</span>
                  </div>
                  <div className={selected === i ? "contentEmp showEmp" : "contentEmp"}>
                    {item.answer}
                  </div>
                </div>


              ))}
            </div>
          </div>

        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="faqFrelancer_ContainerTab">
            <div className="faqFrelancer_container_content">
              <div className="faqFrelancerup_container">
                <div className="faqFrelancerup_left">
                  <h1>Hi, how we help you?</h1>
                  <h1>FAQ</h1>
                </div>
                <div className="faqFrelancerup_right">
                  <img src="jobseeker/FaqImage.png" alt="_" />
                </div>
              </div>
            </div>
            <div className="accordionFrelancer">
              {FaqFreelancerData.map((item, i) => (
                <div className="itemFrelancer">
                  <div className="titleFrelancer" onClick={() => toggle(i)}>
                    <h6 className="questionnoFrelancer">{item.questionno}</h6>
                    <h6 className="title_headingFrelancer">{item.question}</h6>
                    <span>{selected === i ? "" : ""}</span>
                  </div>
                  <div className={selected === i ? "contentFrelancer showFrelancer" : "contentEmp"}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </TabPanel>
      </Box>
      <Footer/>
    </div>
  );
}
