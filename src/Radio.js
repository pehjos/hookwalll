import React,{useState,useRef} from 'react'
import './radio.css'
import  {PowerSettingsNewOutlined,PauseCircleFilledOutlined
,SettingsPower



} from '@material-ui/icons'
function Radio({srcimg,src,loader,name,country,time,live,imagecd}) {
const audioPlayer = useRef();
const [currentTime, setCurrentTime] = useState(0);
const [seekValue, setSeekValue] = useState(0);
const [speed, setSpeed] = useState(1)
const [state,setState] = useState(false)

const play = () => {
setState(true)
audioPlayer.current.play();

};
const pause = () => {

audioPlayer.current.pause();
setState(false)

};
const stop = () => {
audioPlayer.current.pause();
audioPlayer.current.currentTime = 0;
setState(false)
};
// const setSpeed = (speed) => {

// audioPlayer.current.playbackRate = speed;
// };
const handleVideoSpeed = (event) => {
  const speed = Number(event.target.value)
  audioPlayer.current.playbackRate = speed;
  setSpeed(speed)
}
const onPlaying = () => {
setState(true);
setCurrentTime(audioPlayer.current.currentTime);
setSeekValue(
(audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
);

};    

document.addEventListener('play', function(e){ 

var audios = document.getElementsByTagName('audio');  
for(var i = 0, len = audios.length; i < len;i++){  
if(audios[i] != e.target){  
audios[i].pause();  

setState(false);  

} 

}  
}, true);
var minutes = "0" + Math.floor(currentTime / 60);
var seconds = "0" + (currentTime - minutes * 60);
var cur = minutes.substr(-2) + ":" + seconds.substr(-2);
return (



<div className="radio">

<div className="radio_card">

<div className="radio_card_1">
<img src={srcimg}/>

</div>
<div className="radio_card_2">
<h6>{name}</h6>
<p>{country}</p>
</div>
<div className="radio_card_3">
{state?(<div><p>{cur}</p></div>):""}
<div className="playing">
{state?(<img src="https://i.gifer.com/origin/a1/a151e29409954830f542a9b8bb604582_w200.gif"/>):""}

</div>
<div className="powerbtn">
{state?(<SettingsPower style={{color:"green"}} onClick={pause}/>):(<PowerSettingsNewOutlined onClick={play}/>)?(<PowerSettingsNewOutlined onClick={play}/>):"me"}  



{/* <button onClick={() => setSpeed(0.5)}>0.5x</button>
<button onClick={() => setSpeed(1)}>1x</button>
<button onClick={() => setSpeed(1.5)}>1.5x</button>      
<button onClick={() => setSpeed(2)}>2x</button> */}
</div>
</div>
<div className="radio_card_4">
{state?(<p>{live}</p>):""}
{state?(<img src="https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif"/>):""}
{state?(<select
                  onChange={(e) => handleVideoSpeed(e)}
                  value={speed}
                  >
                  <option value={0.5}>0.5x</option>
                  <option value={1}>1x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
              </select>):""}

</div>
</div>
<div>
<audio
src={src}
ref={audioPlayer}
onTimeUpdate={onPlaying}
/>
</div>
</div>
)
}

export default Radio


