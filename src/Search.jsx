import React,{useState,useEffect} from 'react'
import {getPostsBySearch,getPosts} from './actions/Post'
import {useDispatch,} from 'react-redux'
import { useHistory,useLocation } from 'react-router-dom';





function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Search = () => {

  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [tags, setTags] = useState([]);
  const history=useHistory()  
    const [search,setSearch]=useState('')
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
    
const handleKeyPress=(e)=>{


if(e.keyCode==13){
    searchPost()

}
}
const searchPost=()=>{
if(search.trim()){
dispatch(getPostsBySearch({search}))
history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
}else{

history.push('/')
}
}
    return (
        <div>
        <input type="text" value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
        onKeyPress={handleKeyPress}
        />
        <p onClick={searchPost}>search</p>
        </div>
    )
}

export default Search
