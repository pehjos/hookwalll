import React from 'react'
import './news.css'
import {  useQuery } from 'react-query'
import { Language } from '@material-ui/icons'


function StoryBtn () {


    const { DtaLoading, error, data } = useQuery('ta', () =>
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/hacking/in.json').then(res =>
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
          <img src={post.urlToImage}   />
          <h6>{post.description}</h6>
         
          <h5>view</h5>
        </div>
        </div>
            ))}
        </div>
        </div>
    )
}

export default StoryBtn;

