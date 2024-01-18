import React from 'react'
import nojob from './nojob.png'
import './NoSavedJob.css'

export default function NoSavedJob() {
  return (
    <div className='NoSavedJob'>
        <div className='NoSaved'>
            <p className='head '>No Saved Jobs !</p>
            <p  className='tail'>Tap on star Icon to save the jobs</p>
        </div>
        <div className='img'>
            <img src={nojob} alt="/" />
        </div>
    </div>
  )
}
