import React from 'react'
import { Buttoncodingku } from '../components/Buttoncodingku'
export const Navatas = () => {
  return (
    <div className={` lg:max-w-[1150px] max-w-[800px] z-[999]  px-[20px] xl:px-0  flex  justify-between items-center m-auto border-b-[1px] border-nav-color py-4 `}>
       
    <div className="header-logo capitalize font-bold text-3xl text-[rgb(44,61,79)]">
        Codingku
    </div>
    <div className='hidden sm:block'>
        <Buttoncodingku>
            BELAJAR PEMROGRAMAN GRATIS
        </Buttoncodingku>
    </div>
</div>
  )
}
