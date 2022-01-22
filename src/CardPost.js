import React, { useState,useRef } from 'react'
import Linkify from 'react-linkify';
import Rightmobileslider from'@material-ui/core/Drawer'
import {useHistory} from 'react-router-dom'

import './card.css'
// import {userTrack} from './actions/auth'
import {useSelector} from 'react-redux'
import optionalimage from './logo.jpg'
import Moment from 'react-moment';
import Hashtags from 'react-highlight-hashtags';
import { motion } from "framer-motion"
import {Avatar} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {deletePost} from './actions/Post'
import {likePost} from './actions/Post'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import Commentsection from './Commentsection'

import ReactImageFallback from "react-image-fallback";
import {
Card,
IconButton
} from '@material-ui/core'
import {
AccessTime,
ShareOutlined,
FavoriteBorder,
NewReleasesRounded,
CommentOutlined,
ChatBubbleOutline,
CheckCircle,
Close,
VisibilityOffOutlined,
PersonAddDisabledOutlined,
VolumeMuteOutlined,
BlockOutlined,
ErrorOutlineOutlined,
VisibilityOutlined,
PlayArrowRounded,
Check,
Timeline,MoreHoriz,
Photo
} from '@material-ui/icons'


function CardPost({newsrc,tag,_id,title,newimage,seeMore,description,time,newstypeimg,love,comment,share,Url,articlebody,ProviderUrl,setCurrentId,post,video,photo})

{

// PLAY VIDEO

const [isVideoplaying, setisVideoplaying]=useState(false)
const Videoref=useRef(null)
const Playvideo=()=>{
if(isVideoplaying){
//stop
Videoref.current.pause()
setisVideoplaying(false)

}else{
//play
Videoref.current.play()
setisVideoplaying(true)
const time =video.getTime
console.log(time)
}

}
const [favcolor ,setFavcolor]=useState(true)

const changrcolor=()=>{
if(favcolor){
setFavcolor(false)

}else{
setFavcolor(true)
}


}
const [statebody, setStatebody] = useState(false)
const ShowWatchbody=()=>{
if(statebody){
setStatebody(false)
}
else{
setStatebody(true)
}
}
// Like button
const dispatch = useDispatch();
const user = JSON.parse(localStorage.getItem('profile'));

// const Likes = () => {
//   console.log(post.likes.length)
//     if (post.likes.length > 0) {
//       return post.likes.find((like) => like === ( user?.result?._id))
//         ? (
//           <><Favorite Favorite style={{color:'tomato',fontSize:30}}  />&nbsp;<p style={{color:'#2196f3'}}>{post.likes.length > 2 ? ` ${post.likes.length} ` : `${post.likes.length} ${post.likes.length > 1 ? '' : ''}` }</p></>
//         ) : (
//           <><FavoriteBorder Favorite style={{fontSize:30}} fontSize="small" />&nbsp;{post.likes.length} </>
//         );
//     }

//     return <><FavoriteBorder fontSize="small" />&nbsp;</>;
//   };





const [likes, setLikes] = useState(post?.likes);
const userId =  user?.result?._id;
const hasLikedPost = post.likes.find((like) => like === userId);

const handleLike = async () => {
  dispatch(likePost(post._id));

  if (hasLikedPost) {
    setLikes(post.likes.filter((id) => id !== userId));
  } else {
    setLikes([...post.likes, userId]);
  }
};

const Likes = () => {
  if (likes.length > 0) {
    return likes.find((like) => like === userId)
      ? (
        <><ThumbUpAltIcon style={{color:'#2196f3',fontSize:30}}  />&nbsp;{likes.length > 2 ? `${likes.length } ` : `${likes.length} ${likes.length > 1 ? '' : ''}` }</>
      ) : (
        <><ThumbUpAltOutlined style={{fontSize:30}} fontSize="small"  />&nbsp;{likes.length} {likes.length === 1 ? '' : ''}</>
      );
  }

  return <><ThumbUpAltOutlined fontSize="small" />&nbsp;</>;
};




  // open post
const urll=`hookwal.com/post/${_id}`
  const scrolltop= () => window.scrollTo({top:"0",behavior:"smooth"})
const history=useHistory()
const openPost=()=>
{
history.push(`/post/${post._id}`)
}


//  share

  const canonical = document.querySelector("link[rel=canonical]");
  const url=`/post/${_id}`
  const shareDetails = { url, tag, title};

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share(shareDetails)
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };


