import React from 'react'
import './news.css'
import Card from './Card'
import optionalimage from './logo.jpg'
import {  useQuery } from 'react-query'
import { Language, Link } from '@material-ui/icons'


function StoryBtn () {


    const { DtaLoading, error, data } = useQuery('oData', () =>
    fetch("https://free-news.p.rapidapi.com/v1/search?q=ghana&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "b1afbcb2ffmshd56b639cfd7d9e4p1e023ajsn222a16b68599"
	}
}).then(res =>
      res.json()
    
    )
    )
console.log(data)


    return (
        <div className="cards">
             {/* <p>Top tech News</p> */}
             <div className="cardstor">
           
            { data && data.articles.map(post=> (
           <Card
           articlebody={post.summary}
           src={post.topic}
           photo="{post.photo}"
           newsrc={post.author}
           newtype="MH"
           newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
           Url="url"
           newimage={post.media}
           // video={post1.video}
           title={post.title}
           tag={post.topic}
           description={post.summary}
           seeMore="see more..."
           articlebody={post.summary}
           ProviderUrl={post.link}
           time={post.published_date}
           share=""
           rank={post.rank}
           Clicks="clicks"
           
           _id={post._id}
           />
            ))}
        </div>
        </div>
    )
}

export default StoryBtn;

