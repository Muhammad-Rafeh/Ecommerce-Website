import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux/product/productActions.js'
import './productList.css';


function ProductListItem(props) {

    //const imgAddress = `http://localhost:5000/${props.product.categoryImage}.webp`;

   
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getProduct({product : props.product}));
        console.log("clicked");
    }

    return (
        <button className="pli-button" onClick={handleClick}>
                    <div className="pli-root-wrapper">
            <div className="pli-container">
                <div className="pli-img-wrapper">
                    <img class="pli-img" src={props.product.productImage} />
                </div>
            <div className="pli-data-wrapper">
                <div className="pli-title-wrapper">
                    <p>{props.product.name}aaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="pli-condition-wrapper">
                    <p>Brand New</p>
                </div>
                <div className="pli-price-wrapper">
                    <p>{props.product.price} $</p>
                </div>
                <div>
                    <p>Buy it Now</p>
                </div>
            </div>

        </div>
   

        </div>
        
        </button>

     )
    }    
export default ProductListItem
