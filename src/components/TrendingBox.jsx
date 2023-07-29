import React from 'react';
import { faker } from '@faker-js/faker';

const TrendingBox = () => {

    const clothingItems = Array.from({ length: 5 }, (_, index) => ({
        name: faker.commerce.productName(),
        photo: faker.image.fashion(640, 480, true),
    }));

    const trendingItems = Array.from({ length: 5 }, (index) => (faker.commerce.productName()));

    return (
        <div className='flex flex-col bg-white rounded-[4px] w-2/3 h-full mt-4 p-4 font-inter' >
            <div className='flex p-1 flex-col'>
                <p className='font-[400px] text-[20px]'>Latest Trends</p>
                <div className='grid grid-cols-5 gap-4 mt-2'>
                    {clothingItems.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <img src={item.photo}
                                alt='trandingImages'
                                className='w-[155px] h-[200px]' />
                            <p className='text-xs mt-2 font-extralight'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='my-4 p-1'>
                <p className='font-[400px] text-[20px]'>Popular suggestions</p>
                <div className='mt-2'>
                    {trendingItems.map((items) => (
                        <p className='font-light text-xs mt-1'>
                            {items}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingBox