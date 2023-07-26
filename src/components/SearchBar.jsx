import React from 'react';
import {RiSearchLine} from 'react-icons/ri';

const SearchBar = () => {

  return (
    <div className='flex items-center justify-between h-14 w-3/5 bg-[#FFFFFF] px-6 text-xl rounded-xl outline-none shadow-xl py-2'>
        <input 
        type='search'
        placeholder='Search'
        className='searchbar bg-white w-4/5 outline-none placeholder:text-[#00000066] placeholder:font-inter placeholder:font-normal'
        />
        <RiSearchLine className='h-8 w-8 text-gray-400 '/>
    </div>
  )
}

export default SearchBar;
