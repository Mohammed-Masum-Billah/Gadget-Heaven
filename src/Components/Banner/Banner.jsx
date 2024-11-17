import React from 'react';
import bannerimage from '../../assets/banner.jpg'

const Banner = ({title,subtitle,button}) => {
    return (
   <div className='bg-[#9538E2] text-white mb-72'>
         <div className="hero">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
            {subtitle}
            </p>
            {/* {
                pathname==='/' &&
                (
                    <button className="btn btn-primary rounded-full">{button}</button>
                )
            } */}
          </div>
        </div>
      </div>
        <div className='absolute top-48 right-60'>
            <img className='w-[700px} h-[400px] mx-auto ' src={bannerimage} alt="" />
        </div>
   </div>
    );
};

export default Banner;