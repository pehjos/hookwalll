import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import CardPost from "./CardPost";
import {fetchPosts2} from './api/index'
import Loader from "react-loader-spinner";
import {Skeleton,Stack} from '@mui/material'
import "./App.css";
export default function App({setCurrentId,currentId,}) { 
const {
data,
isLoading,
isError,
hasNextPage,
fetchNextPage
} = useInfiniteQuery("posts", fetchPosts2, {
getNextPageParam: (lastPage, pages) => {
if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
return undefined;
}
});


return (
<div className="App"> 

<main className="main">
{isLoading ? (<div className="loader10">
  <Loader
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
     
      />
</div>) : isError ? (
  <section class="page_404"> <div class="container"> <div class="row"> <div class="col-sm-12 "> <div class="col-sm-10 col-sm-offset-1 text-center"> <div class="four_zero_four_bg"> <h1 class="text-center ">404</h1> </div> <div class="contant_box_404"> <h3 class="h2"> Look like you're lost </h3> <p>the page you are looking for not avaible!</p> <a href="" class="link_404">Go to Home</a> </div> </div> </div> </div> </div> </section>
) : (
<InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}
loader={<div className="loader45" key={0}><Loader
type="Oval"
color="#00BFFF"
height={30}
width={30}

/></div>}

>
{data.pages.map((page) =>
page.results.data.map((post) => 
post.tags!=="Science News"?"":(
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
photo={post.photo}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
tag={post.tags}
description={post.description}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share=""
love={post.likeCount}
comment={post.comments.length}
_id={post._id}
/>    

)

)
)}
</InfiniteScroll>
)}
</main>
</div>
);
}