import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../css/Employer/ScreeningQuestion.css";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import ScreeningQn from "../AddScreeningPopup/ScreeningQn";
import { useDispatch, useSelector } from "react-redux";
import { getTemplateQuesitions } from "../../../redux/action/EmployerAction";
import { CircularLoding } from "../../../redux/action/AuthAction";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function ScreeningQuestion() {
  const [screen, setScreen] = useState(false);
  const [isuserid, setisuserid] = useState(null);
  const [isScreeningque, setisScreeningque] = useState(null)
  const [isUserSelectedque, setUserSelectedque] = useState([])
  const [isAllSelectedquesition, setAllSelectedquesition] = useState([])
  const TemplateQuesition = useSelector(state => state.EmployerReducer.getTemplateQuesitions)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }
  React.useEffect(() => {
    let postId = new URLSearchParams(location.search).get("postId");
    if (postId) {
      const decodedid = atob(postId);
      setisuserid(decodedid);
    }
  }, []);
  React.useEffect(() => {
    dispatch(getTemplateQuesitions(Loading))
  }, [])
  React.useEffect(() => {
    setisScreeningque(TemplateQuesition);
  }, [TemplateQuesition])

  function onhandleSubmit() {
    if (isAllSelectedquesition.length > 5) {
      toast.error("you can only choose maximum 5 que , for more contact to adminstator");

    }
    else {


      const newForm = {
        JOB_ID: isuserid,
        QUESTION: JSON.stringify(isAllSelectedquesition)
      }

      axiosInstance.post('employer/applyJobQue', newForm).then((result) => {
        if (result.data.status === 1) {
          Loading(false)
          toast.success(result.data.message);
          navigate('/AllJobs', { replace: true })
        }
        if (result.data.status === 0) {
          Loading(false)
          toast.error("Error! somthing wen't wrong please create screening que further")
          navigate('/AllJobs', { replace: true })
        }
      })

    }

  }

  return (
    <div>
      <div className="screen">
        <JobSeekerdashboard />
        <div className="coulmnscreen">
          <DashboardProfile />
          <div className="ChooseQuestion">
            <p className="parascr">Choose the question you want </p>
            <p className="parascr" style={{color:'red'}}>*Note: please select the type before selecting quesition </p>

            <div className="Choosequestion">
              <div className="chooseqn_addqn">
                <button
                  className="addscreeingqn"
                  onClick={() => setScreen(true)}
                >
                  {" "}
                  <AddCircleIcon />
                  Add Screening Question
                </button>
                <button
                  className="addscreeingqn"
                  onClick={onhandleSubmit}
                  type="button"
                >
                  Submit
                </button>





              </div>


              <div className="back_log_button">
              </div>
              <div className="ques-body">
                {isScreeningque && isScreeningque.length !== 0 && isScreeningque.map((Screen, index) => (
                  <ScreenQuestionFun key={index} Screen={Screen} setAllSelectedquesition={setAllSelectedquesition} isAllSelectedquesition={isAllSelectedquesition} />
                ))}

                {isUserSelectedque && isUserSelectedque.length !== 0 && isUserSelectedque.map((Screen, index) => (
                  <UserSelectedScreenQuestion key={index} Screen={Screen} setAllSelectedquesition={setAllSelectedquesition} isAllSelectedquesition={isAllSelectedquesition} />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>


      {screen &&
        <ScreeningQn addSQpopup={setScreen}
          setUserSelectedque={setUserSelectedque}
          isUserSelectedque={isUserSelectedque}
        />}

    </div>
  );
}



export const ScreenQuestionFun = ({ Screen, setAllSelectedquesition, isAllSelectedquesition }) => {
  const { QUESITION_ID, QUESITION_TITLE } = Screen;
  const [isTypeQue, setisTypeQue] = useState(0);
  const onchangedvalue = (e) => {
    if (e.target.checked) {
      setAllSelectedquesition(oldArray => [...oldArray, { QUESITION_TITLE: QUESITION_TITLE, QUESITION_TYPE: isTypeQue }])
    }
    else {
      setAllSelectedquesition(isAllSelectedquesition.filter(item => item.QUESITION_TITLE !== QUESITION_TITLE));
    }
  }

  return (
    <div className="screen-ques-body">
      <div className="ques-body-head">
        <Checkbox {...label} sx={{ color: "#F7701D" }} onChange={onchangedvalue} />
      </div>
      <div className="ques-body-msg">
        <p>
          <span>{QUESITION_ID} : </span>
          {QUESITION_TITLE}
        </p>
        <FormControl sx={{ ml: "1rem" }}>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: "black" }} >Choose Answer Type:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={e => setisTypeQue(e.target.value)}
          >
            <FormControlLabel value="0" control={<Radio color="warning" />} label="Text" />
            <FormControlLabel value="1" control={<Radio color="warning" />} label="Audio" />
            <FormControlLabel value="2" control={<Radio color="warning" />} label="Video" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}


export function UserSelectedScreenQuestion({ Screen, setAllSelectedquesition, isAllSelectedquesition }) {
  const { QUESITION_ID, QUESITION_TITLE } = Screen;
  const [isTypeQue, setisTypeQue] = useState(0);
  const onchangedvalue = (e) => {
    if (e.target.checked) {
      setAllSelectedquesition(oldArray => [...oldArray, { QUESITION_TITLE: QUESITION_TITLE, QUESITION_TYPE: isTypeQue }])
    }
    else {
      setAllSelectedquesition(isAllSelectedquesition.filter(item => item.QUESITION_TITLE !== QUESITION_TITLE));
    }
  }
  return (
    <div className="screen-ques-body">
      <div className="ques-body-head">
        <Checkbox {...label} sx={{ color: "#F7701D" }} onChange={onchangedvalue} />
      </div>
      <div className="ques-body-msg">
        <p>
          <span>{QUESITION_ID} : </span>
          {QUESITION_TITLE}
        </p>
        <FormControl sx={{ ml: "1rem" }}>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: "black" }} >Choose Answer Type:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={e => setisTypeQue(e.target.value)}
          >
            <FormControlLabel value="0" control={<Radio color="warning" />} label="Text" />
            <FormControlLabel value="1" control={<Radio color="warning" />} label="Audio" />
            <FormControlLabel value="2" control={<Radio color="warning" />} label="Video" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
