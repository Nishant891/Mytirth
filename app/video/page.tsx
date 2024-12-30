import React from 'react'
import Navbar from '../components/navbar'
import Landing from '../components/landing'
const Video = () => {
  return (
    <div className="relative main">
      <video autoPlay loop muted playsInline className="bg__video">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default Video
