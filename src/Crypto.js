import React from 'react'
import './news.css'
import optionalimage from './logo.jpg'
import {  useQuery } from 'react-query'
import { Language, Link } from '@material-ui/icons'


function StoryBtn () {


    const { DtaLoading, error, data } = useQuery('fetchDATA', () =>
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "b1afbcb2ffmshd56b639cfd7d9e4p1e023ajsn222a16b68599"
	}
}).then(res =>
      res.json()
    
    )
    )



    return (
        <div className="cardstory2">
             {/* <p>Top tech News</p> */}
             <div className="cardstorys2">
           
            { data && data.articles.map(post=> (
            <div className="cardstory2">
              <div className="cardstory12">
        {!post.media?( <img src={optionalimage}  />):(<img src={post.media}  />)}
          <h6>{post.title}</h6>
         <Link/>
        
        </div>
        </div>
            ))}
        </div>
        </div>
    )
}

export default StoryBtn;

