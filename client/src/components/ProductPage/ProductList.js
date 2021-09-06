import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import getProductList from '../../redux/productList/productListActions';
import './productList.css';
import ProductListItem from './ProductListItem';

import { Link, Redirect } from 'react-router-dom'; 

function ProductList() {

    const searchResults = useSelector(state => state.searchReducers.searchResults);

    const productSelected = useSelector(state => state.productReducers.productRecieved);


  // const dispatch = useDispatch();

    //  useEffect(()=>{
    //     dispatch(getProductList({}))
    //  })

    return (
        <div className="container">
            <div className="pg-wrap" >
                <div className="sidebar">
                    <p>.</p>
                </div>
                <div className='pl' >
                {
                
                    searchResults.map((product) => {
                        return (
                           
                                <ProductListItem className="pli-root-wrapper1" product={product} />
                           
                            
                        )
                    })
                    
                }
                
                </div>
                {
                productSelected ? <Redirect exact to='/product' /> : ""
                }
            </div>
        </div>
        
    )
}

export default ProductList
