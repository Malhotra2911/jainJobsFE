import React,{useState} from 'react'
import './AllShortlisted.css'
import { MdSort } from 'react-icons/md'
import Data from '../../../AllShortlistedData'
import Background from "../../../components/assets/background.png"
import JobSeekerdashboard from "../../JOBSeek/JobSeekerdashboard"
import DashboardProfile from '../../../components/UserDashboardProfile/DashboardProfile'
import right from './right.png'
import UseFilter from '../../UseFilters/UseFilter'


export default function AllShortlisted() {
    const [shortlistfilter,setshortlistFilter] = useState(false);
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <JobSeekerdashboard />
                <div className='All_Shortlisted_content'>
                    <DashboardProfile />
                    <div className='AllShortlisted'>
                        <div className='allshort'>
                            <div className='all-short-Head'>
                                <p onClick={()=>{setshortlistFilter(true)}}>Use Filter</p>
                                {shortlistfilter && <UseFilter PopupPagefilter={setshortlistFilter}/>}

                                <p><MdSort />Sort By: Recommended</p>
                                <input type="checkbox" name="Select All" id="Select All" value='Select All' />
                                <label htmlFor="Select All">Select All</label>
                                {/* {shortlistfilter && <UseFilter Shortlistfilter={setshortlistFilter}/>} */}

                            </div>
                            <div className='all-short-body'>
                                {Data.map((Applyed, index) => (
                                    <AllShortlistedFUn key={index} {...Applyed} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function AllShortlistedFUn(props) {
    const { name, company, loc, lang, cer, Salary, Relocation } = props;
    return (
        <div className='Short-listed-Card'>
            <div className='Short-card'>
                <div className='Short-card-col-1'>
                    <div className='card-head'>
                        <h2>{name}</h2>
                        <a href="/">Access Resume</a>
                    </div>
                    <div className='card-body'>
                        <p>{company}</p>
                        <p>{loc}</p>
                        <p>{lang}</p>
                        <p>{cer}</p>
                        <p>{Salary}</p>
                        <p>{Relocation}</p>
                    </div>
                    <div className='card-foot'>
                        <a href="/">More</a>
                    </div>
                </div>
                <div className='Short-card-col-2'>
                    <div className='card-get-action'>
                        <div className='right'><p>GET</p><img src={right} alt="" /></div>
                        <div className='drop'>
                            <select name="" id="">
                                <option value="">Action</option>
                                <option value="">Assign Assingment</option>
                                <option value="">Assign Screening Questions</option>
                                <option value="">Send Virtual Invitation</option>
                                <option value="">Assign Profile</option>
                                <option value="">Telephonic Interview</option>
                                <option value="">Shortlisted</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}