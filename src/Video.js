import React from 'react'
import './Video.css'
import Videoplay from './video.mp4'
import Robot from './video.mp4'
import Videos from './Videonext'
import {Link } from 'react-router-dom'
import Videocard from './Videocard'
import {Search,
    ArrowBackOutlined,
} from '@material-ui/icons'
function Video() {
    return (
        <div className="video">
   <div className="radio_t">
<Link to ="/">
  < ArrowBackOutlined/>
  </Link>
<h3>HOOKSTUDIO TV BROADCAST</h3> 
<div className="btnSearc">
<input type="text" placeholder="Search videos"/>
<Search/>
</div>
</div> 
            <Videos/>
        </div>
    )
}

export default Video
