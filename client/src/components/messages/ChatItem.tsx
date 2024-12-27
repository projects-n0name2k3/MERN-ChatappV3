
import { IChatItem } from "@/common/type"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {convertDateToString} from "@/utils/helper"
const ChatItem = ({
    name,
    lastMessage,
    avatar,
    time,
    id,
    unread,
  }: IChatItem) => {
  return (
    <div className="w-full p-4 flex items-center justify-between hover:bg-neutral-100 cursor-pointer rounded" key={id}>
    <div className="flex items-center gap-3">
    <Avatar className="cursor-pointer relative size-9">
  <AvatarImage src={avatar || "https://github.com/shadcn.png"} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<div className="flex flex-col">
  <p className="font-manrope line-clamp-1 text-ellipsis max-w-[152px] font-extrabold text-base leading-[26px] text-neutral-900">{name}</p>
  <span className="font-manrope line-clamp-1 text-ellipsis max-w-[152px] text-sm leading-[22px] text-neutral-900">{lastMessage}</span>
</div>
    </div>
    <div className="flex flex-col gap-1 items-end">
    <span className="text-neutral-600 text-xs font-manrope font-semibold">{convertDateToString(time)}</span>
    <span className="size-5 rounded-full bg-red-500 grid place-items-center font-semibold font-manrope text-xs text-white">{unread > 9 ? '9+' : unread}</span>
    </div>
    </div>
  )
}

export default ChatItem