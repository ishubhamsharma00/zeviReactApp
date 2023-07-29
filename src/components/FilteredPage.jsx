import React, { useState } from 'react';
import Logo from './Logo';
import { CiSearch } from 'react-icons/ci';
import { faker } from '@faker-js/faker';
import {AiTwotoneStar} from 'react-icons/ai';

const FilteredPage = () => {
  const [input, setInput] = useState('');

  const Cards = Array.from({ length: 12 }, (_, index) => ({
    name: faker.commerce.productName(),
    photo: faker.image.fashion(640, 480, true),
    price: faker.commerce.price({max: 999}),
    mrp: faker.commerce.price({min: 1000},{max:1200},true),
  }));

  return (
    <div className='w-full h-screen bg-white'>
      <Logo />
      <div className='flex justify-center py-8 w-full'>
        <div className='flex items-center justify-between h-10 w-1/2 bg-white border border-[#00000080] px-6 text-base rounded-xl outline-none py-2'>
          <input
            type='search'
            placeholder='Search'
            className='bg-white w-full outline-none placeholder:text-[#00000066] placeholder:font-inter placeholder:font-light'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <CiSearch className='h-6 w-6 text-gray-400' />
        </div>
      </div>

      <div className='w-full  flex'>
        <div className='w-1/5 h-full  flex justify-center font-inter text-2xl font-normal'>Search Result</div>

        <div className='flex justify-center w-4/5 h-full px-6 py-10'>
          <div className='w-full grid grid-cols-4 gap-y-6'>
            {Cards.map((item, index) => (
              <div className='my-4 h-full w-[190px] rounded-[4px]'>
                <img src={item.photo} alt='cardImages' className='h-[260px] w-full' />
                <p>{item.name}</p>
                <p>{item.mrp}</p>
                <p>{item.price}</p>
                <div className='flex text-yellow-400'>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilteredPage;