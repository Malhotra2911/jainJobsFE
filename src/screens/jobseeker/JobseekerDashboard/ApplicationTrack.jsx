import React from "react";
import "../../../css/jobseeker/ApplicationTrack.css";
import TrackData from "../../../mockJson/ApplicationTrackData";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

export default function ApplicationTrack() {
  const [iscardData, setiscardData] = React.useState([]);
  const [istrackid, settrackid] = React.useState(null);

  const { user } = useSelector((state) => state.AuthReducer);
  React.useEffect(() => {
    if (user && user.length !== 0 && user[0].SUBSCRIBATION === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "you cant use this feature without subscribation",
      });
    } else {
      handlesubmit();
    }
  }, [user]);

  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  const handlesubmit = () => {
    Loading(true);
    axiosInstance.get("jobseeker/trackyourjob").then((res) => {
      setiscardData(res.data.data);
      Loading(false);
    });
  };
  const settrackindfun = (value) => {
    settrackid(value);
  };

  const filterdata = (data) => {
    console.log(
      iscardData.filter(
        (itemInArray) => itemInArray.COMPANY_NAME === data.toString()
      )
    );
  };

  return (
    <>
      <div className="background_img">
        <div className="Track_your_job">
          <JobSeekerdashboard />
          <div className="Application_Track">
            <DashboardProfile />
            <div className="Application_track_container">
              <div
                className="inputsections"
                style={{ flexDirection: "row-reverse" }}
              >
                <input
                  type="text"
                  placeholder="enter the company name"
                  name="Jobs"
                  style={{
                    padding: "1.5vh",
                    width: "30%",
                    height: "5vh",
                  }}
                  onChange={(e) => {
                    filterdata(e.target.value);
                  }}
                />
              </div>
              <div className="TrackApplication_Cards_Section">
                {iscardData &&
                  iscardData.length !== 0 &&
                  iscardData.map((TrackCard, index) => (
                    <TrackListCards
                      key={index}
                      TrackCard={TrackCard}
                      settrackindfun={settrackindfun}
                    />
                  ))}
              </div>

              <Progressbar istrackid={istrackid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const TrackListCards = ({ TrackCard, settrackindfun }) => {
  const [isdesignation, setisdesignation] = React.useState([]);
  const { scope } = useSelector((state) => state.AuthReducer);

  const getdesignation = () => {
    const getshorteddesig = scope.filter(
      (data) => data.SCOPE_ID ===  parseInt(TrackCard.DESIGNATION)
    );

    console.log(getshorteddesig);
    setisdesignation(getshorteddesig);
  };
  React.useEffect(() => {
    getdesignation();
  }, []);

  return (
    <>
      <div className="TrackData_Card">
        <div className="Track_Card">
          <div className="JOB_Name">
            <h4>
              {" "}
              <b>{TrackCard.COMPANY_NAME}</b>
            </h4>
            <h4>DESIGNATION :- {isdesignation && isdesignation.length !==0 ? isdesignation[0].FIELD_NAME : 'no data found' }</h4>
          </div>
          <div className="JOB_info">
            <h4>
              TYPE OF JOB :- <b>{TrackCard.TYPE_OF_JOB}</b>
            </h4>
            <h4>
              APPLIED DATE :- <b>{TrackCard.APPLIEDDATE}</b>
            </h4>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              settrackindfun(TrackCard.APPLICATION_STATUS);
            }}
          >
            Check Status
          </Button>
        </div>
      </div>
    </>
  );
};

export const Progressbar = ({ istrackid }) => {
  return (
    <div className="progressbar_container">
      <h2>Application Status</h2>

      <div className="progressbar_track">
        {
          <>
            {parseInt(istrackid) == 0 ||
            parseInt(istrackid) == 1 ||
            parseInt(istrackid) == 2 ||
            parseInt(istrackid) == -1 ? (
              <>
                <div className="track_div">
                  <div className="track_icon_div"></div>
                  Applied
                </div>

                <hr className="jobtrackprocess" />
                <div className="track_div">
                  <div className="track_icon_div"></div>
                  Application Sent
                </div>
              </>
            ) : null}
            {parseInt(istrackid) == 1 ||
            parseInt(istrackid) == 2 ||
            parseInt(istrackid) == -1 ? (
              <>
                <hr className="jobtrackprocess" />
                <div className="track_div">
                  <div className="track_icon_div"></div>
                  Application Viewed
                </div>
              </>
            ) : null}

            {parseInt(istrackid) == 2 ? (
              <>
                <hr className="jobtrackprocess" />
                <div className="track_div_last">
                  <div className="track_icon_div"></div>
                  Shortlisted
                </div>
              </>
            ) : null}

            {parseInt(istrackid) == -1 && (
              <>
                <hr
                  className="jobtrackprocess"
                  style={{ backgroundColor: "red" }}
                />
                <div className="track_div_last">
                  <div
                    className="track_icon_div"
                    style={{ backgroundColor: "red" }}
                  ></div>
                  Application Rejected
                </div>
              </>
            )}
          </>
        }
      </div>
    </div>
  );
};
