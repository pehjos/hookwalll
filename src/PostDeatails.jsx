
import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './postdetails.css';
import { useParams,Link, useHistory } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
import useStyles from './styles';
import {
ChatBubbleOutline,
ThumbUpAltOutlined,
ShareOutlined,
ArrowBackOutlined
} from '@material-ui/icons'
const Post = () => {
const { post, posts, isLoading } = useSelector((state) => state.posts);
const dispatch = useDispatch();
const history = useHistory();
const classes = useStyles();
const { id } = useParams();

useEffect(() => {
dispatch(getPost(id));
}, [id]);

// useEffect(() => {
// if (post) {
// dispatch(getPostsBySearch({ search: 'none', }));
// }
// }, [post]);

if (!post) return null;

const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
console.log(recommendedPosts,"new")

const openPost = (_id) => history.push(`/post/${_id}`);
const scrolltop= () => window.scrollTo({top:"0",behavior:"smooth"})
// if (isLoading) {
// return (
// <Paper elevation={6} className={classes.loadingPaper}>
// <CircularProgress size="7em" />
// </Paper>
// );
// }

return (
<div>
<div className="datails_head">
<div className="icon_link">
<Link to ="/">
< ArrowBackOutlined/>
</Link>
</div> 
<div className="postimage">
<img src={post.image}/>
<div className="postimage_foot">
<div className="postimage_foot_icons">
<ThumbUpAltOutlined/>
<p>{post.likes.length}</p>

</div>
<div className="postimage_foot_icons">
<ChatBubbleOutline/>
<p>1</p>

</div>
<div className="postimage_foot_icons">

<ShareOutlined/>

</div>
</div>
</div>
<div className="creator">
<p>Created by-- {post.name}</p>
<p>{moment(post.createdAt).fromNow()}</p>
<h4>{post.title}</h4>
<p>{post.description}</p>
</div>

<div className="recomend">
<h6>YOU MIGHT ALSO LIKE</h6>
<Divider />
<div className="{classes.recommendedPosts}">
{recommendedPosts.map(({ title, name, description, createdAt, image, _id }) => (
<div onClick={scrolltop}>
<div onClick={() => openPost(_id)} key={_id} className="topics_container__ch_content">
<div className="topics_container__ch_text">
<h4>{title}</h4>
<p>{description}</p>
<div className="topics_container__ch_footer">
<p>{name}</p>--
<h6>{moment(createdAt).fromNow()}</h6>
</div>
</div>
<div className="topics_container__ch_img">
<img src={image}/>
</div>

</div>

</div>

))}

</div>

</div>

</div>

</div>
);
};

export default Post;