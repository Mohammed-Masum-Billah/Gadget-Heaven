import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Gadgets from '../Pages/Gadgets';
import Dashboard from '../Pages/Dashboard';
import Gadgetcards from '../GadgetCards/Gadgetcards';
import GadgetDetails from '../Pages/GadgetDetails';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/Categories.json'),
                children:[
                    {
                        path:'/',
                        element:<Gadgetcards></Gadgetcards>,
                        loader:()=>fetch('/Gadgets.json'),
                    },
                    {
                        path:'/category/:category',
                        element:<Gadgetcards></Gadgetcards>,
                        loader:()=>fetch('/Gadgets.json'),
                    },
                ]
            },
            {
                path:'/Gadgets',
                element:<Gadgets></Gadgets>
            },
            {
                path:'/Dashboard',
                element:<Dashboard></Dashboard>,
                loader:()=>fetch('/Gadgets.json'),
            },
            {
                path:'/gadget/:product_id',
                element:<GadgetDetails></GadgetDetails>,
                loader:()=>fetch('../Gadgets.json'),
            },
        ]
    }
])

export default Routes;