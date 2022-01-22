import React, { useState,useRef,useCallback,useEffect } from 'react'
import './addpost.css'
import {withRouter} from 'react-router-dom'
import {createPost} from './actions/Post'
import {updatePost} from './actions/Post'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {createVideo} from './APIfuana'
import swal from 'sweetalert2'
import {

Close,Check,  ExpandLess, ExpandMore, InsertPhoto,Videocam

} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'

export default withRouter(({ history,currentId,setCurrentId }) => {
// error handler
const [tags ,setTags]=useState(false)
  const choseImg=()=>{
    document.getElementById('btnImg').click()
    setVideoImg(true)
    setState(false)
  
    
    }
// Trial upload onClick



    const closeItems=()=>{
      setState(true)
      document.getElementById('video').style.pointerEvents="initial"
      document.getElementById('photo').style.pointerEvents="initial"
      // setBaseImage("")
      setImage('')
      setVid('')
      }

  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");
  const uploadImage = () => {
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "spkpypwc")
  data.append("cloud_name","pehjos-inc")
  fetch(" https://api.cloudinary.com/v1_1/pehjos-inc/image/upload",{
  method:"post",
  body: data, 
  mode:'cors'
  })
  .then(resp => resp.json())
  .then(data => {
  setUrl(data.secure_url)
console.log(data.secure_url)
document.getElementById('confirm').style.opacity="0"
document.getElementById('prev').style.opacity="1"
swal.fire( 'Good job!', 'Image uploaded successfully!', 'success' )
  })
  .catch((err) =>{ 
    
    swal.fire({ icon: 'error', 
    title: 'Oops...', text: 'Something went wrong!',
     })
     closeItems()
    }
    )

  }
  // CLOUDINARY
  
  const [vid, setVid ] = useState("");
  const [ urlVid, setUrlVid ] = useState("");
  const uploadVid = () => {
  const data = new FormData()
  data.append("file", vid)
  data.append("upload_preset", "spkpypwc")
  data.append("cloud_name","pehjos-inc")
  fetch("https://api.cloudinary.com/v1_1/pehjos-inc/video/upload",{
  method:"post",
  body: data,
  mode:'cors'
  })
  .then(resp => resp.json())
  .then(data => {
    document.getElementById('confirm').style.opacity="0"
document.getElementById('prevvideo').style.opacity="1"
    setUrlVid(data.secure_url)
    console.log(data.secure_url)
    swal.fire( 'Good job!', 'Video uploaded successfully', 'success' )
 
  }).catch((err) =>{ 

  swal.fire({ icon: 'error', 
  title: 'Oops...', text: 'Something went wrong!',
 })
   closeItems()
  }

  )
  }
  //function





  const [videos,setVideo]=useState([])

const [videoImg ,setVideoImg]=useState(true)
const [isVideoplaying, setisVideoplaying]=useState(false)
const [state ,setState]=useState(true)
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




const chosevideo=()=>{
document.getElementById('btnvideo').click()
setVideoImg(false)
setState(false)

}





const handleEmtyInput=({target})=>{
setUrl('')
setUrlVid('')

const files=target.files
target.value=''
}

const Tagss=()=>{
if (tags){
setTags(false)


}
else{
setTags(true)
}
}
// submit

// CLOUDINARY



  const [postData, setPostData] = useState({   provider:'',
  title:'',
  message:'',
  tags:'',
  image:'',
  comments:'',
  video:'',
  accountType:'',
  description:'',});
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : currentId));
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId=null;
    setPostData({   provider:'',
    title:'',
    message:'',
    tags:'',
   image:'',
   video:'',
    accountType:'',
    description:'', });
  };

 




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(createPost({ ...postData, name: user?.result?.name , image:url,video:urlVid,    accountType: user?.result?.  accountType ,user: user?.result?._id ,status:user?.result.status ,photo:user?.result.profileImg}))
   
   
      
      console.log("masa aden")
      
      clear();
 
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name, accountType: user?.result?.    accountTypeuser ,user:user?.result?._id,status:user?.result.status ,photo:user?.result.profileImg  }));
      clear();
   
      console.log("submited")
    }
  };
  if (!user?.result?.name) {
    return (
      <div>
        <p>
          Please Sign In to create your own memories and like other's memories.
        </p>
      </div>
    );
  }




  const uploadPrev=()=>{
    
    const oFreader=new  FileReader()
   oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
   oFreader.onload=function(oFREvent){
   document.getElementById("prev").src=oFREvent.target.result;
   console.log(oFREvent.target.result)
   document.getElementById('photo').style.pointerEvents="none"
   document.getElementById('photo').style.opacity="0.9"
   setImage(oFREvent.target.result)
//   swal.fire('Loading ...',).then(function() {
//    
//     uploadImage();
// });

  // setPostData({...postData, image:oFREvent.target.result})
   }
   }

