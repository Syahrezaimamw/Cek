import React, { useContext } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { Filtercontex, Ycontex } from '../context/Ycontext';
import { FilterNav } from './FilterNav';
import { Buttonnav2 } from './Buttonnav2';
export const ModalNav = ({show}) => {
    const sw=useContext(Ycontex)
  return (
    <div className={`fixed ${show? 'block':'hidden'} lg:hidden top-0 left-0 w-full h-full bg-white`}>
        <div className='flex items-center justify-between w-full px-8 py-5'>
            <FilterNav></FilterNav>
            
        <FaX onClick={()=>{
            sw.show?sw.setShow(false):sw.setShow(true)
        }}></FaX>
        </div>
        <div className='flex items-center justify-center gap-4 py-6 mt-4 bg-neutral-50'>
            <Buttonnav2>
                Masuk
            </Buttonnav2>
            <Buttonnav2 type={true}>
                Daftar
            </Buttonnav2>
        </div>
        <div className='w-full mt-5'>
            <ul className='flex flex-col gap-8 px-8 font-semibold'>
                {['Learning Path', 'Langganan', 'Program', 'Lainnya'].map((a,i)=>(
                    <li key={i} className='flex items-center justify-between'>{a} <FaArrowRight/></li>
                ))}
            </ul>
        </div>
    </div>
  )
}
