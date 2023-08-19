import React from 'react'

const Header = ({ value, color }) => {
  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-start border px-[60px]">
      <h1 className={`text-2xl ${(color) ? "text-[--primary-color]" : "text-[#222]"} font-semibold `}>{value}</h1>
    </div>
  )
}

export default Header