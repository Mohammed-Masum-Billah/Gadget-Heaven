import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { getAllfavorites, getWishList } from '../Utility/Utility';

const Navbar = () => {
  const allItem=useLoaderData();
    const [gadgets,setGadgets]=useState([]);
    const [addedItem,setAddItem]=useState([]);
    useEffect(()=>{
        const favorites=getAllfavorites();
        setGadgets(favorites)
    },[])
    useEffect(()=>{
      const favorite=getWishList();
      setAddItem(favorite)
  },[])
    return (
     <div className='bg-[#9538E2] text-white'>
         <div className="navbar px-24 backdrop-blur-xl bg-[#9538E2] z-50 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink 
            to='/'
            className={({isActive})=>`font-bold ${isActive?'text-warning':'hover:text-warning'}`}>Home</NavLink>
            <NavLink className={({isActive})=>`font-bold ${isActive?'text-warning':'hover:text-warning'}`} 
            to='/Statistics'
            >Statistics</NavLink>
            <NavLink className={({isActive})=>`font-bold ${isActive?'text-warning':'hover:text-warning'}`} 
            to='/Dashboard'
            >Dashboard</NavLink>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink 
            to='/'
            className={({isActive})=>`font-bold ${isActive?'text-warning':'hover:text-warning'}`}>Home</NavLink>
            <NavLink className={({isActive})=>`font-bold ${isActive?'text-warning':'hover:text-warning'}`} 
            to='/Statistics'
            >Statistics</NavLink>
            <NavLink className={({isActive})=>`font-bold ${isActive?'text-warning':'hover:text-warning'}`} 
            to='/Dashboard'
            >Dashboard</NavLink>
         
          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{gadgets.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold"></span>
          <span className="text-info">Subtotal: $0</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>

  </div>
        </div>
        <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item">{addedItem.length}</span>
      </div>
    </button>
      </div>
   
     </div>
     
    );
};

export default Navbar;