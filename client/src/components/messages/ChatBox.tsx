import { ITypeMessage } from "@/common/type"
import ChatItem from "./ChatItem"


const ChatBox = ({type} : ITypeMessage) => {
  return (
    <div className="mt-6">
   <div className="flex flex-col gap-5 h-[760px] overflow-auto scroll">
    {Array.from({length: 10}).map((_, index) => (
      <ChatItem
        id={index}
        key={index}
        unread={index + 1}
        name="Shad"
        lastMessage={`Hello World + ${type}`}
        time={new Date()}
        avatar=""
        />
    ))}
   </div>
  </div>
  )
}

export default ChatBox