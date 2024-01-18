import React, { useState } from "react";
import "../../../css/jobseeker/UserProfileForm.css";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserProfile } from "../../../redux/action/JobSeekerAction";
import { CircularLoding, GetUserAction } from "../../../redux/action/AuthAction";
import { ImageBackend } from "../../../config/Config";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F7701D",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D",
    },
    "&:hover fieldset": {
      borderColor: " #F7701D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D",
    },
  },
});

export default function UserProfileForm() {
  const initialdata = { F_NAME: "", M_NAME: "", L_NAME: "", EMAIL: "", PROFILEPIC: "", PHONENO: "", DOB: "", CURRENTADDRESS: "", PERMANENTADDRESS: "", AREAOFINTREST: "", CV: "" };
  const [isFrom, setisFrom] = useState(initialdata);
  const [isUpdateid, setUpdateid] = useState(false);
  const [file, setFile] = useState();
  const [ispareadonly, setispareadonly] = useState(false);
  const { user, scope } = useSelector((state) => state.AuthReducer);
  const fixedOptions = [scope];
  const [isAutocompletevalue, setAutocompletevalue] = React.useState([]);
  const [isAvalue, setAvalue] = React.useState([]);
  const [Datevalue, setDateValue] = React.useState();
  const dispatch = useDispatch();
  const handleChangeDate = newValue => setDateValue(newValue); 
  const onChangeText = (e) => {
    const { name, value } = e.target;
    setisFrom({ ...isFrom, [name]: value });
  };
  const onChangeFile = (e) => {
    const { name, files } = e.target;
    setisFrom({ ...isFrom, [name]: files[0] });
  };
  const handleChange = e => setFile(URL.createObjectURL(e.target.files[0]));
  React.useEffect(() => {
    _userdatafunction();
  }, [user]);
  
  const _userdatafunction = () => {
    setisFrom({
      F_NAME: user.F_NAME,
      M_NAME: user.M_NAME,
      L_NAME: user.L_NAME,
      EMAIL: user.EMAIL,
      PROFILEPIC: user.PROFILEPIC,
      PHONENO: user.PHONENO,
      DOB: user.DOB,
      CURRENTADDRESS: user.CURRENTADDRESS,
      PERMANENTADDRESS: user.PERMANENTADDRESS,
      AREAOFINTREST: user.AREAOFINTREST,
      CV: user.CV,
    });
    setFile(ImageBackend + user.PROFILEPIC);
    setDateValue(user.DOB);
    setUpdateid(user.USER_ID);
    setAutocompletevalue(user.AREAOFINTREST ? JSON.parse(user.AREAOFINTREST) : []);

    if (user.CURRENTADDRESS === user.PERMANENTADDRESS) {
      setispareadonly(true)
    }
    else {
      setispareadonly(false)
    }

  };
  const Loading = (lyd) => { dispatch(CircularLoding(lyd)) };
  const reloaduser = () => { dispatch(GetUserAction()) };
  const _SubmitForm = () => {
    const useformdata = new FormData();
    useformdata.append("F_NAME", isFrom.F_NAME);
    useformdata.append("M_NAME", isFrom.M_NAME);
    useformdata.append("L_NAME", isFrom.L_NAME);
    useformdata.append("EMAIL", isFrom.EMAIL);
    useformdata.append("PROFILEPIC", isFrom.PROFILEPIC);
    useformdata.append("PHONENO", isFrom.PHONENO);
    useformdata.append("DOB", Datevalue.toString());
    useformdata.append("CURRENTADDRESS", isFrom.CURRENTADDRESS);
    useformdata.append("PERMANENTADDRESS", isFrom.PERMANENTADDRESS);
    useformdata.append("AREAOFINTREST", JSON.stringify(isAutocompletevalue));
    useformdata.append("CV", isFrom.CV);
    useformdata.append("USER_ID", isUpdateid);

    dispatch(UpdateUserProfile(useformdata, reloaduser, Loading));
  };
  const _matchaddress = (e) => {
    if (e.target.checked) {
      setispareadonly(true);
      setisFrom({ ...isFrom, 'PERMANENTADDRESS': isFrom.CURRENTADDRESS });
    }
    if (!e.target.checked) {
      setispareadonly(false);
    }
  };
  const _defaultcheck = () => {
    if (isFrom.CURRENTADDRESS === isFrom.PERMANENTADDRESS) {
      return true
    }
    else {
      return false
    }
  }

  return (
    <div className="useprofile_container">
      <JobSeekerdashboard />
      <div className="Profile_Form_content">
        <DashboardProfile />
        <div className="UserProfileForm">
          <div className="UserProfile">
            <form onSubmit={_SubmitForm}>
              <div className="form">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "70%" },
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 0,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Avatar
                    alt="PROFILEPIC"
                    src={file}
                    sx={{ width: 96, height: 96 }}
                  />
                  <IconButton
                    sx={{ background: "#FFFFFF", mt: -5, mr: -10 }}
                    aria-label="upload picture"
                    component="label"
                  >
                    <input hidden accept="image/*" type="file" name="PROFILEPIC" onChange={(e) => { handleChange(e); onChangeFile(e) }} />
                    <PhotoCamera />
                  </IconButton>
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    label="First Name"
                    onChange={onChangeText}
                    name="F_NAME"
                    value={isFrom.F_NAME}
                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    label="Middle Name"
                    onChange={onChangeText}
                    name="M_NAME"
                    value={isFrom.M_NAME}

                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    label="Last Name"
                    onChange={onChangeText}
                    name="L_NAME"
                    value={isFrom.L_NAME}

                  />
                  <CssTextField
                    sx={{ color: " #F7701D", width: "70%" }}
                    required
                    id="outlined-required"
                    color="warning"
                    label="Email"
                    onChange={onChangeText}
                    name="EMAIL"
                    value={isFrom.EMAIL}

                  />
                  <CssTextField
                    required
                    id="outlined-number"
                    label="Phone Number"
                    type="number"
                    onChange={onChangeText}
                    name="PHONENO"
                    value={isFrom.PHONENO}

                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="DOB"
                      inputFormat="MM/dd/yyyy"
                      value={Datevalue}
                      onChange={handleChangeDate}
                      renderInput={(params) => <TextField {...params} />}
                      name="DOB"
                    />
                  </LocalizationProvider>
                  <CssTextField
                    id="outlined-multiline-static"
                    label="Current Address"
                    multiline
                    color="warning"
                    rows={3}
                    onChange={onChangeText}
                    name="CURRENTADDRESS"
                    value={isFrom.CURRENTADDRESS}
                  />
                  <FormGroup sx={{ width: "70%" }}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked={_defaultcheck} color="warning" onClick={_matchaddress} />}
                      label="Same as current address"
                    />
                  </FormGroup>
                  <CssTextField
                    id="outlined-multiline-static"
                    label="Permanent Address"
                    multiline
                    color="warning"
                    rows={3}
                    onChange={onChangeText}
                    name="PERMANENTADDRESS"
                    value={isFrom.PERMANENTADDRESS}
                    disabled={ispareadonly ? true : false}
                  />
                  <div className="label_box">
                    <label htmlFor="">Upload CV</label>
                  </div>
                  <Button
                    sx={{
                      width: "70%",
                      height: "15vh",
                      justifyContent: "space-around",
                      mt: 2,
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
                    Drag and Drop or Browse File
                    <input hidden accept="image/*" multiple type="file" onChange={onChangeFile} name="CV" />
                  </Button>
                  <label htmlFor="">or</label>
                  <Button
                    variant="contained"
                    className="profile_btn"
                    sx={{
                      width: "70%",
                      height: "7vh",
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
                    Create Resume + Cover Letter
                  </Button>

                  <Autocomplete
                    color="warning"
                    sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}
                    multiple
                    id="outlined-multiline-static"
                    value={isAutocompletevalue}
                    onChange={(event, newValue) => {
                      setAutocompletevalue([
                        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                      ]);
                    }}
                    options={scope}
                    getOptionLabel={(option) => option.FIELD_NAME}
                    renderTags={(tagValue, getTagProps) =>
                      tagValue.map((option, index) => (
                        <Chip
                          variant="outlined"
                          label={option.FIELD_NAME}
                          {...getTagProps({ index })}
                          disabled={fixedOptions.indexOf(option) !== -1}
                        />
                      ))
                    }
                    style={{ width: 500 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Area of Intrest"
                        placeholder="Search" />
                    )}
                  />

                  <Button
                    variant="contained"
                    className="profile_btn"
                    type="button"
                    onClick={_SubmitForm}
                    sx={{
                      width: "70%",
                      height: "7vh",
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
