import React from 'react';
import {FiChevronDown} from 'react-icons/fi';
import {GrStar} from 'react-icons/gr';

const FilterOption = () => {
  return (
    <div>
        <div className='text-[#000000] font-inter font-normal text-base md:text-2xl mb-1 md:mb-2'>Search Results</div>

        <div className='flex flex-col gap-2'>
            <div className='border-b border-[#00000033] pb-2 md:pb-4 mt-2 md:mt-4 flex flex-col'>
                <div className='flex items-center justify-between pr-2 md:pr-4'>
                    <p className='text-sm md:text-base text-[#2F3037]'>BRAND</p>
                    <FiChevronDown className='text-sm md:text-base text-[#2F3037]'/>
                </div>
                <div className='flex gap-2 items-center mt-3 mb-2'>
                    <input
                    type='checkbox'
                    name="Mango"
                    className='text-white'/>
                    <label className='font-inter font-light text-xs md:text-sm text-[#000000]'>Mango</label>
                </div>
                <div className='flex gap-1 md:gap-2 items-center'>
                    <input
                    type='checkbox'
                    name="H&M"
                    className='text-white'/>
                    <label className='font-inter font-light text-xs md:text-sm text-[#000000]'>H&M</label>
                </div>
            </div>

            <div className='border-b border-[#00000033] py-2 md:py-4 flex flex-col'>
                <div className='flex items-center justify-between pr-2 md:pr-4'>
                    <p className='text-sm md:text-base text-[#2F3037]'>PRICE RANGE</p>
                    <FiChevronDown className='text-sm md:text-base text-[#2F3037]'/>
                </div>
                <div className='flex gap-1 md:gap-2 items-center mt-1 mb-1 md:mt-3 md:mb-2'>
                    <input
                    type='checkbox'
                    name="PriceBelow"
                    className='text-white'/>
                    <label className='font-inter font-light text-xs md:text-sm text-[#000000]'>Under 500</label>
                </div>
                <div className='flex gap-1 md:gap-2 items-center'>
                    <input
                    type='checkbox'
                    name="PriceRange"
                    className='text-white'/>
                    <label className='font-inter font-light text-xs md:text-sm text-[#000000]'>1000 To 3000</label>
                </div>
            </div>

            <div className='border-b border-[#00000033] py-2 md:py-4 flex flex-col'>
                <div className='flex items-center justify-between pr-2 md:pr-4'>
                    <p className='text-sm md:text-base text-[#2F3037]'>BRAND</p>
                    <FiChevronDown className='text-sm md:text-base text-[#2F3037]'/>
                </div>
                <div className='flex gap-2 items-center mt-3 mb-2'>
                    <input
                    type='checkbox'
                    name="FiveStar"
                    className='text-white'/>
                    <label className='font-inter font-light text-sm md:text-base text-[#FDD33D] flex gap-[2px]'>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                    </label>
                </div>
                <div className='flex gap-1 md:gap-2 items-center mb-1 md:mb-2'>
                    <input
                    type='checkbox'
                    name="FourStar"
                    className='text-white'/>
                    <label className='font-inter font-light text-sm md:text-base text-[#FDD33D] flex gap-[2px]'>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar className='text-[#CDCCC8]'/>
                    </label>
                </div>
                <div className='flex gap-1 md:gap-2 items-center mb-1 md:mb-2'>
                    <input
                    type='checkbox'
                    name="ThreeStar"
                    className='text-white'/>
                    <label className='font-inter font-light text-sm md:text-base text-[#FDD33D] flex gap-[2px]'>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar  className='text-[#CDCCC8]'/>
                        <GrStar  className='text-[#CDCCC8]'/>
                    </label>
                </div>
                <div className='flex gap-1 md:gap-2 items-center mb-1 md:mb-2'>
                    <input
                    type='checkbox'
                    name="TwoStar"
                    className='text-white'/>
                    <label className='font-inter font-light text-sm md:text-base  text-[#CDCCC8] flex gap-[2px]'>
                        <GrStar className='text-[#FDD33D]'/>
                        <GrStar className='text-[#FDD33D]'/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                    </label>
                </div>
                <div className='flex gap-1 md:gap-2 items-center mb-1 md:mb-2'>
                    <input
                    type='checkbox'
                    name="OneStar"
                    className='text-white'/>
                    <label className='font-inter font-light text-sm md:text-base text-[#CDCCC8] flex gap-[2px]'>
                        <GrStar className='text-[#FDD33D]'/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                        <GrStar/>
                    </label>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FilterOption;