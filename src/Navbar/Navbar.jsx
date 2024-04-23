import React, { useEffect, useState } from 'react'
import { Buttoncodingku } from '../components/Buttoncodingku'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
export const Navbar = () => {
// console.log(window.scrollY)
  const [show,setShow]=useState(true)
  const [data,setData]=useState(0)
  
window.addEventListener('scroll',()=>{
    setData(Math.round(window.scrollY))
  })
    
   
  return (
    <>

    <div className={`z-10 w-full sticky top-0 bg-white  border-b-[1px]  border-[rgb(205, 205, 205)]   `} >
       
        <div className='lg:max-w-[1150px]  max-w-[800px] px-[20px] xl:px-0 sticky z-10 bg-white  top-1 transition-all  overflow-hidden duration-500  m-auto flex justify-between py-4 '>
            <div className='flex items-center gap-8 transition-all duration-500 'style={{transform:`translateX( ${data > 57 ? '0px' :'-116px'})`}}>
                <h1 className={`border-r-[1px] border-[rgb(214, 210, 210)] pe-4 items-center  text-[rgb(44,61,79)] text-[25px] font-bold  `} >LOGO</h1>

            <h1 className='text-xl font-bold  text-[rgb(77,72,68)]'>BLOG</h1>
            <p className='hidden md:block'>Kategori</p>
            </div>
            <div className='flex items-center '>
                
                <FaMagnifyingGlass className='hidden xl:block font-bold text-xl me-3 text-[rgb(77,72,68)]'/>
                <div className='flex items-center xl:hidden'>

                <FaBars className='block xl:hidden me-2' onClick={()=>{
                    console.log(show)
                    show == false? setShow(true):setShow(false)
                    }}></FaBars>
                <p className='sm:hidden'>Menu</p>
                </div>
                <div className={`ms-4  ${data > 57 ? 'hidden xl:block ' :'hidden xl:hidden'} animate__animated animate__bounce animte_faster`}>
                <Buttoncodingku>
                    BELAJAR PEMROGRAMAN GRATIS
                </Buttoncodingku>
            </div>
            </div>

        </div>
        
    <div className={`lg:max-w-[1150px] px-[20px] xl:px-0 xl:hidden -z-10 transition-all duration-500 py-5 border-y-2 mb-8  max-w-[800px] m-auto  ${show?'hidden':'block'} `}>
        <ul className='flex flex-col gap-6'>
            <li>News</li>
            <li>Academy</li>
            <li>Challange</li>
            <li>Event</li>
            <li>Tutorials</li>
        </ul>
        <div className='flex justify-center w-full mt-8'>

        <Buttoncodingku>
            Belajar Sekarang
        </Buttoncodingku>
        </div>
    </div>
    </div>
    </>
  )
}
