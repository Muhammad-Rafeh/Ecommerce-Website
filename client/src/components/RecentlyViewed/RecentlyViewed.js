import React from 'react';
import { useSelector } from 'react-redux';
import RecentlyViewedItem from './RecentlyViewedItem';
import './recentlyViewed.css';

function RecentlyViewed() {

    const recentlyViewedItems = useSelector(state => state.getUserInfoReducers.userInfo.data.recentlyViewed)

    return (
        <div className="container">
            <div className="rv-heading-wrapper">
                <h3 className="rv-heading">Your Recently Viewed Items</h3>
            </div>
            <div className="rv-item-wrapper">
                {recentlyViewedItems.map((recentlyViewedItem) => {
                    return (
                        
                        <div key={recentlyViewedItem.productId} className="rv-item">
                            <RecentlyViewedItem recentlyViewedItem={recentlyViewedItem} />
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}

export default RecentlyViewed
