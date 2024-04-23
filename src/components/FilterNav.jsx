import React, { useContext } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { Filtercontex } from '../context/Ycontext';
export const FilterNav = () => {
    const {data,searchvalue,err,handleChange}=useContext(Filtercontex)
  return (
    <div className="relative flex w-[80%] lg:w-[100%] items-center gap-3 px-5 py-2 border-2 border-solid lg:flex group border-neutral-200">
    <span
        className="flex items-center whitespace-nowrap  py-[0.25rem] text-surface text-gray-500 dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
        id="button-addon2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            // stroke-width="2"
            stroke="currentColor">
            <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    </span>
    <input

        type="search"
        placeholder='Apa yang ingin anda pelajari'
        onChange={(e) => handleChange(e.target.value)}
        className={`relative m-0 block flex-auto rounded border border-none bg-transparent bg-clip-padding px- py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill focus:activ  placeholder:text-[15px] dark:focus:border-primary w-[210px] bg-red-900"
        placeholder="Apa yang ingin anda pelajari?"
        aria-label="Search"
        id="exampleFormControlInput2"
        aria-describedby="button-addon2`} />


        {searchvalue.length>0?
    <div className='absolute bg-white top-[55px] border-2 border-solid border-neutral-200 left-0 w-full h-[200px] '>
        <div className='relative w-full h-full '>
            <div className='w-full overflow-y-scroll  h-[150px]' id='style-4'>
                <ul className='flex flex-col w-full gap-3 px-4 pt-3 pb-3'>
                    {
                        err==false?
                        data.map((a, i) => {
                            if (i >= 0) {

                                return (

                                    <li key={i} className='px-4 py-2 border-2 border-neutral-200'>{a.strMeal}</li>
                                )
                            }
                        }):<div className='flex items-center justify-center w-full h-[120px] '>
                            <h1 className='text-[15px]'>Kelas yang anda cari tidak ditemukan</h1>
                        </div>
                    }
                </ul>

            </div>
            <div className='absolute bottom-0 left-0 flex items-center justify-between w-full px-3 py-3 border-t-2 border-neutral-200'>
                <div>
                    <p className='text-[15px]'>Lihat semua kelas</p>
                </div>
                <FaAngleRight className='text-[15px]' />
            </div>
        </div>

    </div>
    :<></>
}

</div>
  )
}
