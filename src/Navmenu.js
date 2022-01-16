import React from 'react'
import './navmenu.css'
import Toggle from './Toglemode'
import{ Business,
    NightsStayIcon,
   HomeOutlined,
   PolicyOutlined,
ContactSupport,

} from '@material-ui/icons'
function Navmenu() {
    return (
        <div className="navmenu">
<div className="navmenucontent">
<div className="navmenuicons">
<HomeOutlined/>
<img src="https://img.icons8.com/color/48/000000/gears.png"/>

<Business/>

<PolicyOutlined/>
<ContactSupport/>
<Toggle className="togle"/>
</div>
<div className="navmenutext">
<p>Home</p>
<p>Settings</p>
<p>Pehjos Inc</p>
<p>Privacy Policy</p>
<p>Help</p>

</div>
</div>
</div>
    )
}

export default Navmenu
