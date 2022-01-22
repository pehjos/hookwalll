import React from 'react'
import './news.css'
import {  useQuery } from 'react-query'

import { Language, Link } from '@material-ui/icons'

function StoryBtn () {


    const { DtaLoading, error, data } = useQuery('poData', () =>
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json').then(res =>
      res.json()
    
    )
    )



    return (
        <div className="cardstory">
          
             <div className="cardstorys">
           
            { data && data.articles.map(post1 => (
            <div className="cardstory">
              <div className="cardstory1">
          <img src={post1.urlToImage}   />
          <h6>{post1.title}</h6>
          <Link/>
        
        
        </div>
        </div>
            ))}
        </div>
        </div>
    )
}

export default StoryBtn;

