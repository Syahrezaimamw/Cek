import React from 'react'

export const Buttoncodingku = ({children}) => {
  return (
    <button className='bg-[#2d3e50] text-white w-[80%] sm:w-[fit-content] text-lg py-[14px] sm:px-7 xl:py-[9px] rounded-sm font-semibold  xl:text-[14px] relative'>
        <div className='w-[97%] colorborder h-[86%] rounded-[1px]  absolute left-[50%] top-[50%] border-[1px] ' style={{transform:'translate(-50%,-50%)'}}></div>
        {children}
    </button>
  )
}
