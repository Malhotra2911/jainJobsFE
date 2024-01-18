import React from 'react'
import "../../../css/Employer/InvitePeople.css"

const InvitePeople = ({invitepeople}) => {
    return (
        <div>
            <div className="invite_people_main_content">
                <div className="invite-people_content">
                    <div className="close_btn">
                        <button onClick={()=> invitepeople(false)} className="invite_close">
                        X
                        </button>
                    </div>
                    <div className="invite_people_content_container">
                    <div className="invite_input">
                        <h3 className="invite_heading">
                            Invite People to Team
                        </h3>
                        <input type="text" />
                        <button className="submit">
                            Send
                        </button>
                    </div>
                    <div className="person_details">
                        <div className="person_content">
                            {/* <IoPersonCircle /> */}
                            <img src="employer/Profilephoto.svg" alt="_" />
                            {/* <IoPersonCircleSharp/> */}
                            <div className="name_mail">
                                <h6>Akash Singh</h6>
                                <p>akashsingh@gmail.com</p>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <hr className="breake_line" />
                        <div className="person_content">
                            {/* <div className="person_content"> */}
                            {/* <IoPersonCircle /> */}
                            {/* <IoPersonCircleSharp/> */}
                            <img src="employer/Profilephoto.svg" alt="_" />
                            <div className="name_mail">
                                <h6>Akash Singh</h6>
                                <p>akashsingh@gmail.com</p>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <hr className="breake_line" />
                        <div className="person_content">
                            {/* <div className="person_content"> */}
                            {/* <IoPersonCircle /> */}
                            {/* <IoPersonCircleSharp/> */}
                            <img src="employer/Profilephoto.svg" alt="_" />
                            <div className="name_mail">
                                <h6>Akash Singh</h6>
                                <p>akashsingh@gmail.com</p>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <hr className="breake_line" />
                        <div className="person_content">
                            {/* <div className="person_content"> */}
                            {/* <IoPersonCircle /> */}
                            {/* <IoPersonCircleSharp/> */}
                            <img src="employer/Profilephoto.svg" alt="_" />
                            <div className="name_mail">
                                <h6>Akash Singh</h6>
                                <p>akashsingh@gmail.com</p>
                            </div>
                            <input type="checkbox" />
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default InvitePeople;