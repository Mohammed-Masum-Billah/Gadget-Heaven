import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const Gadgetcards = () => {
    const {category}=useParams();
    const data=useLoaderData();
    const [gadgets,setGadgets]=useState([]);
    useEffect(()=>{
        if(category){
            const filterdByCategory=[...data].filter(gadget =>gadget.category===category)
        setGadgets(filterdByCategory)
           }
           else{
            setGadgets(data)
           }
        
    },[category,data])
    return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-8'>
            {
                gadgets && gadgets.map(gadget =>(<Card key={gadget.id} gadget={gadget}></Card>))
            }
        </div>
    </>
    );
};

export default Gadgetcards;