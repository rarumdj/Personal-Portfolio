import React from 'react'
import { Assign } from '../assests'

const Social = () => {
  return (
    <div className='absolute bottom-0 left-8'>
    <div className="flex flex-col w-10 items-center space-y-4">
        <ul className='flex flex-col space-y-2'>
            <li><Assign fill="#000"  /></li>
            <li><Assign fill="#000"  /></li>
            <li><Assign fill="#000"  /></li>
            
        </ul>
        <div className='h-44 border-r-2 border-blue-100' />
    </div>
    </div>
  )
}

export default Social