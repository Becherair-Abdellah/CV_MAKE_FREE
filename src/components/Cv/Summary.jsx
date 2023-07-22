import { FaCircle } from "react-icons/fa"

function Summary() {
  return (
   <div className="relative">
   <h1 className='text-2xl text-gray-500 mb-3 flex items-center gap-2 relative' ><FaCircle className='w-3 h-3 text-green-700' size={10}/> Summary</h1>
    <div className="text-[17px] psdo">
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt rerum dicta distinctio? Velit ex sed, et vero doloremque ea.
    </div>
   </div>
  )
}

export default Summary
