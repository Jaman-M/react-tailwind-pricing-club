import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const PricingOption = (props) => {
    const{name,price} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='
            bg-indigo-300 text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/month</span>
            </p>
            <div>
                <h3 className='text-2xl text-left'>Benifits: </h3>
                <p className='flex items-center'> <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon> Awesome Feature </p>
            </div>
        </div>
    );
};

export default PricingOption;