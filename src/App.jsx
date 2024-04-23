import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { FaArrowRight } from "react-icons/fa6";
import { createContext, useContext } from 'react';
import { Navbar2 } from './Navbar/Navbar2';
import { ModalNav } from './components/ModalNav';
import { Ycontex } from './context/Ycontext';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    >ssss</div>
  );
}

// function AppCtx()
export const AppContext = createContext(null);
function App() {
  const [show,setShow]=useState(false)
  return (


    <>
      <Ycontex.Provider value={{show,setShow}}>
        

    <div className='sticky top-0 bg-white lg:hidden' >

      <Navbar2/>
    </div>

    <div className='flex  items-center justify-center cursor-pointer bg-[rgb(244,244,245)] w-full group py-4'>
      <div className='flex flex-wrap px-8 items-center gap-2 md:gap-5 text-[rgb(63,67,75)] font-semibold text-[15px]'>Beasiswa coding GRATIS selama 1 tahun, Ikuti DBS Foundation Coding Camp 2024! <p className='flex items-center gap-3  text-[rgb(26,119,215)]'>LIhat di sini <FaArrowRight className='duration-500 group-hover:translate-x-4'/></p></div>
    </div>
    <div className='sticky top-0 hidden bg-white lg:block'>

      <Navbar2/>
    </div>


      
      <div className='h-[200vh] '></div>
    
      </Ycontex.Provider>
           
    </>
  )
}

export default App
