import React,{useState,useEffect,useRef} from 'react'
import Rightmobileslider from'@material-ui/core/Drawer'
import numeral from 'numeral'
import {Avatar} from '@material-ui/core'
import './videocard.css'
import useVideoPlayer from './VideoPlayer'
import {Link } from 'react-router-dom'
import {
Card,


} from '@material-ui/core'
import {
FavoriteBorder,
CloudDownload,
VolumeOffRounded, VolumeUp,
ShareOutlined,
PlayCircleOutlineRounded,
Search,
ArrowBackOutlined,
CheckCircle,
Close,
VisibilityOffOutlined,
PersonAddDisabledOutlined,
VolumeMuteOutlined,
BlockOutlined,
ErrorOutlineOutlined,
VisibilityOutlined,


} from '@material-ui/icons'
function Videocard({newsrc,newtype,title,videosrc,description,time,newstypeimg,love,views,comment}) {
  const [playstate, setplaytState] = useState(true);

  const videoRef = useRef(null)
const {
isMuted,
isPlaying,
speed,
progress,
toggleMute,
togglePlay,
handleTimeUpdate,
handleVideoSpeed,
handleVideoProgress,
timeplay,cur
} = useVideoPlayer(videoRef);

document.addEventListener('play', function(e){  
var audios = document.getElementsByTagName('video');  
for(var i = 0, len = audios.length; i < len;i++){  
if(audios[i] != e.target){  
audios[i].pause();  
setplaytState(false); 
}  
}  
}, true);


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

}

}
// / UN TRACK AN UN FOLLOW DRAWER

const [state,setState]=useState({
right:false
})
const toglesliders=(slider,open)=>()=>{

setState({...state,[slider]:open })
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
<div className="cardimg" > 

<Rightmobileslider className="drawer" open={state.right} anchor="bottom"
onClose={toglesliders("right",false)}>
{sliderlists("right ")}

</Rightmobileslider >

{isPlaying &&handleVideoProgress?"":(
(<PlayCircleOutlineRounded
  onClick={togglePlay}
  style={{fontSize:40,borderRadius:50,backgroundColor:"#2196f3",color:"whitesmoke",}} className="play"/>)
)}
<div className="header">
<Avatar size='small' src={newsrc} />

{isPlaying?(<marquee>{title}</marquee>):""}
{/* <p onClick={toglesliders("right",true)}>{newtype}</p> */}


{isPlaying?(<p>{cur}</p>):""}
</div>
<video  src={videosrc}
 ref={videoRef}
 onClick={togglePlay}
onTimeUpdate={handleTimeUpdate}   
preload="auto"
/>
<div className="tile1">

<div className="tileright1">
<div className="tile_controllers">
{isPlaying?(
<div className="controllers__top">
<div className="controllers__top_icon" onClick={toggleMute}>
{isMuted?
    <VolumeOffRounded /> : <VolumeUp  />
}

</div>
  <input
  className='controllers__input'
  type='range'
  min='0'
  max='100'
  value={progress}
  onProgress={(e)  =>('Time' + parseInt(e.currentTime))}
  onChange={(e) => handleVideoProgress(e)}
/>
<select
onChange={(e) => handleVideoSpeed(e)}
value={speed}
>
<option value={0.5}>0.5x</option>
<option value={1}>1x</option>
<option value={2}>2x</option>
</select>               
</div>
):""}
</div>

</div>


{/* <div className="tileleft">
<div className="tilelefticons">
<ShareOutlined/>

</div>
<div className="tilelefticons">
<CloudDownload/>
<p>{numeral(comment).format('0 a')}</p>
</div>
<div className="tilelefticons">
<RemoveRedEyeOutlined/>
<p>{numeral(love).format('0 a')}</p>
</div>
</div> */}
</div>
</div>
)
}

export default Videocard
