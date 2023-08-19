import React from 'react'

const Header = ({value}) => {
  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-start border px-[60px]">
                <h1 className="text-2xl text-[#222] font-semibold">{value}</h1>
            </div>
  )
}

export default Header