import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import Paginate from './Pagination';
import {useSelector} from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import {
HomeOutlined,AppsOutlined,ChatOutlined
,ShoppingCartOutlined,PersonOutlineOutlined


} from '@material-ui/icons'

import './bottomnav.css'
function useQuery1() {
    return new URLSearchParams(useLocation().search);
  }

    
    
    
 
export default function SimpleBottomNavigation() {
 // FETCH POST
 const query = useQuery1();
 const page = query.get('page') || 1;
 const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)

return (
<div className="bottom__nav">
  <div className="page">
<Paginate page={page}/> 
</div>
</div>
);
}
