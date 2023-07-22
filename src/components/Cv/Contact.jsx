import {MdEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {BiWorld,BiLogoLinkedin} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import {FaCircle} from 'react-icons/fa'
function Contact() {
  return (
    <div className='relative top-8 '>
    <h1 className='text-2xl text-gray-500 mb-3 flex items-center gap-2 relative' ><FaCircle className='w-3 h-3 text-green-700' size={10}/> Contact</h1>
    <ul className='border-[3px] border-r-0 border-t-0 pl-6 pb-5 border-green-600'>
      <li className='text-lg flex items-center gap-2 '> <MdEmail size={22} className='text-gray-500' />
       <a href="">abdellah.Becherair04@gmail.com</a>
      </li>
      <li className='text-lg flex items-center gap-3 '> <BiLogoLinkedin size={22} className='text-gray-500'/>
      <a href="https://www.linkedin.com/in/abdellah-becherair-198825263/">https://shorturl.at/DGVW3</a>
      </li>
      <li className='text-lg flex items-center gap-3 '><BsGithub size={22} className='text-gray-500'/><a href="https://github.com/Becherair-Abdellah">
      https://shorturl.at/imzAJ</a></li>
      <li className='text-lg flex items-center gap-3 '> <BiWorld size={22} className='text-gray-500'/> <a href="www.abdellahfront.com">www.abdellahfront.com</a> </li>
      <li className='text-lg flex items-center gap-3 '><HiLocationMarker       className='text-gray-500' size={23}/> Algeria,Ouargla</li>
    </ul>
    </div>
  )
}

export default Contact
