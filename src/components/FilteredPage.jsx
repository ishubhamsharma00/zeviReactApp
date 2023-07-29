import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { CiSearch } from 'react-icons/ci';
import { faker, tr } from '@faker-js/faker';
import { GrStar } from 'react-icons/gr';
import { AiFillHeart } from 'react-icons/ai';
import { PiHeartThin } from 'react-icons/pi';
import FilterOption from './FilterOption';

const FilteredPage = () => {
  const [filter, setFilter] = useState(false);
  const handleSetFilter = () => {
    setFilter(!filter);
  };
  const [input, setInput] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [allData, setAllData] = useState();

  const handleWishlist = (props) => {
    setWishlist(oldArray => [...oldArray, props]);
  };

  const removeWishlist = (value) => {
    setWishlist(oldValues => {
      return oldValues.filter(wish => wish !== value);
    })
  };

  const WishListMake = (props) => {
    const filteredData = wishlist.filter((item) => item.includes(props));

    if (filteredData.length > 0) {
      return true;
    }
    return false;
  }

  const getAllData = async () => {
    try {
      const Cards = await Array.from({ length: 12 }, (_, index) => ({
        name: faker.commerce.productName(),
        photo: faker.image.fashion(640, 480, true),
        price: faker.commerce.price({ max: 999 }),
        mrp: faker.commerce.price({ min: 1000 }, { max: 1200 }, true),
      }));
      setAllData(Cards);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllData();
  }, [])

  return (
    <div className='w-full h-screen bg-white'>
      <Logo />
      <div className='flex justify-center py-6 md:py-8 w-screen md:w-full'>
        <div className='flex items-center justify-between md:h-10 md:w-1/2 h-8 w-2/3 bg-white border border-[#00000080] md:px-6 px-2 text-sm md:text-base rounded-xl outline-none py-1 md:py-2'>
          <input
            type='search'
            placeholder='Search'
            className='bg-white w-full outline-none placeholder:text-[#00000066] placeholder:font-inter placeholder:font-light'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <CiSearch className='md:h-6 md:w-6 h-4 w-4 text-gray-400' />
        </div>
      </div>

      <div className='w-full flex'>
        <div className='md:hidden absolute cursor-pointer top-14 left-2 rounded-xl p-1  border border-black shadow-xl text-xs' onClick={handleSetFilter}>
          Filter
        </div>
        {filter ?
          <div className='w-44 h-full absolute left-0 top-24 bg-white z-10 flex justify-center px-2 md:px-4'>
            <FilterOption />
          </div> : <span></span>
        }

        <div className='hidden md:flex w-1/5 h-full justify-center px-2 md:px-4 sticky md:top-24 top-12'>
          <FilterOption />
        </div>
        <div className='flex justify-center w-screen md:w-4/5 h-full md:px-6 md:py-10 px-6 py-3'>
          <div className='w-full grid md:grid-cols-4 grid-cols-3 md:gap-y-6 gap-y-2'>
            {allData && allData.map((item, index) => (
              <div className='md:my-4 my-1 h-full w-[90px] md:w-[190px] relative group'>
                {
                  WishListMake(item.name) ? (
                    <>
                      <AiFillHeart className={`absolute md:right-3 md:top-3 right-2 top-2 md:h-[22px] h-[15px] md:w-[22px] w-[15px] font-extralight cursor-pointer text-[#D32424]`} onClick={() => removeWishlist(item.name)} />
                    </>
                  ) : (
                    <>
                      <PiHeartThin className={`absolute md:right-3 md:top-3 right-2 top-2 md:h-[22px] h-[15px] md:w-[22px] w-[15px] font-extralight text-white cursor-pointer`} onClick={() => handleWishlist(item.name)} />
                    </>
                  )

                }
                <img src={item.photo} alt='cardImages' className='h-[130px] md:h-[260px] w-full rounded-t-[4px] bg-[#D9D9D9] object-cover' />
                {/* <div className="absolute bottom-32 left-0 w-full bg-gray-800 bg-opacity-75 text-white p-4 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                  <p>View Product</p>
                </div> */}
                <div className="hidden  absolute bottom-32 w-full md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#6D84FFB5] px-8 py-2 rounded-md text-white text-center">
                    <p className="text-base font-normal font-inter">View Product</p>
                  </div>
                </div>
                <p className='font-light text-[8px] md:text-base mt-2 md:mt-4 mb-1'>{item.name}</p>
                <div className='flex gap-1 font-inter item2s-center'>
                  <p className='text-[#00000066] line-through font-extralight text-[8px] md:text-sm'>Rs.{item.mrp}</p>
                  <p className='font-medium text-[8px] md:text-sm text-[#6D84FF]'>Rs.{item.price}</p>
                </div>
                <div className='flex text-[10px] md:text-base text-yellow-400 py-1 items-center'>
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <p className='font-inter text-[#000000CC] text-[7px] md:text-xs font-extralight'>(210)</p>
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
