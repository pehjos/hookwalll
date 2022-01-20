import React,{useEffect,useState,lazy,Suspense} from 'react';
import {getPosts} from './actions/Post'
import PostDeatils from './PostDeatails'
import {useDispatch,} from 'react-redux'
import Appbar from './Appbar'
import BottomNav from './BotoMnav'
import SoccerLive from './SoccerLive'
import VolleyLive from './VolleyLive'
import Star from './Stars'
import BottonNav from './BotoMnav'
import RadioCard from './RadioCard'
import  Quickac from './Quickac'
import Audiostream  from './Audiostream'
import Commentrybody from './Commentrybody'
import Commentrybar from './Commentrybar'
import useTheme from './useTheme'
import Loader from './Loader'
import Auth from './Auth'
import CardPost from './CardPost'
import{BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import { useHistory,useLocation } from 'react-router-dom';
import Desktopnav from  './Desktopnav'
import Adsence from './Adsence'
import Adsence1 from './Adsence1'
import Addpost from './Addpost'
import Styles from './Style'
import './App.css';
import {ThemeProvider,createGlobalStyle} from 'styled-components'
import Shop from './Shop'
import Image from './Image'
import Video from './Video'
import Profile from './Profile';
import Search from './Search';
import {Link,NavLink} from 'react-router-dom'
import News from './News'
import World from './World'
import Sports from './Sports'
import Postdetail from './Postdetail'

import Science from './Science'
import Technology from './Technology'
import Crypto from './Crypto';
//GLOBAL STYLE
function useQuery(){
  return new URLSearchParams(useLocation().image);
  }
function App() {
// SEARCH QUERY
const [search,setSearch]=useState('')
// const query=useQuery()
// const history=useHistory()
// const page=query.get('page')||1
// const SearchQuery=query.get('searchQuery')
//  REDUX DISPATCH STATE
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getPosts());
}, [currentId, dispatch]);


//   const[loading,setLoading]=useState(true)
// if(loading){
//    setTimeout(()=>{
// setLoading(false)

//    },3000)
//   }
// UPDATE POST DISPATHCH



const theme=useTheme()

return (

<Router>
{/* {loading?(<Loader/>):( */}
<ThemeProvider theme={theme}>

  <>
  < Styles/>

<div className="app">


  

 
<Switch>
{/* commentry news */}
  {/* commentry for mobile */}
<Route path="/commentry">
<Commentrybar/>
<Commentrybody setCurrentId={setCurrentId}/>

</Route>
<Route path="/profile">
<Profile/>
</Route>
<Route path="/radio">
<RadioCard/>
</Route>
<Route path="/hook">
<Search/>
</Route>
<Route path="/football">
{/* <SoccerLive/> */}
</Route>
<Route path="/volleyball">
<VolleyLive/>
</Route>
<Route path="/auth">
<Auth/>
</Route>
<Route path="/addpost">
<Addpost currentId={currentId} setCurrentId={setCurrentId}/>



</Route>

<Route path="/cardpost">
<CardPost setCurrentId={setCurrentId} />



</Route>
{/* audio */}
<Route path="/audio">
<Commentrybar/>
<Audiostream/>


</Route>
<Route path="/post/:id">
<PostDeatils/>
<BottomNav/>
</Route>
<Route path="/read">
<Postdetail/>

</Route>
{/*videostream */}
<Route path="/videostream">
<Commentrybar/>
<p>hello me</p>

</Route>

<Route path="/shop">
{/* <Appbar/> */}


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">

<Shop/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>



<Route path="/video">
{/* <Appbar/> */}


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
<Video/>
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>



<Route path="/hook">
<Appbar/>

<h4>hook search</h4>
</Route>
  {/* 
  trtial
  */}
<Route path="/image">
{/* <Appbar/> */}


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Image/>

</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/notification">
<Appbar/>
<Adsence1/>

<h4>Please am very sorry,sometime in testing mode we only deliver nonsence TEXT</h4>
</Route>

{/*the hook news navbar*/}
<Route path="/world">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
<Quickac/>
</div>

<div className="app__bodyfeed">
<World/>
{/* <Star/> */}
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/sports">


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
  
<Sports/>

<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/fanancial">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
{/* <Star/> */}
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>

<Route path="/science">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>

</div>

<div className="app__bodyfeed">
<Science/>
{/* <Star/> */}
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>


</div>

</div>
</Route>
<Route path="/technology">
<Appbar/>

<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Technology/>
{/* <Star/> */}
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>
<Route path="/music">


<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<Star/>

</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>

{/*the hook news navbar*/}








{/* news in details */}



<Route path="/">
<Appbar/>

<BottomNav/>
<div className="app__body">
<div className="app__bodynav">
<Desktopnav/>
</div>

<div className="app__bodyfeed">
<News/>

{/* <Star/> */}
<Quickac/>
</div>

<div className="app__bodyadsence">

<Adsence/>

</div>

</div>
</Route>


</Switch>

</div>

</>

</ThemeProvider>
{/* )} */}
</Router>

);

}

export default App;
