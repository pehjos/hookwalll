import React from 'react'
import './topic.css'
import Headlines from './Headlines'
import {  useQuery } from 'react-query'
import {
AppsOutlined, CollectionsBookmarkOutlined ,
Healing,

} from '@material-ui/icons'
function Topics() {
    // FETCH POST
const { DtaLoading, error, data } = useQuery('health', () =>
fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json').then(res =>
  res.json()

)
)
return (
<div className="topics">
<div className="topics_container">
  
<div className="topics_container__ch">
<div className="topics_container__ch_head">
    <div className="topics_container__heda">
<p>HEALTH</p>
<Healing/>
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
       index<3&&(
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

