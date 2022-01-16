import React from 'react'
import EventNote from '@material-ui/icons/ExpandLess'
import {Hidden,IconButton} from '@material-ui/core'
import Video from './Video'
import {Explore} from '@material-ui/icons'
import {Link,NavLink} from 'react-router-dom';
import NavigateNext from '@material-ui/icons/Add'
import './quick.css'
function Quickac() {
    const scrolltop= () => window.scrollTo({top:"0",behavior:"smooth"})
    return (
     
        <div className="quickac">
<Link to ="/addpost">
            <div className="quickac__add">
         <NavigateNext className="Add"/> 
        </div>
        </Link>
         {/* <Hidden only={['lg','xl','md','sm']}>
        <div className="quickac__top"onClick={scrolltop}>
           <EventNote />
        </div>
        </Hidden > */}
        <Link to ="/commentry">
            <IconButton>
        <div className="news__comentry">
       
    
      
        </div>
        </IconButton>
        </Link>
      
        

        </div>


    )
}

export default Quickac
