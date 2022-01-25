import React from 'react'
import './shop.css'
import './shopcard.css'
import {Link} from 'react-router-dom'
import {  useQuery } from 'react-query'
import ShopCard from './ShopCard'
import {
Card,
Avatar,
} from '@material-ui/core'
import {
    Star,
ShoppingBasket,
Room,Search,
ArrowBackOutlined
} from '@material-ui/icons'
function Shop() {

 // FETCH POST
 const { DtaLoading, error, data } = useQuery('shop', () =>
 fetch('https://forecastmal.herokuapp.com/posts?page=1').then(res =>
   res.json()
 
 )
 )
console.log(data,"hello")


return (
<div className="shop">
<div className="radio_shop">
<Link to ="/">
  < ArrowBackOutlined/>
  </Link>
<h3>LEARN MORE ABOUT HOW YOU CAN SELL ON HOOKWALL</h3> 
{/* <div className="btnSearc">
<input type="text" placeholder="Search Products..."/>
<Search/>
</div> */}
</div> 

<div className="shop_card">
{ data && data.data.map((post1,index) => (
       index<80&&(
<ShopCard
post={post1} 
id={post1?._id}
key={post1?._id}
image={post1?.image}
price={post1?.product_price}
title={post1?.product_title}
/>
)))} 
</div>
</div>
)
}

export default Shop



// https://forecastmal.herokuapp.com/posts?page=1
