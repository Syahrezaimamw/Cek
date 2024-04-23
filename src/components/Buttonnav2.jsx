import React from 'react'

export const Buttonnav2 = ({children,type}) => {
  return (
    <div className={`px-7 py-2 border-2 border-[rgb(45,62,80)] ${type?'bg-[rgb(45,62,80)]  text-white ':'bg-white text-[rgb(45,62,80)]'} font-semibold`}>{children}</div>
  )
}
