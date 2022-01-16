import React from 'react';
import {useSelector} from 'react-redux'
import SportsApi from './sportsApi'
import { useHistory, useLocation,Link } from 'react-router-dom';
import './sports.css'
import CardPost from  './CardPost'
import Loader from './Contentloader'
import Paginate from './Pagination';
import {  useQuery } from 'react-query'


import Card from  './Card'
import {

ArrowBackOutlined,
  SportsHockeyOutlined,
  SportsVolleyballOutlined,
  SportsSoccerOutlined,
  SportsHandball,
  SportsRugbyOutlined,
  SportsBaseballOutlined,
  SportsBasketballOutlined,
  SportsMotorsports




} from '@material-ui/icons'
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function Sports(setCurrentId) {
// FETCH POST

const { DtaLoading, error, data } = useQuery('reData', () =>
fetch('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json').then(res =>
  res.json()

)
)

console.log(data)

  const query = useQuery1();
  const page = query.get('page') || 2 && 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)


const recommendedPosts = posts.filter(({ tags }) => tags== 'Sports News');

if(!recommendedPosts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
<div className="sportsheader">
<div className="sportsheader1">
  <Link to ="/">
  < ArrowBackOutlined/>
  </Link>
  <p>LATEST SPORTS NEWS & LIVE SCORES</p>
  </div>

  <Link to="football">
  <div className="sportsheadercontent">
    <p className="blinking">SOCCER LIVE </p>
  
    </div>
    </Link>

  {/* </div>
           <div className="sportsheadercontent">
      <Link to="/volley"  >
    <SportsVolleyballOutlined className="blinking"/>
    </Link>
    <Link to="hockey">
    <SportsHockeyOutlined className="blinking"/>
    </Link>
    <Link to="football">
    <SportsSoccerOutlined className="blinking"/>
    </Link>
    <Link to="handball">
    <SportsHandball className="blinking"/>
    </Link>
    <Link to="rugby">
    <SportsRugbyOutlined className="blinking"/>
    </Link>
    <Link to="baseball">
    < SportsBaseballOutlined className="blinking"/>
    </Link>
    <Link to="basketball">
  
<SportsBasketballOutlined className="blinking"/>
    </Link>
    
      <Link to="formula1">
  
      <SportsMotorsports className="blinking"/>
      </Link>
 */}

    
      </div>
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
{/* <Paginate page={page}/> */}
<SportsApi/>
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
src={post1.author}
ProviderUrl={post1.url}
time={post1.publishedAt}
share=""
Clicks="@news"



/>
))} 
</div>

)
}

export default Sports
