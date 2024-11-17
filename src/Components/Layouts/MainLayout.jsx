import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* Nabvar */}
            <div className='h-16'>
           <Navbar></Navbar>
           </div>
            {/* Dynamic Section  */}
            <div className='min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;