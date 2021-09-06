import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../redux/search/searchActions.js';
import { Link, Redirect } from 'react-router-dom';
import '../Navigation/appBar.css';
function Search() {


  const searched = useSelector(state=>state.searchReducers.searched);
  const [searchTerm , setSearchTerm] = useState("");
  
  const dispatch = useDispatch();

  const fireSearch = (e) => {
    if(e.charCode == 13){

      dispatch(getSearch({searchedItem : searchTerm}));
      
      console.log(searchTerm);

    }
  }

    return (
        <div>
          <input type="text" placeholder="Search for anything"  className="search-bar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyPress={e => fireSearch(e)} />
          { searched? <Redirect exact to='/searchedProducts'></Redirect> : "" }
        </div>
    )
}

export default Search
