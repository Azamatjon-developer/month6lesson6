import React from 'react'
import navbarImg from '../../assets/images/photo.png'
import {
  SearchIcon,
  RemindIcon,
  SortIcon,
  FilterIcon,
  TomIcon
} from '../../components/Icons'
import Data from '../../components/Data'

function Tickets() {

  
  return (
    <div>
      <header className="mt-[36px] flex items-center justify-between p-[30px]">
        <h2 className="text-[24px] tracking-widest font-bold text-[#252733]">
          Tickets
        </h2>
        <div className="flex items-center gap-[25px]">
          <SearchIcon />
          <RemindIcon />
          <h3 className="text-[#252733] text-sm text-right">
            {' '}
            | Jones Ferdinand
          </h3>
          <img src={navbarImg} alt="navbarImg" />
        </div>
      </header>
      <div className="flex justify-between ">
        <h3 className='p-[32px] text-[#252733] text-[20px]'>All tickets</h3>
        <div className='flex justify-between items-center p-[32px] gap-5'>
          <div className="flex items-center gap-3">
            <h2>Sort</h2>
            <SortIcon />
          </div>
          <div className="flex items-center gap-3">
            <h2>Filter</h2>
            <FilterIcon />
          </div>
        </div>
      </div>
      <div className='flex justify-around text-[#9FA2B4]'>
        <h3>Ticket details</h3>
        <h3>Customer name</h3>
        <h3>Date</h3>
        <h3>Priority</h3>
      </div>
      <Data/>
    </div>
  )
}

export default Tickets
