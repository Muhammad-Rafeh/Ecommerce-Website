import React from 'react';


function Category(props) {

    const imgAddress = `http://localhost:5000/${props.CategoryInfo.categoryImage}.webp`;

    return (
        <div>
           <img src={imgAddress} className="c-img" />
           <p className="c-p">{props.CategoryInfo.name}</p>
        </div>
    )
}

export default Category
