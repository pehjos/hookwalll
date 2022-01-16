import React from 'react'
import './topic.css'
import Moment from 'react-moment'
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
    <p>Health-info</p>
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
    //    index>0&&(
<div className="topics_container__ch_content">
<div className="topics_container__ch_text">
<h4>{post1.title}</h4>
<p>{post1.description}</p>
<div className="topics_container__ch_footer">
<p>{post1.author}</p>--
<h6><Moment fromNow>{post1.publishedAt}</Moment></h6>
</div>
</div>
<div className="topics_container__ch_img">
<img src={post1.urlToImage}/>
</div>

</div>
))} 


</div>
</div>     
</div>
)
}

export default Topics

