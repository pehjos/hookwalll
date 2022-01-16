import React from 'react'
import './topic.css'
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
)))} 


</div>
</div>     
</div>
)
}

export default Topics

