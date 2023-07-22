import { FaCircle } from "react-icons/fa"
import Project from "./Project"
function Projects() {
  return (
<div className="mt-10 l-psdo relative">
<h1 className='text-2xl text-gray-500 mb-3 flex items-center gap-2 relative' ><FaCircle className='w-3 h-3 text-green-700' size={10}/> Projects</h1>
<div>
<Project/>
<Project/>
<Project/>  
</div>
</div>  )
}

export default Projects
