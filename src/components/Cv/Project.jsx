import React from 'react'
import {SlCalender} from 'react-icons/sl'
import {HiLocationMarker} from 'react-icons/hi'
import { FaCircle } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
function Project() {
  return (
    <div className='mt-5'>
      <h1 className=' text-lg text-green-600 font-semibold mb-2' >CV Maker</h1>
      <div className='flex gap-5'>
        <span className='flex items-center gap-3 font-medium text-gray-700'>
            <SlCalender size={17} color='gray' />
            July 2023 (3 days)
        </span>
        <span className='flex items-center gap-1 font-medium text-gray-700'>
        <HiLocationMarker size={20} color='gray'/> Algeria,Ouargla
        </span>
      </div>
      <ul>
        <li className='flex gap-3 mt-2 text-gray-600'>
            <span>
            <FaCircle className='relative mt-2 text-gray-400' size={8}/>
            </span>
        <span>
        cv maker is personal project that maket in university uhf sdjfdijfdf left to right too
        </span>
        </li>

        <li className='flex gap-3 mt-2 text-gray-600'>
            <span>
            <FaCircle className='relative mt-2 text-gray-400' size={8}/>
            </span>
        <span>
        cv maker is personal project that maket in university uhf sdjfdijfdf left to right too
        </span>
        </li>

        <li className='flex gap-3 mt-2 text-gray-600'>
            <span>
            <FaCircle className='relative mt-2 text-gray-400' size={8}/>
            </span>
        <span>
        cv maker is personal project
        </span>
        </li>

        <li className='flex gap-3 mt-2 text-gray-600'>
            <span>
            <FaCircle className='relative mt-2 text-gray-400' size={8}/>
            </span>
        <span>
        cv maker is personal project that maket in university uhf sdjfdijfdf left to right too
        </span>
        </li>
      </ul>
      <div className='flex gap-2 items-center mt-2' >
        <span><BiWorld color='gray' size={20}  /></span>
        <span className='text-blue-950' ><a href="">https://shorturl.at/ajGL1</a></span>
      </div>
    </div>
  )
}

export default Project
