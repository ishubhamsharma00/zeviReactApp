import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import TrendingBox from './TrendingBox';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  
  const navigate=useNavigate();
  const handleEnter=(e)=>{
    if(e.key==='Enter')
    {
      console.log(input);
      navigate('/filteredPage');
    }
  }

  return (
    <div className='h-full flex flex-col items-center justify-center w-full mt-4'>
      <div className='flex items-center justify-between h-10 md:h-14 md:w-3/5 w-4/5 bg-[#FFFFFF] px-6 text-base md:text-xl rounded-xl outline-none shadow-xl py-2'
        onClick={() => setOpen(true)}>
        <input
          type='search'
          placeholder='Search'
          className='bg-white w-full outline-none placeholder:text-[#00000066] placeholder:font-inter placeholder:font-normal'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleEnter}
        />
        <RiSearchLine className='md:h-8 md:w-8 h-6 w-6 text-gray-400 ' />
      </div>
      {open && (
        <TrendingBox/>
      )}

    </div>
  )
}

export default SearchBar;
