import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { addFavourite, addWishList, getAllfavorites, getWishList } from '../Utility/Utility';

const GadgetDetails = () => {
    const {product_id}=useParams();
    const data=useLoaderData();
    const [gadget,setGadgets]=useState({});
    const [isFavorite,SetisFavorite]=useState(false);
    const {product_title,product_image,Specification,price,description}=gadget;
    
    useEffect(()=>{
        const singledata=data.find(gadget=>gadget.product_id==product_id);
        setGadgets(singledata);
        
        const favorites=getAllfavorites();
        const isExist=favorites.find(item=>item.id===singledata.product_id);
        if(isExist) {
            SetisFavorite(true)
        }

    },[data,product_id])

    const handleFavourite= gadget =>{
        addFavourite(gadget)
        SetisFavorite(true)
    }

    const handleWishlist=(gadget)=>{
        addWishList(gadget)
        // getWishList()
    }
    return (
        <>
   <div className='min-h-[500px]'>
   <Banner
            title={'Product Details'} 
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>
        <div className='flex gap-5 justify-center border-2 shadow-xl absolute top-48 right-96 bg-white p-10'>
             <div className='w-28 h-44'>
                <img className='w-full h-full' src={product_image} alt="" />
             </div>
             <div>
                <h1>{product_title}</h1>
                <h4>{price}</h4>
                <p>{description}</p>
                <div className='flex flex-col justify-center gap-6'>
                            <h1 className='text-2xl font-thin'>Specification:</h1>
                            <ul className='text-xl ml-12'>
                                {
                                    Specification &&
                                    Specification.map(i=>(<li className='list-disc' key={i}>{i}</li>))
                                }

                            </ul>

                        </div>
                        <div>
                        <button disabled={isFavorite} onClick={()=>handleFavourite(gadget)} className='btn btn-warning'>Add Favourite</button>
                        <button  onClick={()=>handleWishlist(gadget)} className='btn btn-warning'>WishList</button>
                        </div>

             </div>
        </div>
   </div>
        </>
        
    );
};

export default GadgetDetails;