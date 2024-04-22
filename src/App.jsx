import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Navatas } from './Navbar/Navatas'

function App() {
  const [count, setCount] = useState(0)

  function onScroll(){
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
  }
// }, []);


  return (
    <>
    <Navatas/>
    <Navbar />
    <div className='h-[200vh]' >
  
    </div>
      
    </>
  )
}

export default App
