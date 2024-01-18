import React from 'react'
import './ResumeBuild.css'

export default function ResumeBuild() {
  return (
    <div className='ResumeBuild'>
        <div className='Resume'>
            <form action="Submit">
                <div className='PersonalDetails'>
                    <h2>Personal Details</h2>
                    <div className='FML-Name'>
                        <div className='Name'>
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='Name'>
                            <label htmlFor="First Name">Middle Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='Name'>
                            <label htmlFor="First Name">Last Name</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='DOB'>
                        <label htmlFor="DOB">DOB</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="Linkedin profile ">Linkedin profile </label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className='Education'>
                    <h2>Education</h2>
                    <div className='Edu'>
                        <label htmlFor="School">School</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="College/ University">College/ University</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="Passing Year">Passing Year</label>
                        <input type="text" name="" id="" />
                        <button className='ADD'>ADD+</button>
                    </div>
                </div>
                <div className='WorkExperience'>
                    <h2>Work Experience</h2>
                    <div className='Work-1'>
                        <label htmlFor="Job Title">Job Title</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="Company">Company</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="Employement">Employement</label>
                        <div className='Work-Type'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Full Time">FullTime</label>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Intern">Intern</label>
                        </div>
                        <label htmlFor="Website">Website</label>
                        <input type="text" name="" id="" />
                        <div className='Date'>
                            <input type="Date" name="" id="" placeholder='Start Date'/>
                            <input type="Date" name="" id="" placeholder='End Date'/>
                        </div>
                        <label htmlFor="Role responsibilities ">Role Responsibilities </label>
                        <input type="text" name="" id="" />
                        <label htmlFor="Annual CTC">Annual CTC</label>
                        <input type="text" name="" id="" />
                        <button  className='ADD'>Add +</button>
                    </div>
                </div>
                <div className='Skills'>
                    <h2>Skills</h2>
                    <div className='skill'>
                        <label htmlFor="Skills">Skills</label>
                        <input type="text" name="" id="" />
                        <label htmlFor=" Years Of Experience">Years Of Experience</label>
                        <input type="text" name="" id="" />
                        <button  className='ADD'>Add +</button>
                    </div>
                </div>
                <div className='Certificate-Licence'>
                    <h2>Certificate/Licence</h2>
                    <div className='Certificate'>
                        <label htmlFor="Title">Title</label>
                        <input type="text" name="" id="" />
                        <button  className='ADD'>Add +</button>
                    </div>
                </div>
            </form>
            <button className='Save'>Save</button>
        </div>
    </div>
  )
}
// https://youtu.be/XtS14dXwvwE
