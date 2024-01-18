import React from "react";
import "../../../css/Employer/OwnCompany.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { theme } from "../../../css/style";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import {
  ThemeProvider,
  Modal,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import PostCreatedModal from "../Popups/PostCreatedModal";
import { ImageBackend } from "../../../config/Config";
import { CustomSelect, CssTextField,PrettoSlider,Boxtab,RadioBtn } from "../../../css/Employer/MaterialUicss/OwnCompany"

function valuetext(value) {
  return `${value} Lakh`;
}
function yeartext(year) {
  return `${year} Year`;
}

const marks = [
  {
    value: 0,
    label: "0 Lakh",
  },
  {
    value: 40,
    label: "40 Lakh",
  },
  {
    value: 100,
    label: "1 Cr.",
  },
];
const yearmarks = [
  {
    value: 0,
    label: "0 Yr",
  },
  {
    value: 10,
    label: "10 Yr",
  },
  {
    value: 30,
    label: "30 Yr",
  },
];

const kmmarks = [
  {
    value: 0,
    label: "0 Km",
  },
  {
    value: 500,
    label: "500 Km",
  },
  {
    value: 1000,
    label: "1000 Km",
  },
];

export default function JobDescriptionContent({ CloseOwnCompany }) {
  const [isAdditionalinformation, setisAdditionalinformation] = useState(null);
  let navigate = useNavigate();
  const [value, setValue] = React.useState([0, 20]);
  const [rolevalue, setRoleValue] = React.useState(null);
  const [industry, setIndustry] = React.useState(null);
  const [locationvalue, setLocationsValue] = React.useState(null);
  const [skillvalue, setSkillsValue] = React.useState([]);
  const [companyimage, setcompanyimage] = React.useState(null);
  const [companyProfile, setcompanyProfile] = React.useState(null);
  const [companyDesc, setcompanyDesc] = React.useState(null);
  const [isImageUrl, setisImageUrl] = useState(null);
  const location = useLocation();
  const [isuserid, setisuserid] = useState(null);
  const [year, setYear] = React.useState([0, 7]);
  const [islocationrange, setlocationrange] = React.useState([0, 125]);
  const [jobPosition, setJobPosition] = React.useState("");
  const [workMode, setWorkMode] = React.useState("");
  const [renumType, setRenumType] = React.useState("");
  const [isModal, setModal] = useState(false);
  const { mycreatedpost } = useSelector((state) => state.EmployerReducer);

  const handleChange = (event, newValue) => setValue(newValue);
  const handleChangeYear = (event, newYear) => setYear(newYear);
  const handleChangeLocationn = (event, newLocationn) =>
    setlocationrange(newLocationn);
  const { industrytype, categorytype, cities } = useSelector(
    (state) => state.CommonReducer
  );
  const { scope } = useSelector((state) => state.AuthReducer);
  let postId = new URLSearchParams(location.search).get("postId");

  React.useEffect(() => {
    let postId = new URLSearchParams(location.search).get("postId");
    if (postId) {
      const decodedid = atob(postId);
      setisuserid(decodedid);
      const data = mycreatedpost.filter((filterdata) => filterdata.JOB_ID == parseInt(decodedid));
      if (data && data.length !== 0) {
        setRoleValue(data[0].JOB_CATEGORY ? data[0].JOB_CATEGORY : 1);
        setIndustry(data[0].JOB_INDUSTRY ? data[0].JOB_INDUSTRY : 1);
        // joblocation
        setLocationsValue(data[0].JOB_LOCATION);
        setSkillsValue(data[0].SKILLS ? JSON.parse(data[0].SKILLS) : []);
        //location Range
        setlocationrange(data[0].JOB_LOCATION_RANGE);
        setRenumType(data[0].TYPE_OF_JOB);
        setJobPosition(data[0].JOB_POSITION);
        setWorkMode(data[0].MODE_OF_WORK);
        setValue(JSON.parse(data[0].SALARY_ANNUM));
        setYear(JSON.parse(data[0].EXPERIENCE));
        setcompanyProfile(data[0].COMPANY_PROFILE);
        setcompanyimage(data[0].IMAGE);
        setisImageUrl(data[0].IMAGE);
        setcompanyDesc(data[0].JOB_DESCRIPTION);
        setisAdditionalinformation(data[0].JOB_ADDITIONAL_INFORMATION);
      }
    }
  }, []);

  const handleSubmit = () => {
    let postId = new URLSearchParams(location.search).get("postId");
    if (
      rolevalue &&
      industry &&
      skillvalue &&
      locationvalue &&
      renumType &&
      jobPosition &&
      workMode &&
      value &&
      companyimage &&
      companyProfile &&
      companyDesc
    ) {
      const newForm = new FormData();
      newForm.append("JOB_ID", isuserid);
      newForm.append("JOB_CATEGORY", rolevalue);
      newForm.append("JOB_INDUSTRY", industry);
      newForm.append("SKILLS", JSON.stringify(skillvalue));
      newForm.append("JOB_LOCATION", locationvalue);
      newForm.append("JOB_LOCATION_RANGE", islocationrange);
      newForm.append("TYPE_OF_JOB", renumType);
      newForm.append("JOB_POSITION", jobPosition);
      newForm.append("MODE_OF_WORK", workMode);
      newForm.append("SALARY_ANNUM", JSON.stringify(value));
      newForm.append("EXPERIENCE", JSON.stringify(year));
      newForm.append("IMAGE", companyimage);
      newForm.append("COMPANY_PROFILE", companyProfile);
      newForm.append("JOB_DESCRIPTION", companyDesc);
      newForm.append("JOB_ADDITIONAL_INFORMATION", isAdditionalinformation);
      newForm.append("updateid", 0);
      axiosInstance
        .post("employer/createPost?creation=update", newForm)
        .then((result) => {
          if (result.data.status === 1) {
            toast.success(result.data.message);
            setModal(true);
          }
          if (result.data.status === 0) {
            toast.error("Error! somthing wen't wrong");
          }
        });
    } else {
      toast.error("Please Complete All Fields!!");
    }
  };

  return (
    <>
      <Modal
        open={true}
        onClose={CloseOwnCompany}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="OwnCompany">
          <div className="job_desc_container">
            <div className="Owncompany">
              <p className="own-head_desc">Job Description Details</p>
              <br />
              <form className="owncompany_form">
                <div className="own-form">
                  <ThemeProvider
                    theme={theme}
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Boxtab
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Designition
                        </InputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          size="small"
                          focused
                          color="warning"
                          value={parseInt(rolevalue)}
                          label="designation"
                          name="designation"
                          onChange={(e) => setRoleValue(e.target.value)}
                        >
                          {categorytype &&
                            categorytype.length !== 0 &&
                            categorytype.map((data, index) => (
                              <MenuItem value={data.JC_ID}>
                                {data.JC_NAME}
                              </MenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>
                      <br />

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Job Industry
                        </InputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          color="warning"
                          size="small"
                          value={parseInt(industry)}
                          label="Job Industry"
                          name="JobIndustry"
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          {industrytype &&
                            industrytype.length !== 0 &&
                            industrytype.map((data, index) => (
                              <MenuItem value={data.JI_ID}>
                                {data.JI_NAME}
                              </MenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>

                      <br />
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Skill's
                        </InputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          color="warning"
                          size="small"
                          value={skillvalue}
                          label="Skill's"
                          name="JobIndustry"
                          // multiple
                          onChange={(e) => setSkillsValue(e.target.value)}
                        >
                          {scope &&
                            scope.length !== 0 &&
                            scope.map((option, index) => (
                              <MenuItem value={option.SCOPE_ID}>
                                {option.FIELD_NAME}
                              </MenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>

                      <br />
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Job Industry
                        </InputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          color="warning"
                          size="small"
                          value={parseInt(locationvalue)}
                          label="Job Industry"
                          name="JobIndustry"
                          onChange={(e) => setLocationsValue(e.target.value)}
                        >
                          {cities &&
                            cities.length !== 0 &&
                            cities.map((option, index) => (
                              <MenuItem value={option.CITY_ID}>
                                {` ${option.CITY_NAME},${option.STATE_NAME},${option.COUNRTY_NAME}`}
                              </MenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>
                      <br />

                      <label htmlFor="Location" className="label_text">
                        Location Range
                      </label>
                      <Slider
                        sx={{
                          color: "#F7701D",
                          width: "70%",
                          mt: 2,
                          height: 0.25,
                        }}
                        aria-label="Location Range"
                        getAriaValueText={(data) => data + "km"}
                        valueLabelDisplay="auto"
                        step={5}
                        marks={kmmarks}
                        min={0}
                        max={1000}
                        value={islocationrange && parseInt(islocationrange)}
                        onChange={handleChangeLocationn}
                      />

                      <br />
                      <FormControl style={{ width: '100%' }}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Type Of Job :
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue={renumType}
                          value={renumType}
                          onChange={(e) => {
                            setRenumType(e.target.value);
                          }}
                        >
                          <FormControlLabel
                            value="fulltime"
                            control={<Radio color="warning" />}
                            label="Full-Time"
                          />
                          <FormControlLabel
                            value="parttime"
                            control={<Radio color="warning" />}
                            label="Part-Time"
                          />
                          <FormControlLabel
                            value="intern"
                            control={<Radio color="warning" />}
                            label="Intern"
                          />
                          <FormControlLabel
                            value="contract"
                            control={<Radio color="warning" />}
                            label="Contractual"
                          />
                        </RadioGroup>
                      </FormControl>
                      <br />
                      <FormControl style={{ display: "flex",width:"100%" }}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Type Of Job Position :
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue={jobPosition}
                          value={jobPosition}
                          onChange={(e) => {
                            setJobPosition(e.target.value);
                          }}
                        >
                          <FormControlLabel
                            value="salary"
                            control={<Radio color="warning" />}
                            label="Salaried"
                          />
                          <FormControlLabel
                            value="stipened"
                            control={<Radio color="warning" />}
                            label="Stipend"
                          />
                          <FormControlLabel
                            value="intern"
                            control={<Radio color="warning" />}
                            label="Intern"
                          />
                          <FormControlLabel
                            value="contract"
                            control={<Radio color="warning" />}
                            label="Contractual-Payment"
                          />
                        </RadioGroup>
                      </FormControl>
                      <br />
                      <FormControl sx={{ width: "100%" }}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Remote/Onsite Job
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          defaultValue={workMode}
                          value={workMode}
                          onChange={(e) => {
                            setWorkMode(e.target.value);
                          }}
                          sx={{ display: "flex", flexDirection: "row" }}
                        >
                          <FormControlLabel
                            value="Remote"
                            control={<RadioBtn color="warning" />}
                            label="Remote"
                          />
                          <FormControlLabel
                            value="Hybrid"
                            control={<RadioBtn color="warning" />}
                            label="Hybrid"
                          />
                          <FormControlLabel
                            value="Onsite"
                            control={<RadioBtn color="warning" />}
                            label="Onsite"
                          />
                        </RadioGroup>
                      </FormControl>
                      <br />

                      <label htmlFor="Salary/Annum" className="label_text">
                        Salary/Annum
                      </label>
                      <PrettoSlider
                        sx={{
                          color: "#F7701D",
                          width: "70%",
                          mt: 2,
                          height: 0.25,
                        }}
                        getAriaLabel={(data) => data + "LPA"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="on"
                        marks={marks}
                        min={0}
                        max={100}
                        getAriaValueText={valuetext}
                      />

                      {/* <div className="label_tag"> */}
                      <br />
                      <label htmlFor="Experience" style={{ marginTop: "1rem" }}>
                        Experience
                      </label>
                      <PrettoSlider
                        sx={{
                          color: "#F7701D",
                          width: "70%",
                          mt: 2,
                          height: 0.25,
                        }}
                        getAriaLabel={() => "Temperature range"}
                        value={year}
                        onChange={handleChangeYear}
                        valueLabelDisplay="on"
                        marks={yearmarks}
                        min={0}
                        max={30}
                        getAriaValueText={yeartext}
                      />
                      <Tooltip title="Upload Company Logo">
                        <Avatar
                          alt="PROFILEPIC"
                          src={
                            isImageUrl ? isImageUrl : companyimage + isImageUrl
                          }
                          sx={{ width: 96, height: 96 }}
                        />
                      </Tooltip>
                      <IconButton
                        sx={{ background: "#FFFFFF", mt: -5, mr: -10 }}
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          accept="image/*"
                          type="file"
                          name="PROFILEPIC"
                          onChange={(e) => {
                            setcompanyimage(e.target.files[0]);
                            setisImageUrl(
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                        />
                        <PhotoCamera />
                      </IconButton>
                      <label
                        htmlFor=""
                        style={{ textAlign: "center", marginTop: "1rem" }}
                      >
                        Upload Company Logo{" "}
                      </label>
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        id="outlined-multiline-static"
                        label="Company Profile"
                        value={companyProfile}
                        multiline
                        color="warning"
                        rows={3}
                        onChange={(e) => {
                          setcompanyProfile(e.target.value);
                        }}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        id="outlined-multiline-static"
                        label="Job Description"
                        value={companyDesc}
                        color="warning"
                        multiline
                        rows={3}
                        onChange={(e) => {
                          setcompanyDesc(e.target.value);
                        }}
                      />

                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        // fullWidth
                        id="outlined-multiline-static"
                        label="Additional Information"
                        value={isAdditionalinformation}
                        color="warning"
                        multiline
                        rows={3}
                        onChange={(e) => {
                          setisAdditionalinformation(e.target.value);
                        }}
                      />
                    </Boxtab>
                  </ThemeProvider>
                </div>
                <Button
                  variant="contained"
                  className="profile_btn"
                  onClick={() => handleSubmit()}
                  sx={{
                    width: "30%",
                    mt: 2,
                    mb: 2,
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                    },
                  }}
                >
                  Post a Job
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      {isModal && <PostCreatedModal Greatpopup={setModal} postId={postId} />}
    </>
  );
}
