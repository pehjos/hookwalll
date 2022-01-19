import React from 'react'
import './shopcard.css'
function ShopCard({price,title,image,id}) {
    const link=`https://forecastmall.com/posts/${id}`
return (
<div className="shopCard">
<div className="shopCard__head">
<div className="shopCard_card">
 <a target="_self" href="https://forecastmall.com"><img src={image} /></a>
 <p>{title}</p> 
 <h6>¢{price}</h6> 

</div>
</div>   
</div>
)
}

export default ShopCard
