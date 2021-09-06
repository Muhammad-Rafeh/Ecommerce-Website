import React from 'react'
import './categoryBar.css'
function CategoryBar() {
    return (
        <div className="wrap">
            <div className="category-bar-wrapper">
            <div className="float-left">
                Home
            </div>
            <div className="float-left">Saved</div>
            <div className="float-left">Electronics</div>
            <div className="float-left">Fashion</div>
            <div className="float-left">Health & Beauty</div>
            <div className="float-left">Home & Garden</div>
            <div className="float-left">Sports</div>
            <div className="float-left">Collectibles & Art</div>
            <div className="float-left">Industrial equipments</div>
            <div className="float-left">Motors</div>
            <div className="float-left">Deals</div>
            <div className="float-left">Sell</div>
        </div>
        {/* <hr className="hr"/> */}
        </div>
        
    )
}

export default CategoryBar
