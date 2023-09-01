import React from 'react'
import "./Homepage.css"
import SideNav from './navigation/SideNav'
import Timeline from './timeline/Timeline'


function Homepage() {
  return (
    <div className='homepage'>
    <div className="homepagenav">
    <SideNav/>
    </div>
    <div className="homepagetimeline">
    <Timeline/>
    </div>
    </div>
  )
}

export default Homepage