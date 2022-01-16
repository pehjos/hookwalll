import React,{useState,useEffect} from 'react'
import './image.css'
import numeral from 'numeral'
import Axios from 'axios'
import {
    Card,
    GridListTileBar,
} from '@material-ui/core'
import {
FavoriteBorder,
CloudDownload,
Search,
RemoveRedEyeOutlined
}from '@material-ui/icons'






function Image() {

    const [image, setimage] = useState([]);
useEffect(() => {
const fetchimage = async() => {
const res = await Axios.get('https://pixabay.com/api/?key=17444328-01bb5c92e7087ef265af56d02&q=&image_type=photo&per_page=100&order=popular,latest&safesearch=false&editors_choice=true&image_type=all&category=backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music');
setimage(res.data.hits)
 }
 fetchimage();
 console.log(image)
},[])

    return (
        <div className="image">
              <div className="imagesearch">
            <input type="text" placeholder="search images"/>
            <Search/>
            </div>
        <div className="imagecontent">

         {image.map((image)=>(
           
        <div className="cardimg"> 
         
         <img src={image.largeImageURL}/>
         <div className="tile">
         <div className="tileright">
         <p>{image.tags}.</p>
        
       </div>
       <div className="tileleft">
       <div className="tilelefticons">
       <FavoriteBorder/>
       <p>{numeral(image.favorites).format('0 a')}</p>
       </div>
       <div className="tilelefticons">
       <CloudDownload/>
       <p>{numeral(image.downloads).format('0 a')}</p>
       </div>
       <div className="tilelefticons">
       <RemoveRedEyeOutlined/>
         <p>{numeral(image.views).format('0 a')}</p>
       </div>
       </div>
         </div>
         </div>
     
         ))}  
         </div> 
         <div className="disclaimer">
<h6>Disclaimer</h6>
<a href="https://pixabay.com/">
    <img src="https://pixabay.com/static/img/public/medium_rectangle_a.png" alt="Pixabay"/>
</a>
<p>All these images are from Pixabay</p>

         </div>
        </div>
    )
}

export default Image
