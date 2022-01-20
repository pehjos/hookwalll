
import React,{useEffect,useState,useRef} from 'react'
import { useStateValue } from "./StateProvider";
import './topic.css'
import { useParams,Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment'
function Headlines({url,src,id,title,description,author,publishedAt,urlToImage}) {
  const history=useHistory()
  const openPost=()=>{
history.push("/read")
}
  const [{basket},dispatch]=useStateValue();
  const [state,setState] =useState(false)
  const addToBasket=()=>{
  dispatch({
  type:'ADD_TO_BASKET',
  item:{
  id:id,
 urlToImage:urlToImage,
  description:description,
  title:title,
  publishedAt:publishedAt,
  author:author,
 url:url,
 src:src
  }
  })
 
  }
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
    type: 'REMOVE_FROM_BASKET',
    id: id,
    })
    }
  
console.log(basket,"is basket")
  return <div onClick={addToBasket}   >
<div onClick={removeFromBasket}  className="topics_container__ch_content">
<div onClick={openPost}  className="topics_container__ch_text">
<h4>{title}</h4>
<p>{description}</p>
<div className="topics_container__ch_footer">
<p>{author}</p>--
<h6><Moment fromNow>{publishedAt}</Moment></h6>
</div>
</div>
<div className="topics_container__ch_img">
<img  src={urlToImage}/>
</div>

</div>



  </div>;
}

export default Headlines;

