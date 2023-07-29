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
        <TrendingBox/>
      )}

    </div>
  )
}

export default SearchBar;
