import React,{useState} from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import {CameraAlt,Send,Mood,Replay, Reply, FavoriteBorder, Favorite, Close



} from '@material-ui/icons'
import './commentsec.css'
function Commentsection() {
// emoji
const [emojiPickerState, SetEmojiPicker] = useState(false);
const [message, SetMessage] = useState("");



function triggerPicker(event) {
  event.preventDefault();
  SetEmojiPicker(!emojiPickerState);
}




    const [image, setImage] = useState(false)
    const [emojistate, setEmojistate] = useState(false)
    const [stated, setStated] = useState(false)
const ShowWatch=()=>{
if(stated){
setStated(false)
}
else{
setStated(true)
}
}
const Emojicall=()=>{
    if(emojistate){
        setEmojistate(false)
    }
    else{
        setEmojistate(true)
        
    }
    }
const myfile=()=>{
document.getElementById('btnfile').click()


}

const uploadpreview=()=>{
  var oFreader=new  FileReader()
  oFreader.readAsDataURL(document.getElementById('btnfile').files[0]);
  oFreader.onload=function(oFREvent){
      document.getElementById("preview").src=oFREvent.target.result;
//    console.log( document.getElementById("preview").src=oFREvent.target.result);
    setImage(true) 
  }
   if (image) {
setImage(false)

   }else{
       setImage(true)
   }
    
    }
    const delpreview=()=>{
        setImage(false)


    }

    const handleEmtyInput=({target})=>{

        const files=target.files
        target.value=''
        }


    return (
        <div className="mainsection">
            
          <div className="submain">
       {image? (<img accept=".png,.jpg,.jpeg,.gif" id="preview"/>):""}
          <div className="submainheader">
          <input onClick={handleEmtyInput} onChange={uploadpreview} accept=".png,.jpg,.jpeg,.gif" type="file" id="btnfile"/>       
{image?(<Close onClick={delpreview} />):(<CameraAlt onClick={myfile}/>)}

<div className="input__Text">
<input placeholder="Add your toughts..."
  value={message}
  onChange={event => SetMessage(event.target.value)}

/>
<Send/>
</div>

{emojistate?(<Close onClick={Emojicall}/>): <Mood onClick={Emojicall}/>}

</div>


{emojistate?(<Picker  onSelect={emoji => SetMessage(message + emoji.native) }color="#2196f3"title="pehjos"style={{marginTop:'50px'}} />):(<div className="contentComs">
<div className="contentCom">
<div className="contentComent">
<div className="contentComentname">
<p>Pehjos Post</p>

    
</div>
<div className="contentComenttext">
<p>This where there comments of all users will be display, so after implementing this ,you will see it .
😍😘🥰😅
</p> 
</div>
</div>
<div className="contentComentreply">
<div className="contentComentreply1">
<Reply/>
<p>reply</p>
</div> 
{stated?(<Favorite onClick={ShowWatch} style={{color:'tomato'}}/>):(<FavoriteBorder onClick={ShowWatch}/>)}
</div> 

</div>
<div className="contentCom">
<div className="contentComent">
<div className="contentComentname">
<p>Pehjos Post</p>

    
</div>
<div className="contentComenttext">
<p>This where there comments of all users will be display, so after implementing this ,you will see it .
😍😘🥰😅
</p> 
</div>
</div>
<div className="contentComentreply">
<div className="contentComentreply1">
<Reply/>
<p>reply</p>
</div> 
{stated?(<Favorite onClick={ShowWatch} style={{color:'tomato'}}/>):(<FavoriteBorder onClick={ShowWatch}/>)}
</div> 

</div>
<div className="contentCom">
<div className="contentComent">
<div className="contentComentname">
<p>Pehjos Post</p>

    
</div>
<div className="contentComenttext">
<p>This where there comments of all users will be display, so after implementing this ,you will see it .
😍😘🥰😅
</p> 
</div>
</div>
<div className="contentComentreply">
<div className="contentComentreply1">
<Reply/>
<p>reply</p>
</div> 
{stated?(<Favorite onClick={ShowWatch} style={{color:'tomato'}}/>):(<FavoriteBorder onClick={ShowWatch}/>)}
</div> 

</div>
<div className="contentCom">
<div className="contentComent">
<div className="contentComentname">
<p>Pehjos Post</p>

    
</div>
<div className="contentComenttext">
<p>This where there comments of all users will be display, so after implementing this ,you will see it .
😍😘🥰😅
</p> 
</div>
</div>
<div className="contentComentreply">
<div className="contentComentreply1">
<Reply/>
<p>reply</p>
</div> 
{stated?(<Favorite onClick={ShowWatch} style={{color:'tomato'}}/>):(<FavoriteBorder onClick={ShowWatch}/>)}
</div> 

</div>
<div className="contentCom">
<div className="contentComent">
<div className="contentComentname">
<p>Pehjos Post</p>

    
</div>
<div className="contentComenttext">
<p>This where there comments of all users will be display, so after implementing this ,you will see it .
😍😘🥰😅
</p> 
</div>
</div>
<div className="contentComentreply">
<div className="contentComentreply1">
<Reply/>
<p>reply</p>
</div> 
{stated?(<Favorite onClick={ShowWatch} style={{color:'tomato'}}/>):(<FavoriteBorder onClick={ShowWatch}/>)}
</div> 

</div>
          </div>
)}
          </div>    
    

        </div>
    )
}

export default Commentsection
