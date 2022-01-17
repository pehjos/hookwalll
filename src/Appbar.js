
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation,NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from './constants/actionTypes';
import './appbar.css'
import Brand from './Brand'
import Rightmobileslider from'@material-ui/core/Drawer'
import Footerbar from './Footerbar'
import {makeStyles} from '@material-ui/core/styles'
import Navmenu from './Navmenu'

import {

Menu,RadioOutlined,
ExitToAppOutlined,
VideoLibraryOutlined,
StarBorderRounded,
WifiTetheringTwoTone,
Explore,
NotificationsNoneOutlined,
Search,
ImageOutlined,
ShoppingCartOutlined,
NotificationsNoneRounded
} from '@material-ui/icons'
import {

Divider,
ListItem,
Hidden,
Avatar,
Box,
List,
IconButton,
ListItemIcon,
ListItemText,


} from '@material-ui/core'
import theme from 'styled-theming'


const toglemode=()=>{
theme.setTheme(
theme.mode==='dark'?{...theme,mode:'light'}
:{...theme,mode:'dark'}

)


}
const reload=()=>{
    window.location.reload()

}

//
const style= makeStyles(theme=>({

menuSliderContainer:{
width:259,
height:"100%",
background:"#171f24",
zIndex:"50"
},
avater:{
background:"khaki",
margin:"0.5 rem auto",
display:"block",
height:theme.spacing(10),
width:theme.spacing(10),
alignItems:"center",
display:"flex"


},
item:{


},
icons:{
color:" rgb(233, 174, 65)"
}
}));



function Appbar() {
// AUTHENTICATION

const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const dispatch = useDispatch();
const location = useLocation();
const history = useHistory();
console.log(user)

const logout = () => {
dispatch({ type: actionType.LOGOUT });

history.push('/auth');

setUser(null);
};

useEffect(() => {
const token = user?.token;

if (token) {
const decodedToken = decode(token);

if (decodedToken.exp * 1000 < new Date().getTime()) logout();
}

setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);

// ################################################


const classses=style();
const [state,setState]=useState({
right:false
})
const togleslider=(slider,open)=>()=>{

setState({...state,[slider]:open })
}
const sliderlist= slider=>(
<Box component="div"className={classses.menuSliderContainer} 
onClick={togleslider(slider,false)}>
<div className="toolbar">
{user?
(<div className="child">
<Link to="/profile">
<Avatar style={{width:80,height:80,}} alt={user.result.name} src={user.result.profileImg}>
{user.result.name.charAt(0)}
</Avatar>
</Link>
<p>{user.result.name}</p>
<ExitToAppOutlined onClick={logout}/>
</div>):
(<div className="child">
<Link to="/auth">
<p>Sign In</p>
</Link>
</div>)}
</div>

<List>
<Navmenu/>
<Divider/>
</List>
<div className="footer">


</div>
</Box>
)  
return (
<div className="appbar">
<>
<div className="topsearch">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zs4NFX0z6W3-6lNbY8wEdGI2dY60dqrcYA&usqp=CAU"/>
<div className="btnSearch">
<input type="text" placeholder="Search..."/>
<Search/>
</div>
<Hidden smUp={true}>
< Explore/>
<Menu  onClick={togleslider("right",true)}  />

</Hidden>
</div>
<div className="app_left">
<Hidden xsDown={true}>
<div className="app_leftname">
<h5>hookwall</h5>
</div>
</Hidden>
<Hidden xsDown={true}>
<div className="app_leftsearch">
<input type="text" placeholder="hook search"/>
{/*some clever staff here*/}
<Search/>
</div>
</Hidden>
</div>
<div className="app_right">
{/* <Hidden only={['lg','xl','md','sm']}>
<IconButton className="iconbutton" onClick={togleslider("right",true)}>
<div className="iconName1">
<Menu style={{color:'teal',fontSize:30,fontFamily:'italics',fontWeight:900,marginTop:-3 }}  />

</div>
</IconButton>
</Hidden> */}


<IconButton >
<div className="iconName">
<NavLink activeClassName="active_link" to ="/news" >
<StarBorderRounded style={{padding: 1 ,fontSize:26}} className="iconbutton"/>
{/* <p>News</p> */}
</NavLink>
</div>
</IconButton>

<IconButton >
<div className="iconName">
<NavLink activeClassName="active_link" to ="/video" >
<VideoLibraryOutlined style={{padding: 1 ,fontSize:26}} className="iconbutton"/>
{/* <p>Videos</p> */}
</NavLink>
</div>
</IconButton>
<IconButton >
<div className="iconName">
<NavLink activeClassName="active_link" to ="/image" >
<ImageOutlined style={{padding: 1 ,fontSize:26}} />
{/* <p>Images</p> */}
</NavLink>
</div>
</IconButton>
<IconButton >
<div className="iconName">
<NavLink activeClassName="active_link" to ="/radio">
<RadioOutlined className="blinking" style={{padding: 1 ,fontSize:26}} />
{/* <p>Market</p> */}
</NavLink>
</div>
</IconButton>
<IconButton >
<div className="iconName">
<NavLink activeClassName="active_link" to ="/shop" >
<ShoppingCartOutlined style={{padding: 1 ,fontSize:26}} />
{/* <p>Market</p> */}
</NavLink>
</div>
</IconButton>


<Rightmobileslider open={state.right} anchor="right"
onClose={togleslider("right",false)}>
{sliderlist("right ")}
<Footerbar/>
</Rightmobileslider >
</div>
</>
</div>
)
}

export default Appbar
