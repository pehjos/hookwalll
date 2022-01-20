
import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './postdetails.css';
import { useStateValue } from "./StateProvider";
import { useParams,Link, useHistory } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
import useStyles from './styles';
import {
ChatBubbleOutline,
ThumbUpAltOutlined,
ShareOutlined,
ArrowBackOutlined
} from '@material-ui/icons'
const Postdetail = () => {
const [{ basket }, dispatch] = useStateValue();



return (
<div>
<div className="datails_head">
<div className="icon_link">
<Link to ="/">
< ArrowBackOutlined/>
</Link>
</div> 
<div>
{basket.map((item,index )=> (
   index<1&&(         
 <div>   
<div className="postimage">
<img src={item.urlToImage}/>
{/* <div className="postimage_foot">
<div className="postimage_foot_icons">
<ThumbUpAltOutlined/>
{/* <p>{post.likes.length}</p> */}

{/* </div>
<div className="postimage_foot_icons">
<ChatBubbleOutline/>
<p>1</p>

</div>
<div className="postimage_foot_icons">

<ShareOutlined/>

</div>
</div> */} 
</div>
<div className="creator">
<p>Created by-- {item.author}</p>
<p>{moment(item.publishedAt).fromNow()}</p>
<h4>{item.title}</h4>
<p>{item.description}</p>
<a target="_blank" href={item.url}>Read Similar Articles from {item.src} </a>
</div>

</div>
)))}

</div>

</div>

</div>
);
};

export default Postdetail;