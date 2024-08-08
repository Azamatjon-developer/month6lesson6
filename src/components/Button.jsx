import React from 'react'

function Button({title,extraClass}) {
  return (
    <button className={`pt-[5px] pl-[20px] pr-[20px] pb-[5px] text-white ${extraClass}`}>
        {title} 
    </button>
  )
}

export default Button
