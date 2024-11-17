import React from 'react';

const Heading = ({title}) => {
    return (
        <div>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4 text-center'>{title}</h1>
        </div>
    );
};

export default Heading;