// video states
const [VideoData, setVideoData] = useState({   provider:'',
title:'',
message:'',
tags:'',
image:'',
date:'',
video:'',
accountType:'',
description:'',});
   const uploadprevvideo=()=>{
   const ofFreader=new  FileReader()
   ofFreader.readAsDataURL(document.getElementById('btnvideo').files[0]);
   ofFreader.onload=function(ofFREvent){
   document.getElementById("prevvideo").src=ofFREvent.target.result;
   console.log(ofFREvent.target.result)
   document.getElementById('video').style.pointerEvents="none"
   document.getElementById('video').style.opacity="0.9"
   console.log(ofFREvent.target.result,"video")
   setPostData({...postData, video:ofFREvent.target.result})
   setVideo(ofFREvent.target.result)
   setVid(ofFREvent.target.result)
  //  swal.fire( 'Loading ...', uploadVid() , )
// setPostData({...postData, video:ofFREvent.target.result,
//     name: user?.result?.name ,accountType: user?.result?. accountType ,
//     user: user?.result?._id 
//     ,status:user?.result.status ,
//     photo:user?.result.profileImg,
//     date:new Date(),
  
//   })

   }
   }
// getvideos to faunadb 


// onclick function
function HandleDeatailsChange(event) {
console.log(event.target.value)
setVideo(event.target.value)

}
// submit
// function SubmitData(event) {
//  event.preventDefault() 
//  createVideo(postData).then(res=>{
//    console.log(postData,"created")
//  })
//  resetInput();
// }
// function resetInput(event) {
// setVideo("")

// }






  
return (

<div className="main__post">
{/* <p onClick={SubmitData}>TRIAL VIDEO:</p> */}
<form    onSubmit={handleSubmit}  >
<div className="main__posthead">
<Close onClick={() => history.goBack()}/>
<p  onClick={handleSubmit}>hook</p>
</div>
<div className="profileImgItems">
<div className="profileImg">
<Avatar  src={user?.result.profileImg}/>    
</div>
<div className="tags">
<p>Tags</p>
{tags?(<ExpandLess onClick={Tagss}/>):(<ExpandMore onClick={Tagss}/>)}
{tags?(<div className="tags__elements">

  <input type="radio" id="Local" name="gender" value="Local News"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}
  />
  <label for="Local">Local </label><br/>
  <input type="radio" id="male" name="gender" value="World News"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}
  />
  <label for="male">World  </label><br/>
  <input type="radio" id="male" name="gender" value="Science News"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Sceince </label><br/>
  <input type="radio" id="male" name="gender" value="Technology News"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Technology</label><br/>
  <input type="radio" id="male" name="gender" value="Sports News"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Sports</label><br/>
  <input type="radio" id="male" name="gender" value="Entertainment News"
  onChange={(e)=>setPostData({...postData, tags:e.target.value})}/>
  <label for="male">Finances</label><br/>
</div>
):""
}
</div>
</div>
<div className="title__textArea">
<textarea name="creator" id="input" placeholder="Add Your Article Title ..." value={postData.title}
onChange={(e)=>setPostData({...postData, title:e.target.value})}
required
/>

</div>
<div className="media___section">
 {/* {state?"kksd":( <p onClick={uploadImage}>Confirm image</p>)} */}
    {state?(<p id="default"></p>):(
<div id="imgSection" className="media___sectionImageSelected">
 {videoImg?(<img accept="image/*" id="prev"/>   ):(
<video  onClick={Playvideo} ref={Videoref}  id="prevvideo" accept="video/*"/> )}

<Close onClick={closeItems} className="closeup"/>

{/* {videoImg?(<Crop  className="crop"/>):(<p>hello</p>)} */}

</div>
    )
}

{/* <input  accept="image/*" type="file" id="btnImg" 
onClick={handleEmtyInput}
onChange={ uploadPrev}
/>  */}
{/* cloudinary codes */}
<input type="file"id="btnImg"  onChange={uploadPrev}onClick={handleEmtyInput} onChange={uploadPrev} accept="image/*" ></input>
<input onChange={uploadprevvideo} onClick={handleEmtyInput} accept="video/* " type="file" id="btnvideo"/> 
<div className="media___sectionImageOption">

<InsertPhoto id="photo"  onClick={choseImg}/>
<Videocam id="video" onClick={chosevideo}/>
<img src="https://pbs.twimg.com/profile_images/1168921769215975427/9HtgkZck.png"/>
<img src="https://cdn2.vectorstock.com/i/1000x1000/73/31/black-and-red-business-card-template-vector-14297331.jpg"/>
<img src="https://i1.wp.com/www.euroscientist.com/wp-content/uploads/2020/04/chelsea-WvusC5M-TM8-unsplash-scaled.jpg?fit=2560%2C1920&ssl=1"/>
<img src="https://assets.swappie.com/iphone11provihreaCC88.jpg"/>


</div>
</div>
<div className="desc__textAREA">
<textarea required name="description" placeholder="Article Description..."value={postData.description}
onChange={(e)=>setPostData({...postData, description:e.target.value})}


/>
</div>
<div className="confirm" id="confirm">
{image?(<p id="acceptImg" onClick={uploadImage}>Confirm <Check/></p>):""}
{vid?(<p id="acceptVid" onClick={uploadVid}>Confirm <Check/></p>):""}
</div>
</form>
</div>
)
});


