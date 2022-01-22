import React,{useState, useRef} from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { useDispatch } from 'react-redux';
import { commentPost } from './actions/Post';
import {CameraAlt,Send,Mood,Replay, Reply, FavoriteBorder, Favorite, Close

} from '@material-ui/icons'
import './commentsec.css'
import { Typography, TextField, Button } from '@material-ui/core/';
function Commentsection({post}) {

    const user = JSON.parse(localStorage.getItem('profile'));
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const [comments, setComments] = useState(post?.comments);
    const commentsRef = useRef();
  
    const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${message}`, post._id));
  
      SetMessage('');
      setComments(newComments);
  console.log(message)
    //   commentsRef.current.scrollIntoView({ behavior: 'smooth',top:500 });
    };




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
{/* {image?(<Close onClick={delpreview} />):(<CameraAlt onClick={myfile}/>)} */}

<div className="input__Text">
<input placeholder="Add your toughts..."
  value={message}
  onChange={event => SetMessage(event.target.value)}
 
/>
<Send disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}/>
</div>

{emojistate?(<Close onClick={Emojicall}/>): <Mood onClick={Emojicall}/>}

</div>


{emojistate?(<Picker  onSelect={emoji => SetMessage(message + emoji.native) }color="#2196f3"title="pehjos"style={{marginTop:'50px'}} />):(<div className="contentComs">



         
<div className="contentComentname_all">  
{comments?.map((c, i) => (
          
 

         
<div key={i} className="contentCom">
<div className="contentComent">
<div className="contentComentname">

<p><strong>{c.split(': ')[0]}</strong></p>

    
</div>
<div className="contentComenttext">
<p> {c.split(':')[1]}

</p> 
</div>
</div>

{/* <div className="contentComentreply">
<div className="contentComentreply1">
<Reply/>
<p>reply</p>
</div> 
{stated?(<Favorite onClick={ShowWatch} style={{color:'tomato'}}/>):(<FavoriteBorder onClick={ShowWatch}/>)}
</div>  */}

</div>
        ))}
</div>
          </div>
)}
 {/* <div className="content_scroll" ref={commentsRef} /> */}
          </div>    
    

        </div>
    )
}

export default Commentsection
