import Sidebar from "@/components/home/Sidebar";
import ChatContainer from "@/components/home/ChatContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsThreeDots } from "react-icons/bs";
import { convertDateToString } from "@/utils/helper";
import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosAttach,
  IoIosClose,
  IoMdImages,
  IoIosArrowUp,
  IoIosAdd,
} from "react-icons/io";
import { BsSend } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const participants = [
  {
    name: "Shadman",
  },
  {
    name: "Shadman",
  },
  {
    name: "Shadman",
  },
];

const isAdmin = true;
const Home = () => {
  const [show, setShow] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="container mx-auto flex min-h-screen">
      <Sidebar />
      <ChatContainer />
      <div className={`flex flex-col flex-1 h-screen`}>
        {/* Message Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between w-full border-b border-muted h-[84px]">
          <div className="flex items-center gap-6">
            <Avatar className="cursor-pointer relative size-10">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-lexend font-bold text-xl text-neutral-900 leading-[30px]">
                Design Team
              </p>
              <span className="font-manrope text-sm text-neutral-500 leading-[22px]">
                3 participants
              </span>
            </div>
          </div>
          <BsThreeDots
            size={24}
            className="icon text-neutral-500"
            onClick={() => setShow(!show)}
          />
        </div>
        {/* Message Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="flex gap-4">
            <Avatar className="cursor-pointer relative size-9">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="cursor-pointer relative size-9">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="cursor-pointer relative size-9">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="cursor-pointer relative size-9">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="cursor-pointer relative size-9">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="cursor-pointer relative size-9">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-neutral-200 text-sm text-neutral-900 px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
          <div className="flex gap-4 float-right flex-row-reverse">
            <div className="flex flex-col gap-1">
              <p className="font-manrope bg-primary text-sm text-white px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <p className="font-manrope bg-primary text-sm text-white px-4 py-3 rounded">
                Hello, how can I help you?
              </p>
              <span className="text-xs font-manrope text-neutral-500 text-right">
                {convertDateToString(new Date("2024-10-24T11:56"))}
              </span>
            </div>
          </div>
        </div>
        {/* Message Footer */}
        <div className="px-6 py-4 bg-white h-[68px] border-t border-muted flex items-center gap-3">
          <div className="flex items-center gap-3">
            <IoIosAttach
              size={24}
              className="cursor-pointer hover:opacity-60"
            />
            <IoMdImages size={24} className="cursor-pointer hover:opacity-60" />
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className="w-full px-4 py-2 text-sm bg-neutral-100 rounded focus:outline-none font-manrope"
          />
          <BsSend
            size={24}
            color="#6d31ed"
            className="cursor-pointer hover:opacity-60"
          />
        </div>
      </div>
      {/* Right Sidebar */}
      <div
        className={`bg-white h-screen flex flex-col  ${
          show ? "w-[300px] border border-muted opacity-100" : "w-0 opacity-0"
        } overflow-hidden transition-all duration-300`}
      >
        <div className="flex items-center justify-between border-b border-muted h-[84px] py-4 px-6">
          <div className="flex flex-col ">
            <p
              className={`font-lexend font-bold text-xl text-neutral-900 leading-[30px] transition-all duration-300 text-nowrap`}
            >
              Chat Detail
            </p>
            <span className="font-manrope text-sm text-neutral-500 leading-[22px] text-nowrap">
              Design Team
            </span>
          </div>
          <IoIosClose
            size={24}
            className="cursor-pointer hover:opacity-60 text-neutral-500"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="p-6 flex flex-col ">
          <div className="flex items-center justify-between">
            <p className="font-lexend text-base leading-[26px] text-neutral-900 font-semibold select-none">
              Members
            </p>
            <div className="flex items-center gap-5">
              <span className="font-manrope text-sm text-neutral-500 leading-[22px] select-none">
                3 participants
              </span>
              {showParticipants ? (
                <IoIosArrowUp
                  size={24}
                  className="icon text-neutral-600"
                  onClick={() => setShowParticipants(false)}
                />
              ) : (
                <IoIosArrowDown
                  size={24}
                  className="icon text-neutral-600"
                  onClick={() => setShowParticipants(true)}
                />
              )}
            </div>
          </div>
          <div
            className={`flex flex-col mt-4 gap-4 overflow-hidden transition-all duration-500 ease-out ${
              showParticipants
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {showParticipants &&
              participants.map((participant, index) => (
                <div
                  className="flex items-center justify-between gap-3"
                  key={index}
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="cursor-pointer relative size-9">
                      <AvatarImage src={"https://github.com/shadcn.png"} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="font-manrope text-sm text-neutral-900 leading-[22px] select-none">
                      {participant.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {isAdmin && (
                      <span className="px-2 py-1 text-xs font-manrope text-neutral-700 select-none rounded-lg bg-yellow-400">
                        Admin
                      </span>
                    )}
                    <BsThreeDots size={24} className="icon text-neutral-500" />
                  </div>
                </div>
              ))}
            <Button
              variant={"ghost"}
              className={`w-1/4 font-manrope text-primary hover:text-primary/80 hover:bg-white ${
                showParticipants ? "flex" : "hidden"
              }`}
            >
              <IoIosAdd size={24} />
              Add
            </Button>
          </div>
          <span className="bg-neutral-200 h-[1px]"></span>

          <div className="flex items-center justify-between mt-4">
            <p className="font-lexend text-base leading-[26px] text-neutral-900 font-semibold select-none">
              Gallery
            </p>
            <div className="flex items-center gap-5">
              {showGallery ? (
                <IoIosArrowUp
                  size={24}
                  className="icon text-neutral-600"
                  onClick={() => setShowGallery(false)}
                />
              ) : (
                <IoIosArrowDown
                  size={24}
                  className="icon text-neutral-600"
                  onClick={() => setShowGallery(true)}
                />
              )}
            </div>
          </div>
          <div
            className={`flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-out ${
              showGallery
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
          <Tabs defaultValue="all" className="w-full mt-4">
            <TabsList className="w-full bg-transparent space-x-2">
              <TabsTrigger value="all" className="basis-1/3 data-[state=active]:bg-primary rounded-full text-primary  data-[state=active]:text-white font-manrope">All</TabsTrigger>
              <TabsTrigger value="media" className="basis-1/3 data-[state=active]:bg-primary rounded-full text-primary  data-[state=active]:text-white font-manrope">Media</TabsTrigger>
              <TabsTrigger value="file" className="basis-1/3 data-[state=active]:bg-primary rounded-full text-primary  data-[state=active]:text-white font-manrope">File</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="flex flex-col gap-4">
            <div className="bg-neutral-100 p-4 rounded">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <IoDocumentTextOutline size={32}/>
            <div className="flex flex-col font-manrope">
              <p className="text-sm font-bold text-neutral-700">Plan Des 10.pdf </p>
              <p className="text-xs text-neutral-700">120 kB</p>
            </div>
                </div>

              </div>

            </div>
              </div>
            </TabsContent>
            <TabsContent value="media">
              Change your password here.
            </TabsContent>
            <TabsContent value="file">
              Change your password here.
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
