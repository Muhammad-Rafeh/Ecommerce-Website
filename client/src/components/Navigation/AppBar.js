import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import ebayLogo from '../../assets/ebayLogo2.PNG'
import './appBar.css'

import Search from '../Search/Search';

export default function PrimarySearchAppBar() {
 

 

  return (
    <div>
    <div className="wrap">
        <div className="float-left img-logo-wrapper">
            <img className="img-logo" src={ebayLogo} />
        </div>
        <div className="float-left category-wrapper">
            <button className="category-button">
                <div className="float-left">Shop by <br/>Category</div>
                <KeyboardArrowDownIcon  className="float-left arrowDownIcon"/>
            </button>
        </div>
        <div className="search-icon-wrapper">
            <SearchIcon className="search-icon float-left arrowDownIcon"/>
        </div>
        
       <div className="float-left search-bar-wrapper">
            
            <Search type="text" placeholder="Search for anything"  className="search-bar float-left" />
       </div>
       
          <div className="float-left all-categories-wrapper">
            <button className="all-categories"><span className="all-categories-text">All Categories        </span><KeyboardArrowDownIcon /></button>
          </div>
            <div className="float-left search-button-wrapper">
                <input type="button" value="Search" className="search-button" />
            </div>
      
       
    </div>
      <hr className="hr"/>
    </div>
  );
}