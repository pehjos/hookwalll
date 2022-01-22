import React from 'react';
import {useSelector} from 'react-redux'
import WorldApi from './worldAPI'
import {  useQuery } from 'react-query'
import { useHistory, useLocation } from 'react-router-dom';
import './news.css'
import Card from  './Card'

function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function World(setCurrentId) {
// FETCH POST
const { DtaLoading, error, data } = useQuery('repoData', () =>
fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json').then(res =>
  res.json()

)
)
console.log(data)

  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)

const recommendedPosts = posts.filter(({ tags }) => tags== 'World News');

if(!recommendedPosts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
{/* {
isLoading?("Loading"):
(<div>
{recommendedPosts.map((post)=>(  
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
share="100"
love={post.likeCount}
comment="79"
/>
))}
</div>)
} */}
<div className="Page__div">

<WorldApi/>
</div>
{ data && data.articles.map(post1 => (
<Card

photo="{post.photo}"
newsrc={post1.source.name}
newtype="MH"
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post1.urlToImage}
// video={post1.video}
title={post1.title}
tag="local"
description={post1.description}
seeMore="see more..."
articlebody={post1.content}
rank="view"
src="#news"
ProviderUrl={post1.url}
time={post1.publishedAt}
share=""
Clicks="@news"

_id={post1._id}

/>
))} 
</div>

)
}

export default World
