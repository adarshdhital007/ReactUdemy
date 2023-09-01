import React from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import Post from './posts/Post'

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-left">
      <div className="timeline-post">
        <Post/>
        <Post/>
        <Post/>
      </div>
      </div>
      <div className="timeline-right">
    <Suggestion/>
      </div>
    </div>
  )
}

export default Timeline