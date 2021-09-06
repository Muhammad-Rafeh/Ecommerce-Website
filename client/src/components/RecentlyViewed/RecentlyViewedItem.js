import React from 'react';
import image from './NoImg.jpg'
import './recentlyViewed.css';

function RecentlyViewedItem(props) {
    const image = props.recentlyViewedItem.productImage;
    return (
        <div>
            <img src={image} alt="image" className="recently-viewed-item-img"/>
            <h5> $ {props.recentlyViewedItem.price}</h5>
        </div>
    )
}

export default RecentlyViewedItem
