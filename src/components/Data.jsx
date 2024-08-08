import React from 'react'
import { AddingGirl, DotsIcon, Payment, TomIcon } from '../components/Icons'
import Button from './Button'
function Data() {


  return (
    <div>
      <div>
        <div className='flex mt-[26px] pt-[26px] items-center justify-around border-t-[1px] border-slate-500'>
          <div className='flex space-x-[24px]'>
          <TomIcon />
          <div className='flex flex-col'>
            <h3 className='text-[#252733]'>Contact Email not Linked</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>Updated 1 day ago</p>
          </div>
          </div>
          <div>
            <h3>Tom Cruise</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>on 24.05.2019</p>
          </div>
          <div>
            <h3>May 26, 2019</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>6:30 PM</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button title = {"High"} extraClass={'rounded-[100px] bg-[#F12B2C] text-center'}/>
            <DotsIcon/>
          </div>
        </div>
      </div>

      <div>
        <div className='flex mt-[26px] pt-[26px] items-center justify-around border-t-[1px] border-slate-500'>
          <div className='flex space-x-[24px]'>
          <AddingGirl />
          <div className='flex flex-col'>
            <h3 className='text-[#252733]'>Adding Images to Featured Posts</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>Updated 1 day ago</p>
          </div>
          </div>
          <div>
            <h3>Matt Damon</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>on 24.05.2019</p>
          </div>
          <div>
            <h3>May 26, 2019</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>6:30 PM</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button title = {"Low"} extraClass={'rounded-[100px] bg-[#FEC400] text-center'}/>
            <DotsIcon/>
          </div>
        </div>
      </div>
      
      <div>
        <div className='flex mt-[26px] pt-[26px] items-center justify-around border-t-[1px] border-slate-500'>
          <div className='flex space-x-[24px]'>
          <Payment />
          <div className='flex flex-col'>
            <h3 className='text-[#252733]'>Payment not going through</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>Updated 2 day ago</p>
          </div>
          </div>
          <div>
            <h3>Tom Cruise</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>on 24.05.2019</p>
          </div>
          <div>
            <h3>May 26, 2019</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>6:30 PM</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button title = {"Normal"} extraClass={'rounded-[100px] bg-[#29CC97] text-center'}/>
            <DotsIcon/>
          </div>
        </div>
      </div>

      <div>
        <div className='flex mt-[26px] pt-[26px] items-center justify-around border-t-[1px] border-slate-500'>
          <div className='flex space-x-[24px]'>
          <TomIcon />
          <div className='flex flex-col'>
            <h3 className='text-[#252733]'>Contact Email not Linked</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>Updated 1 day ago</p>
          </div>
          </div>
          <div>
            <h3>Tom Cruise</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>on 24.05.2019</p>
          </div>
          <div>
            <h3>May 26, 2019</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>6:30 PM</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button title = {"High"} extraClass={'rounded-[100px] bg-[#F12B2C] text-center'}/>
            <DotsIcon/>
          </div>
        </div>
      </div>

      <div>
        <div className='flex mt-[26px] pt-[26px] items-center justify-around border-t-[1px] border-slate-500'>
          <div className='flex space-x-[24px]'>
          <AddingGirl />
          <div className='flex flex-col'>
            <h3 className='text-[#252733]'>Contact Email not Linked</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>Updated 1 day ago</p>
          </div>
          </div>
          <div>
            <h3>Tom Cruise</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>on 24.05.2019</p>
          </div>
          <div>
            <h3>May 26, 2019</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>6:30 PM</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button title = {"Normal"} extraClass={'rounded-[100px] bg-[#29CC97] text-center'}/>
            <DotsIcon/>
          </div>
        </div>
      </div>
      <div>
        <div className='flex mt-[26px] pt-[26px] items-center justify-around border-t-[1px] border-slate-500'>
          <div className='flex space-x-[24px]'>
            <Payment/>
          <div className='flex flex-col'>
            <h3 className='text-[#252733]'>Referral Bonus</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>Updated 4 day ago</p>
          </div>
          </div>
          <div>
            <h3>Tom Cruise</h3>
            <p className='text-[#C5C7CD] mt-[5px]'> Sam Smith.</p>
          </div>
          <div>
            <h3>May 26, 2019</h3>
            <p className='text-[#C5C7CD] mt-[5px]'>6:30 PM</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button title = {"Low"} extraClass={'rounded-[100px] bg-[#FEC400] text-center'}/>
            <DotsIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
