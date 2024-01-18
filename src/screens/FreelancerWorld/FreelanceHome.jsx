import * as React from "react";
import "../../css/Freelancer/FreelanceHome.css";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Audioanswer } from "../../components/JobSeeker/ApplayQuestions/AudioAnswer/Audioanswer";
import { CssTextField } from "../../css/Employer/MaterialUicss/OwnCompany";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  createFreelancing,
  updateFreelancing,
} from "../../redux/action/EmployerAction";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function FreelanceHome({ Freelance, iseditdata }) {
  const [image, setImage] = React.useState("");
  const [creatorname, setCreatorName] = React.useState("");
  const [companyname, setCompanyName] = React.useState("");
  const [companyweb, setCompanyWeb] = React.useState("");
  const [filedesc, setFileDesc] = React.useState("");
  const [textdesc, setTextDesc] = React.useState("");
  const [isminbit, setminbit] = React.useState("");
  const [isreqfor, setreqfor] = React.useState([]);
  const [isupdateid, setupdateid] = React.useState(null);
  const dispatch = useDispatch();
  const { scope } = useSelector((state) => state.AuthReducer);

  React.useEffect(() => {
    if (iseditdata) {
      setImage(iseditdata.COMPANY_IMAGE);
      setCreatorName(iseditdata.CREATER_NAME);
      setCompanyName(iseditdata.COMPANY_NAME);
      setCompanyWeb(iseditdata.COMPANY_WEBSITE);
      setFileDesc(iseditdata.FILE_DESCRIPTION);
      setTextDesc(iseditdata.TEXT_DESCRIPTION);
      setminbit(iseditdata.MIN_BATAMT);
      setreqfor(JSON.parse(iseditdata.REQTYPE));
      setupdateid(iseditdata.FREELANCE_JOB_ID);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Company Image is required");
      return false;
    } else if (!creatorname) {
      toast.error("Creater Name  is required");
      return false;
    } else if (!companyname) {
      toast.error("Company Name  is required");
      return false;
    } else if (!companyweb) {
      toast.error("Company Website  is required");
      return false;
    } else if (!filedesc) {
      toast.error("Put the audio or video file about your company");
      return false;
    } else if (!textdesc) {
      toast.error("fill the details of the project");
      return false;
    } else if (!isminbit) {
      toast.error("please fill min bat ammount");
      return false;
    }

    dispatch(
      createFreelancing(
        image,
        creatorname,
        companyname,
        companyweb,
        filedesc,
        textdesc,
        isminbit,
        JSON.stringify(isreqfor)
      )
    );
  };

  const handleupdate = () => {
    if (!image) {
      toast.error("Company Image is required");
      return false;
    } else if (!creatorname) {
      toast.error("Creater Name  is required");
      return false;
    } else if (!companyname) {
      toast.error("Company Name  is required");
      return false;
    } else if (!companyweb) {
      toast.error("Company Website  is required");
      return false;
    } else if (!filedesc) {
      toast.error("Put the audio or video file about your company");
      return false;
    } else if (!textdesc) {
      toast.error("fill the details of the project");
      return false;
    } else if (!isminbit) {
      toast.error("please fill min bat ammount");
      return false;
    }

    dispatch(
      updateFreelancing(
        image,
        creatorname,
        companyname,
        companyweb,
        filedesc,
        textdesc,
        isminbit,
        JSON.stringify(isreqfor),
        isupdateid
      )
    );
  };
  const handleClose = () => Freelance(false);
  return (
    <div style={{ ouline: "none", border: "none" }}>
      <Modal
        open={Freelance}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="EmployeeHome_main">
          <div className="employeehomepage">
            <div className="employee_header">
              <div className="employee_header_left">
                <h2 className="headeremployee">
                  Post a job today, hire
                  <br /> tomorrow
                </h2>
              </div>
              <div className="employee_header_right">
                <img
                  src="freeLancepic.png"
                  alt=""
                  className="employeehome_header_img"
                />{" "}
              </div>
            </div>
            <div className="employer_home_landing">
              <div className="employee_profile">
                <IconButton aria-label="upload picture" component="label">
                  <Avatar
                    alt="PROFILEPIC"
                    src={image}
                    sx={{ width: 96, height: 96 }}
                  />
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => setImage(e.target.value)}
                    name="PROFILEPIC"
                  />
                  <PhotoCamera
                    sx={{
                      zIndex: "2",
                      mt: 7,
                      ml: -3,
                      background: "#FFFFFF",
                      borderRadius: "17px",
                      padding: "0.1rem",
                    }}
                  />
                </IconButton>
              </div>
              <div className="employee_home_form">
                <form>
                  <p>Recorded Audio or Video file </p>
                  <Button
                    sx={{
                      width: "100%",
                      height: "7vh",
                      justifyContent: "space-around",
                      mb: 2,
                      textTransform: "none",
                      border: "1px dashed #F7701D",
                      color: "#000000",
                    }}
                    color="warning"
                    variant="outlined"
                    component="label"
                  >
                    <CloudUploadIcon color="warning" />
                    Drag and Drop &nbsp; or &nbsp; Browse File
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      onChange={(e) => setFileDesc(e.target.value)}
                      name="CV"
                    />
                  </Button>
                  <CssTextField
                    sx={{ color: " #F7701D", width: "100%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    variant="standard"
                    focused
                    size="small"
                    onChange={(e) => setCreatorName(e.target.value)}
                    label="Creater Name"
                    name="creatername"
                    value={creatorname}
                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "100%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    variant="standard"
                    focused
                    onChange={(e) => setCompanyName(e.target.value)}
                    size="small"
                    label="Company Name"
                    name="companyname"
                    value={companyname}
                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "100%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    variant="standard"
                    focused
                    onChange={(e) => setCompanyWeb(e.target.value)}
                    size="small"
                    label="Company Website"
                    name="companyweb"
                    value={companyweb}
                  />

                  <CssTextField
                    sx={{ color: " #F7701D", width: "100%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    variant="standard"
                    focused
                    type="number"
                    onChange={(e) => setminbit(e.target.value)}
                    size="small"
                    label="min bat"
                    name="minbat"
                    value={isminbit}
                  />

                  <CssTextField
                    sx={{ color: " #F7701D", width: "100%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    variant="standard"
                    onChange={(e) => setTextDesc(e.target.value)}
                    focused
                    multiline
                    rows={3}
                    size="small"
                    label="Completed Project Description"
                    name="Completed Project Description"
                    value={textdesc}
                  />

                  <FormControl
                    variant="standard"
                    sx={{ color: " #F7701D", width: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Looking For
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="outlined-required"
                      color="warning"
                      value={isreqfor}
                      size="small"
                      label="Job Industry"
                      name="JobIndustry"
                      multiple
                      onChange={(e) => setreqfor(e.target.value)}
                    >
                      {scope &&
                        scope.length !== 0 &&
                        scope.map((option, index) => (
                          <MenuItem value={option.FIELD_NAME}>
                            {option.FIELD_NAME}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>

                  <div className="freelance_btns">
                    {!isupdateid ? (
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        className="profile_btn"
                        sx={{
                          width: "40%",
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
                        Create Post
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleupdate}
                        className="profile_btn"
                        sx={{
                          width: "40%",
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
                        update
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
