import React, { useEffect ,useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './news.css'
import Adsence from './Adsence1'
import Topics from './Topics'
// import Ghanaprimier from './Ghanaprimier'
import HealthHead from './HealthHead'
import TechHeader from './TechHeader'
import HeaderSports from './HeaderSports'
import ScienceHeader from './ScienceHead'
import InfiniteScroll from "react-infinite-scroll-component";
import {AllInclusive} from '@material-ui/icons'
import ApiNews from './ApiNews'
import {fetchPosts2} from'./api/index'
import Storybtn from './Health'
import LiveScoreAPi from './LiveScoreAPi';
import Moment from 'react-moment';
import {Skeleton,Stack} from '@mui/material'
import Stories from 'react-insta-stories';
import { useDispatch, useSelector } from 'react-redux';
import CardPost from './CardPost';
import LocalApi from './LocalAPI'
import Button from './Buttons';

import { getPosts } from './actions/Post';
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function News(setCurrentId) {
  
 





// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)
// console.log(posts)
const recommendedPosts = posts.filter(({ tags }) => tags== 'Science News');
// console.log(recommendedPosts)
// // stories

const stories = 

 posts.map((post)=>(
  post.image!==""?
    {
   
      // type: post.image==""?"video":"image",
     type:"image",
      url: post.image||post.video,
      duration: 5000,
      header: {
        heading:post.name,
    
          subheading:(<Moment fromNow>{post.createdAt}</Moment>) ,
        profileImage: post.photo,
      },
     
    }
    :(<div>hello</div>)
    ))

if(!posts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
  <HeaderSports/>
  
 
{
isLoading?(<div className="loader__news">
 <Stack spacing={1}>
   
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="rectangular" width={400} height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      
    </Stack>


</div>):
(<div>
   <div className="stories">
  <div className="stories1">
<Stories
			stories={stories}
			defaultInterval={1500}
			width="100%"
			height={220}
      isPaused={true}
      loop={false}
 mute={true}
      storyStyles={{

       Zindex:"0",
        width: '430px',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        objectFit:'cover',
        height: '220px',

      }
      }
		/>
     </div>
     <div className="stories2">
       
<p> HOOK DISCOVERIES</p>
<AllInclusive/>
     </div>

    </div>
  
</div>)
}
<div className="ap">
<div className="Page__div">
  {/* <LiveScoreAPi/> */}
<HealthHead/>
<Button/>

 
  {posts.map((post,index)=>(  
    
    index<3&&(
      
      post.tags!=="Local News"?"":(
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
description={post.description}
tag={post.tags}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share=""
photo={post.photo}
love={post.likeCount}
comment={post.comments.length}
_id={post._id}
/>

  ))))}
  {/* <Ghanaprimier/> */}
  <ScienceHeader/>
  <Storybtn/>
 <Topics/>
<ApiNews/>
<TechHeader/>
<LocalApi/>
</div>

  <div className="apis">

</div>
</div>


</div>

)
}

export default News
