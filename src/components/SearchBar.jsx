import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const clothingItems = Array.from({ length: 5 }, (_, index) => ({
    name: faker.commerce.productName(),
    photo: faker.image.fashion(640,480,true),
  }));
  const trendingItems= Array.from({length:5},(index)=>(faker.commerce.productName()));
  const handleEnter=(e)=>{
    if(e.key==='Enter')
    {
      console.log(input);
    }
  }

  return (
    <div className='h-full flex flex-col items-center justify-center w-full mt-4'>
      <div className='flex items-center justify-between h-14 w-3/5 bg-[#FFFFFF] px-6 text-xl rounded-xl outline-none shadow-xl py-2'
        onClick={() => setOpen(true)}>
        <input
          type='search'
          placeholder='Search'
          className='bg-white w-full outline-none placeholder:text-[#00000066] placeholder:font-inter placeholder:font-normal'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleEnter}
        />
        <RiSearchLine className='h-8 w-8 text-gray-400 ' />
      </div>
      {open && (
        <div className='flex flex-col bg-white rounded-[4px] w-2/3 h-full mt-4 p-4 font-inter' >
          <div className='flex p-1 flex-col'>
            <p className='font-[400px] text-[20px]'>Latest Trends</p>
            <div className='grid grid-cols-5 gap-4 mt-2'>
              {clothingItems.map((item,index) => (
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
              {trendingItems.map((items)=>(
                <p className='font-light text-xs mt-1'>
                  {items}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar;
