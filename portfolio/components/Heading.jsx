import React from 'react'

const Heading = ({name,right}) => {
  return (
    <div className={'flex flex-col absolute right-[-4rem] top-[-40px]'+(right?"items-end":"items-start")}>
      <p className='text-6xl'>{name}</p>
      <div className='bg-[#ED7373] h-2 w-20'></div>
    </div>
  )
}

export default Heading