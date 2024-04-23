import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Navatas } from './Navbar/Navatas'

export const Home = () => {
  return (
    <div>
        <Navatas></Navatas>
        <Navbar></Navbar>
        <div className='h-[200vh]'></div>
    </div>
  )
}
