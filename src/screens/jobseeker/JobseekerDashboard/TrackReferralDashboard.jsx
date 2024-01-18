import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import JobSeekerdashboard from '../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard'
import DashboardProfile from '../../../components/JobSeeker/UserDashboardProfile/DashboardProfile'
import "../../../css/jobseeker/TrackReferralDashboard.css"
import { CircularLoding } from '../../../redux/action/AuthAction'
import axiosInstance from '../../../utils/axiosInstance'
import ReferalTrackTable from './MasterTables/ReferalTrackTable'

export default function TrackReferralDashboard() {

  const [isrefferal, setisrefferal] = React.useState([]);


  const dispatch = useDispatch();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }

  React.useEffect(() => {
    Loading(true)
    axiosInstance.get('jobseeker/GetRefferal').then((res) => {
      Loading(false)
      try {
        setisrefferal(res.data);
      }
      catch {
        toast.error("Please Check Your Internet Connection!!")
      }
    })

  }, []);






  return (
    <>
      <div className="background_img">

        <div className='Track_referal_content'>
          <JobSeekerdashboard />
          <div className='Track_Content'>
            <DashboardProfile />
            <div className='TrackReferralDashboard'>
              <ReferalTrackTable isrefferal={isrefferal} />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
