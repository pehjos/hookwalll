import React from 'react'
import './topic.css'
import Headlines from './Headlines'
import Moment from 'react-moment'
import {  useQuery } from 'react-query'
import {
AppsOutlined, CollectionsBookmarkOutlined ,
Healing, PublicOutlined,

} from '@material-ui/icons'
function Topics() {
    // FETCH POST
const { DtaLoading, error, data } = useQuery('science', () =>
fetch('https://saurav.tech/NewsAPI/top-headlines/category/science/in.json').then(res =>
  res.json()

)
)
return (
<div className="topics">
<div className="topics_container">
    <p>Science-lines</p>
<div className="topics_container__ch">
<div className="topics_container__ch_head">
    <div className="topics_container__heda">
<p>Science</p>
< PublicOutlined/>
</div>

<div className="topics_discovery">
<p>FULL DISCOVERY</p>
<CollectionsBookmarkOutlined/>
</div>

<div className="topics_stories">
 <p>{ data && data.articles.length}-STORIES</p> 
 </div>   
</div>






{ data && data.articles.map((post1,index) => (
      index<5&&(
<Headlines
urlToImage={post1.urlToImage}
title={post1.title}
description={post1.description}
author={post1.author}
id={post1._id}
publishedAt={post1.publishedAt}
url={post1.url}
src={post1.source.name}
/>
)))} 


</div>
</div>     
</div>
)
}

export default Topics

