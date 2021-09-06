import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import './product.css'

import { getBoughtProduct } from '../../redux/boughtProduct/boughtProductActions';
import { Redirect , Link} from 'react-router-dom';

function Product() {


    
    const [ color , setColor ] = useState("");
    const [ size , setSize ] = useState("");
    const [ quantity , setQuantity ] = useState(1);

    const product = useSelector(state => state.productReducers.product);
    
    const toBuy = useSelector(state => state.boughtProductReducers.toBuy);

    const imgAddress = product.productImage;
    let sizes;

    const dispatch = useDispatch()

    const buyClick = () => {
        
        dispatch(getBoughtProduct({ id : product._id , color , size , quantity}))

    }

    
    if(product.sizes.length!==0){
        sizes = <select onChange={e => setSize(e.target.value)}>
                <option value="--Select--">--Select--</option>
            {
                product.sizes.map((size)=>{
                    return(
                        <option value={size}>{size}</option>
                    )
                })
            }
        </select>
    }else{
        sizes = "Default size only ";
    }

    return (
        <div className="container">
            <div className="root-wrapper">
                <img className="img" src={imgAddress} />
                <div className="data-wrapper">
                    <p className="name">{product.name}</p>
                    <div className="specification-wrapper">
                        <div className="condition"> Condition : <span>New with tags</span></div>
                        <div className="color">
                            <p>Color : </p>
                            <select id="cars" onChange={e => setColor(e.target.value)}>
                            <option value="--Select--">--Select--</option>
                            {
                                product.colors.map((color) => {
                                    return(
                                        <option value={color}>{color}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className="size">
                            <p>Size : </p>
                            {sizes}
                        </div>
                        <div className="quantity">
                            <p>Quantity : </p>
                            <input type='text' placeholder="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
                        </div>
                        
                        <div className="available">{product.quantity} available</div>
                        <div className="price">
                            <p>Price : <span>$ {product.price}</span></p>
                        </div>
                        
                        <button className="buy" onClick={buyClick}>Buy it Now</button>
                        <button className="cart">Add to Cart</button>
                        {
                            toBuy ? <Redirect exact to="/pay" /> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
