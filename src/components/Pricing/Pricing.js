import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const PricingOptions = [
        {id:1, name:'Free', price:0, benifits: [
            'life time free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {id:1, name:'Regular', price:9.9, benifits: [
            'everything on free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
        {id:1, name:'Premium', price:19.9, benifits: [
            'everything on Regular', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals', 
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deals of the town </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas iure enim magnam hic aut ut nam praesentium totam rem.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    PricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >
                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;