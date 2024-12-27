import { FiMessageCircle } from "react-icons/fi"
import logo from '../../../public/logo.png'
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoSettingsOutline } from "react-icons/io5"
const Sidebar = () => {
  return (
    <div className="flex flex-col px-3 py-6 w-20 h-screen items-center justify-between border-r border-muted">
     <div className="flex flex-col items-center gap-8">
     <Link to={"/"} className="w-full grid place-items-center"><img className='cursor-pointer' src={logo} alt='Logo' /></Link>
      <button className='size-12 grid place-items-center relative hover:opacity-80 bg-[#6d31ed] rounded-md'>
      <FiMessageCircle size={28} color='white'/>
      <span className='rounded-full size-3 absolute right-2 top-3 border-2 border-white bg-red-500 grid place-items-center text-xs text-white font-semibold'></span>
      </button>
     </div>
    <div className="flex flex-col gap-5 items-center">
    <Avatar className="cursor-pointer relative">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<button className="size-12 border border-gray-300 bg-white duration-300 grid place-items-center rounded-md hover:bg-[#f5f5f5] active:scale-95">
  <IoSettingsOutline size={24} />
</button>

 </div>

    </div>
   
  )
}

export default Sidebar