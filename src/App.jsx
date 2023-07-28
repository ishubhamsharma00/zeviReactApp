import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="h-screen bg-[#D7E0FF42] w-full">
        <img src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmdpbmclMjBjbG90aGVzfGVufDB8fDB8fHww&w=1000&q=80'
          alt='backgroundImg'
          className="absolute h-screen w-full -z-20"
        />
        <div className="w-full flex items-center justify-end p-6">
          <img src='https://uploads-ssl.webflow.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp'
            alt='logo'
            className="w-20 h-10 -z-10" 
          />
        </div>
        <div className=''>
          <SearchBar/>
        </div>
      </div>
    </>
  );
}

export default App;
