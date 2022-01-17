import React,{useState,useEffect,useRef} from 'react'
import Rightmobileslider from'@material-ui/core/Drawer'
import {getAllVideos,createVideo,getPosts, deleteVideos} from './APIfuana'
import './image.css'
import Loader from "react-loader-spinner";
import {fetchPosts3} from './api/index'
import VideoCard from './Videocard'
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import numeral from 'numeral'
import {Avatar} from '@material-ui/core'
import {
FavoriteBorder,
CloudDownload,
PlayArrowRounded,
ShareOutlined,
PlayCircleOutlineRounded,
RemoveRedEyeOutlined,
ChatBubbleOutline,
CheckCircle,
Close,
VisibilityOffOutlined,
PersonAddDisabledOutlined,
VolumeMuteOutlined,
BlockOutlined,
ErrorOutlineOutlined,
VisibilityOutlined,

}from '@material-ui/icons'

function Videonext() {


//  const fetchPosts = async ({ pageParam = 1 }) => {
//   const response = await fetch(
// getAllVideos
//   );
//   const results = await response.json();
//       return { results, nextPage: pageParam + 1, totalPages: 100 };
//   }; 



  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage
    } = useInfiniteQuery("video", fetchPosts3, {
    getNextPageParam: (lastPage, pages) => {
    if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
    return undefined;
    }
    });
   



// play video
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
    

    return (
        <div className="imagen">
             
        <div className="videocontent">
        {isLoading ? (<div className="loader10">
  <Loader
        type="Rings"
        color="#00BFFF"
        height={50}
        width={50}
     
      />
</div>) : isError ? (
  <section class="page_404"> <div class="container"> <div class="row"> <div class="col-sm-12 "> <div class="col-sm-10 col-sm-offset-1 text-center"> <div class="four_zero_four_bg"> <h1 class="text-center ">404</h1> </div> <div class="contant_box_404"> <h3 class="h2"> Look like you're lost </h3> <p>the page you are looking for not avaible!</p> <a href="" class="link_404">Go to Home</a> </div> </div> </div> </div> </div> </section>
) : (
        <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
{data.pages.map((page) =>
page.results.data.map((post) => 
post.video==""?"":(
<VideoCard
newsrc={post.photo}
newtype={post.accounType}
title={post.title}
videosrc={post.video}
description={post.description}
// time={}
// love={pos}
// views={}
// comment={}







/>
)
         ))}
         </InfiniteScroll>  
)}
         </div> 
        </div>
    )
}

export default Videonext
