import { IoSettingsOutline } from "react-icons/io5"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"


const ChatContainer = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div className="py-6 px-4 bg-white w-[340px] flex flex-col gap-12 border-r border-muted">
    <div className="flex items-center justify-between">
    <span className="font-lexend text-xl font-extrabold text-neutral-900">Messages</span>
    <IoSettingsOutline size={24} className="text-neutral-500 cursor-pointer"/>
    </div>
    <Tabs defaultValue={location.pathname.split("/")[1] || "/"} className="w-full">
  <TabsList className="w-full justify-start bg-transparent">
    <TabsTrigger onClick={() => navigate("/")} value="/" className="font-manrope basis-1/3 data-[state=active]:bg-primary text-primary  data-[state=active]:text-white rounded-r-none border border-primary">All</TabsTrigger>
    <TabsTrigger onClick={() => navigate("direct")} value="direct" className="font-manrope basis-1/3 data-[state=active]:bg-primary text-primary  data-[state=active]:text-white rounded-none border border-primary">Direct</TabsTrigger>
    <TabsTrigger onClick={() => navigate("group")} value="group" className="font-manrope basis-1/3 data-[state=active]:bg-primary text-primary  data-[state=active]:text-white rounded-l-none border border-primary">Group</TabsTrigger>
  </TabsList>
  <div className="mt-4">
<Outlet/>
  </div>

</Tabs>
    </div>
  )
}

export default ChatContainer