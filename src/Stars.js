
import React,{useState} from 'react'
import './stars.css'

import{BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Science from '@mui/icons-material/Science';
import {
Explore,
  PublicOutlined,
  HomeOutlined,
  SportsSoccer,
  SignalWifi0BarOutlined,
  WifiTetheringTwoTone
} from '@material-ui/icons'

import {Link,NavLink} from 'react-router-dom'


function Stars() {
   const [state, setstate] = useState({
       index: 0,
     })
     
      const handleChange = (event, value) => {
         setstate({
           index: value,
         });;
       };
     
      const handleChangeIndex = index => {
         setstate({
           index,
         });
       };
     
       const { index } = state;
       const styles = {
         tabs: {
           // background: '#fff',
         },
         slide: {
        
          // maxHeight: 1000,
           color: '#fff',
          
         },
         slide1: {
          // minHeight: 150,
           with:'200'
           // backgroundColor: '#FEA900',
         },
         slide2: {
          // minHeight: 150,
           with:'200',
           // backgroundColor: '#B3DC4A',
         },
         slide3: {
          // minHeight: 150,
           with:'200',
           // backgroundColor: '#6AC0FF',
         },
         slide4: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
         slide5: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
         slide6: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
       };
     
   return (
       <div className="stars">
          <div className="star__pages">
            <div className="star__textf">
          <NavLink activeClassName="link"className="li" to="/news"> <HomeOutlined/></NavLink>
          <p>Home</p>
          </div>
          <div className="star__textf">
    <NavLink activeClassName="link" to="/world"className="li"><PublicOutlined/> </NavLink>
    <p>world</p>
    </div>
    <div className="star__textf">
    <NavLink activeClassName="link" to="/sports"className="li"> <SportsSoccer/></NavLink>
    <p>sports</p>
    </div>
    <div className="star__textf">

    <NavLink activeClassName="link" to="/science"className="li"><Science/></NavLink>
    <p>science</p>
    </div>
    <div className="star__textf">
   
    <NavLink activeClassName="link" to="/technology"className="li">< WifiTetheringTwoTone/></NavLink>
    <p>tech</p>
    </div>
    <div className="star__textf">
 
    <NavLink activeClassName="link" to="/commentry"className="li"><  Explore/></NavLink>
    <p>Live</p>
    </div>
     </div>
  
       </div>
   )
}

export default Stars
