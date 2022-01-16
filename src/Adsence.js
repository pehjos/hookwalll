import React from 'react'
import './adsence.css'
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
function Adsence() {
    return (
        <div className="adsence">
            <div className="adsencebaner">
            <img src="https://massinfos.com/wp-content/uploads/2020/07/nova_7i.jpg"/>
             </div> 
             <div className="adsencebaner">
             <img src="https://www.motortrend.com/uploads/sites/5/2019/12/MotorTrend-Most-Important-Cars-of-the-Decade.jpg"/>
             </div> 
             <div className="adsencebaner">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpeyCQAsk7fI2KnbQwF1Fa4iP4yGc_tnQuWQ&usqp=CAU"/>
             </div>
        </div>
    )
}

export default Adsence
