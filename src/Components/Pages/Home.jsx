import React from 'react';
import Banner from '../Banner/Banner';
import Heading from './Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Category/Categories';

const Home = () => {
    const categories=useLoaderData();
    return (
        <div>
            {/* Banner  */}
            <Banner 
            title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} 
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} button={'Shop Now'}></Banner>
            {/* Heading */}
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
           <div className='flex gap-5 justify-around'>
             {/* Categories  */}
             <Categories categories={categories}></Categories>
            {/* Dynamic Nested Section */}
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Home;