import React from 'react';
import {Link} from 'react-router-dom'
import './button.css'
function Buttons() {
  return <div className="buttons">
   <div className="buttons_child">
<Link to="/sports">
<p>Sports</p>
</Link>
<Link to="/finance">
<p>Finance</p>
</Link>
<Link to="science">
<p>Science</p>
</Link>
<Link to="entertainment">
<p>Entertainment</p>
</Link>
<Link to="/technology">
<p>Technology</p>
</Link>
<Link to="/world">
<p>World</p>
</Link>
<Link to="/health">
<p>Health</p>
</Link>
<Link to="/crypto">
<p>Cryptocurrency</p>
</Link>
<Link to="/rate">
<p>Rate</p>
</Link>

 

 </div>

  </div>;
}

export default Buttons;
