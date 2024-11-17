import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lifted flex flex-col gap-4">
            <Link to='/' className='text-3xl font-thin px-10'>All</Link>
        {
            categories && 
            categories.map( category =>(
            <NavLink 
                key={category.category}
                to={`/category/${category.category}`} 
                role="tab" 
                className={({isActive})=>`tab text-3xl font-thin ${isActive?'tab-active':''}`}
                >{category.category}
                </NavLink>))
        }
    
  </div>
    );
};

export default Categories;