import React,{useState,useEffect} from 'react'
import {ArrowBack, CameraAltOutlined, CameraAltRounded, EditOutlined } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import {Avatar } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
import { withRouter } from 'react-router-dom'
import {userStatus,userImg} from './actions/auth'
import './profile.css'
import CardPost from  './CardPost'
export default withRouter(({ history,setCurrentId }) => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

const {posts}=useSelector((state)=>state.posts)
const [state,setState]=useState(null)

const { id } = useParams();
const dispatch=useDispatch();
useEffect(() => {
  dispatch(getPost(id));
}, [id]);
// submit DATA TO BACKEND
const [postData, setPostData] = useState({ 
profileImg:''});
const handleSubmit=()=>{
dispatch(userImg(user.result._id,{ ...postData }));
console.log("submited accidentally")
console.log(postData)
}


const recommendedPosts = posts.filter(({ name }) => name== user.result.name);
console.log(recommendedPosts)
// UPLOAD PREVIEW
const uploadPrev=()=>{
    
  const oFreader=new  FileReader()
 oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
 oFreader.onload=function(oFREvent){
 document.getElementById("prev").src=oFREvent.target.result;
 console.log(oFREvent.target.result)
//  document.getElementById('photo').style.pointerEvents="none"
//  document.getElementById('photo').style.opacity="0.9"
 setPostData({...postData, profileImg:oFREvent.target.result})

 }
 }


 const uploadprevvideo=()=>{
 const ofFreader=new  FileReader()
 ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
 ofFreader.onload=function(ofFREvent){
 document.getElementById("prevvideo").src=ofFREvent.target.result;
 console.log(ofFREvent.target.result)
 document.getElementById('video').style.pointerEvents="none"
 document.getElementById('video').style.opacity="0.9"
 console.log(ofFREvent.target.result,"video")
//  setPostData({...postData, video:ofFREvent.target.result})


 }
 }
// BTN CLICK
const choseImg=()=>{
  document.getElementById('btnImg').click()

  
  
  }
 
  
return (
<div className="Profile__container">
<div className="Profile">
<input  accept="image/*" type="file" id="btnImg" 

onChange={ uploadPrev}
/> 


<div className="media___sectionImageOption"></div>
<div className="profile__ico">

<ArrowBack onClick={() => history.goBack()}/>
</div>

<div className="user__name">
<h3>{user.result?.name}</h3>
</div>
</div>
<div className="profile_img">
<div className="profile_cover">

{user.result.imageUrl==null?(<img src={user.result?.profileImg }accept="image/*" id="prev"/>):(<img src={user.result?.profileImg}/>)}
{user.result.profileImg==null?(<p></p>):""}
{user.result.profileImg==null?(""):(<EditOutlined />)}
</div>
<div className="profile_profile">

<Avatar src={user.result.profileImg}><CameraAltRounded id="photo"onClick={choseImg}/></Avatar>
<img accept="image/*" id="prev"/>
{user.result.profileImg?(<EditOutlined id="photo"onClick={choseImg}/>):""}
{user.result.profileImg?(<p></p>):""}
{user.result.profileImg?"":(<p onClick={handleSubmit}>INSERT</p>)}
<h5>{user.result?.name}</h5>
<h6>{user.result?.accountType}<h5>(INDIVIDUAL BLOGGER)</h5></h6>
</div>
<div className="profile_Links">
<p onClick={() => dispatch(userStatus(user.result._id))}>VERIY</p>

</div>
<div className="profile_Links">
<p>useful LInks</p>
</div>
</div>
<div className="post">
 
{
    
!recommendedPosts.length ?(""):
(<div>
{recommendedPosts.map((post)=>(  
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
photo={post.photo}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
description={post.description}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share="100"
love={post.likeCount}
comment="79"
/>
))}
</div>)
}



</div>
</div>

)
});