// comment component
const [stated, setStated] = useState(false)
const ShowWatch=()=>{
if(stated){
setStated(false)
document.getElementById('cards').style.height="560px";
// document.getElementById('overall').style.height="400px";

}
else{
setStated(true)
document.getElementById('cards').style.height="600px";

}
}
const [state,setState]=useState({
right:false
})
const togleslider=(slider,open)=>()=>{

setState({...state,[slider]:open })
}
const sliderlist= slider=>(
<div component="div"className="slider"
onClick={togleslider(slider,false)}>


{/* <Share

/> */}
<div className="footer">
</div>
</div>
) 
// UN TRACK AN UN FOLLOW DRAWER

const [states,setStates]=useState({
right:false
})
const toglesliders=(slider,open)=>()=>{

setStates({...state,[slider]:open })
}
const sliderlists= slider=>(
<div component="div"className="slider"
onClick={toglesliders(slider,false)}>
<div className="icons__body">
<div className="icons__child">
<VisibilityOutlined/>
<p>view creator</p>
</div>
<div className="icons__child">
<VisibilityOffOutlined/>
<p>Don't want to see this post</p>
</div>
<div className="icons__child">
<PersonAddDisabledOutlined/>
<p>Un Track @pehjos</p>

</div>
<div className="icons__child">
<VolumeMuteOutlined/>
<p>Mute</p>
</div>
<div className="icons__child">
<BlockOutlined/>
<p>Block</p>
</div>
<div className="icons__child">
<ErrorOutlineOutlined/>
<p>Report</p>
</div>
</div>

<div className="footer">
</div>
</div>
) 

return (
<div className ="overRallCard" id="overall">



<div className="cardmain" id="cards" oncontextmenu="return false" onselectstart="return false"oncut="return false"onpaste="return false" oncopy="return false">

<div className="card__header">
<div className="card__headerleft">
<NewReleasesRounded/>


  <h3   >{newsrc}</h3>
</div>
<Rightmobileslider className="drawer" open={states.right} anchor="bottom"
onClose={toglesliders("right",false)}>
{sliderlists("right ")}

</Rightmobileslider >
<div  onClick={toglesliders("right",true)} className="card__headerright">

<MoreHoriz/>
</div>
</div>



<div onClick={scrolltop} className="card__image">
  {!post.image==""?(<ReactImageFallback
src={newimage}
fallbackImage={optionalimage}
initialImage="{<ImageLoader/>}"
alt="Loading... "
onClick={openPost}
/>):(
  <video src={video} onClick={Playvideo} ref={Videoref}  />
)

}
{post.image!==""?"":
isVideoplaying?"":(
            (<PlayArrowRounded  onClick={Playvideo}/>)
           )}
           
</div>
<div className="card__content">
<div className="card__contenttitle">
<h5><Hashtags>{title}</Hashtags></h5>

</div>
<div className="card__contentdescription">
{statebody?(<h6><Linkify>{articlebody}</Linkify></h6>):(<p ><Linkify>{description}</Linkify></p>)  }
{statebody?(<Close onClick={ShowWatchbody}/>):(<h5 onClick={ShowWatchbody}>{seeMore}</h5>)}
</div>
</div>
<div className="card__footer">
<IconButton  disabled={!user?.result} onClick={handleLike}>
<div onClick={changrcolor} className="card__footericonscontent">
    <Likes/>
</div>
</IconButton>
<IconButton >


<div className="card__footericonscontent">
{stated?(<Commentsection post={post} onClick={ShowWatch} />):(<ChatBubbleOutline id="chatbuble" onClick={ShowWatch}/>)}
<p>{comment}</p>
</div>
</IconButton>
<IconButton  onClick={handleSharing}>
<div className="card__footericonscontent">
<ShareOutlined  />

<p>{share}</p>
</div>
</IconButton>



<Rightmobileslider className="drawer" open={state.right} anchor="bottom"
onClose={togleslider("right",false)}>
{sliderlist("right ")}

</Rightmobileslider >
</div>

<div className="footline">
<div className="imgfoot">
           <h4>{tag}</h4>
           {post.image==""?  (<img src={photo}/>):(<img src={optionalimage}/>)}
          {/* <div className="visible">
            <VisibilityOutlined/>
            <p>view</p>
          </div> */}
           {post.status =='prime'?(<div className="card__headerleftfoot">

<p>prime</p>
<CheckCircle/>
</div>):""}
           </div>

<div className="card__footericonscontent3">
<div className="foot">
<AccessTime  onClick={() => dispatch(deletePost(post._id))}/>
</div>
<div className="foot">
<Moment  onClick={() => setCurrentId=post._id} fromNow>{time}</Moment>
</div>

</div>

</div>

</div>
{stated?(<Close onClick={ShowWatch} className="close"/>):""}


</div>
)
}

export default CardPost
