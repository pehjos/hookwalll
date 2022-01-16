import React from 'react'
import './shop.css'
import {
Card,
Avatar,
} from '@material-ui/core'
import {
    Star,
ShoppingBasket,
Room,

} from '@material-ui/icons'
function Shop() {
return (
<div className="shop">
<img src="https://img.icons8.com/bubbles/50/000000/shopping-cart.png"/>
    <h6>Sponsors</h6>
    <ShoppingBasket/>
<Card className="shopcontent">
<div className="shopcontentheader">
<Avatar  src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=s9QOUyciyM0DvLagKsT0MHIDngGmJDPa49jj3mE8Kd0"/>
<p>@pehjos.products</p>

</div>
<div className="shopcontentmiddle">
<a href="https://pehjoss.netlify.app/">
<img src="https://www.reosolarpower.com/uploads/030e74f6.jpg"/>
</a>
<h6>¢789</h6>
</div>
<div className="shopcontentfooterlocation">
    <Room/>
<p>Sunyani-Abesim</p>

</div>
<div className="itemdescription">
    <p>Solar grnerators for powering a whole house#5600W.#200AC output .3Very Affordable</p>
</div>
<div className="shopcontentfooter">
  
<p>+233506136624</p>
<Star/>
<h5>4.0</h5>
</div>
</Card>
<Card className="shopcontent">
<div className="shopcontentheader">
<Avatar  src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=s9QOUyciyM0DvLagKsT0MHIDngGmJDPa49jj3mE8Kd0"/>
<p>@Atis.products</p>

</div>
<div className="shopcontentmiddle">
<a href="https://pehjoss.netlify.app/">
<img src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"/>
</a>
<h6>¢50,000</h6>
</div>
<div className="shopcontentfooterlocation">
<Room/>
<p>Accra-Dansoman</p>
</div>
<div className="itemdescription">
    <p>Solar grnerators for powering a whole house#5600W.#200AC output .3Very Affordable</p>
</div>
<div className="shopcontentfooter">
<p>+233506136624</p>
<Star/>
<h5>4.0</h5>
</div>
</Card>
<Card className="shopcontent">
<div className="shopcontentheader">
<Avatar  src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=s9QOUyciyM0DvLagKsT0MHIDngGmJDPa49jj3mE8Kd0"/>
<p>@pehjos.products</p>

</div>
<div className="shopcontentmiddle">
<a href="https://pehjoss.netlify.app/">
<img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415816_sd.jpg"/>
</a>
<h6>¢5000</h6>
</div>
<div className="shopcontentfooterlocation">
<Room/>
<p>Sunyani-Abesim</p>
</div>
<div className="itemdescription">
    <p>Solar grnerators for powering a whole house#5600W.#200AC output .3Very Affordable</p>
</div>
<div className="shopcontentfooter">
<p>+233506136624</p>
<Star/>
<h5>4.0</h5>
</div>
</Card>
</div>
)
}

export default Shop
