import React, { useEffect, useReducer, useState, useRef, useContext } from 'react'
import logo from './new-ui-logo.png'
import { FaBars } from "react-icons/fa6";
import { ModalNav } from '../components/ModalNav';
import { Buttonnav2 } from '../components/Buttonnav2';
import { Filtercontex, Ycontex } from '../context/Ycontext';
import { FilterNav } from '../components/FilterNav';
export const Navbar2 = () => {
    const sw = useContext(Ycontex)
    const [searchvalue, setSeachvalue] = useState('')
    const [data, setData] = useState([])
    const [err,setErr]=useState(false)

    async function filterData(value) {
        return await fetch('https://themealdb.com/api/json/v1/1/search.php?s='+value)
            .then(res => res.json())
            .then(a => {
                if (a.meals != null) {

                    setData(a.meals)
                } else {

                    setData([])
                    setErr(true)
                }
            })
    }
    function handleChange(value) {
        setErr(false)
        setSeachvalue(value)
        filterData(value)
    }
    console.log(data)


    return (
        <>
        <Filtercontex.Provider value={{
            data,searchvalue,err,handleChange
        }}>
            
        <div className='sticky  top-0 px-8 xl:px-5 flex items-center justify-between w-full lg:max-w-[1450px] py-3 m-auto'>
            <div className='flex items-center justify-between gap-5'>
                <img src={logo} alt="" className='w-[35px]' />
                <div className='hidden lg:block'>

              <FilterNav
              data={data}
              searchvalue={searchvalue}
              err={err}
              handleChange={handleChange}
              ></FilterNav>
              </div>

                <ul className=' hidden lg:flex items-center text-black text-[15px] h-full   font-medium'>
                    {['Learning Path', 'Langganan', 'Program', 'Lainnya'].map((e, i) => (
                        <li key={i} className='h-full px-4 py-4 cursor-pointer hover:bg-gray-200'>{e}</li>
                    ))}
                </ul>

            </div>
            <div className='items-center hidden gap-2 lg:flex'>
                <Buttonnav2 >Masuk</Buttonnav2>
                <Buttonnav2 type={true}> Daftar</Buttonnav2>
            </div>
            <FaBars className='lg:hidden' onClick={()=>{
                sw.show?sw.setShow(false):sw.setShow(true)
            }}></FaBars>
        </div>
        <ModalNav show={sw.show}/>
              </Filtercontex.Provider>
            </>
    )
}
