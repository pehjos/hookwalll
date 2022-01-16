import React from 'react'
import './desktopnav.css'
import {Link,NavLink} from 'react-router-dom';
import Togglemode from './Toglemode'
import {Home,
    Explore,
    Brightness1,
    Search,
    Settings,
    Apps
} from'@material-ui/icons'
import {
    Divider,
    Avatar
 } from '@material-ui/core'
function Desktopnav() {
    return (
        <div className="desktop__nav">
              <div className="desktop__navheader">
                  <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=8FnxUEJVJyrnH8wn_X2VaF2fA7S6PsvG78R5WYVrL04" alt="user"/>
            <p>sign in |pehjos</p>
            <Divider/>
            </div>
            <Divider/>
            <div className="desktop__navcontent">
            <div className="desktop__navcontenticon">
         <Link to ="/commentry">
            <Home/>
            </Link>
            <Explore/>
            <Settings/>
            <Togglemode/>
            <Search/>
            <Apps/>
            </div>
            <div className="desktop__navcontenttext">
               
            <p>Home</p>
           
            <p>Explore</p>
            <p>Setting</p>
            <p>Brightness</p>
            <p>Search</p>
            <p>Apps</p>
            </div>
            </div>
            <div className="desktop__navfooter">
            
            </div>
        </div>
    )
}

export default Desktopnav
