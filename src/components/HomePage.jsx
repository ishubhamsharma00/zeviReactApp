import React from 'react';
import SearchBar from "./SearchBar";
import Logo from './Logo';

const HomePage = () => {
  return (
    <>
      <div className="h-screen bg-[#D7E0FF42] w-full">
        <img src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmdpbmclMjBjbG90aGVzfGVufDB8fDB8fHww&w=1000&q=80'
          alt='backgroundImg'
          className="absolute h-screen md:w-full -z-20 w-screen"
        />
        <Logo/>
        <div className='md:pt-20 pt-14'>
          <SearchBar/>
        </div>
      </div>
    </>
  )
}

export default HomePage;