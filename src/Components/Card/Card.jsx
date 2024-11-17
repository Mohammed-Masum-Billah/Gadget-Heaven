import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Card = ({gadget,handleRemoveAddList,handleRemoveWishList}) => {
    const {pathname}=useLocation();
    const {product_id,product_title,product_image,price}=gadget;
    return (
        <div>
             <div className='w-72 h-50 object-cover overflow-hidden shadow-xl rounded-xl'>
                <img className='w-fit h-full' src={product_image} alt="" />
            </div>
           <div>
           <h1 className='font-bold'>{product_title}</h1>
            <p>Price:${price}</p>
            <Link to={`/gadget/${product_id}`} className='btn btn-warning'>Details</Link>
            {
                pathname==='/Dashboard' && (
                    <div onClick={()=>handleRemoveWishList(product_id)} className='btn btn-warning mx-10'>
                        Delete 
                    </div>
                )
            }
           </div>
        </div>
    );
};

export default Card;