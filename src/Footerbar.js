import React from 'react'
import './footer.css'
import{BottomNavigation,BottomNavigationAction} from '@material-ui/core'
function Footerbar() {
    return (
        <div className ="footer">
            <BottomNavigation className="bottombar" width="auto"style={{background:""
           ,minWidth:"0",maxWidth:"250px",height:"100%"}}
            >
             <p className="footertext">Pehjos Inc</p>
           
               </BottomNavigation>   
        </div>
    )
}

export default Footerbar
