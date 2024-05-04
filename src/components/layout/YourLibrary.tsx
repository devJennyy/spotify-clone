import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RiHeadphoneFill} from "react-icons/ri";
import Playlist from "../cards/Playlist";
import { IPlaylist } from "../../interface/Playlist";



const YourLibrary = () => {
const musicPlaylist : IPlaylist[] = [
  {
    coverPhoto: "/images/dailymix-one.jpeg",
    title: "Liked songs",
    hasPin: true,
    songCollection: "206",
    hasMic: true,
  },
  {
    coverPhoto: "/images/playlist-two.jpeg",
    title: "Old Songs",
    hasPin: true,
    songCollection: "Akira",
    hasMic: false,
  },
  {
    coverPhoto: "/images/dailymix-three.jpeg",
    title: "Nostalgic Playlist",
    hasPin: true,
    songCollection: "Akira",
    hasMic: false,
  },
  {
    coverPhoto: "/images/playlist-four.jpeg",
    title: "Mix Vibe",
    hasPin: false,
    songCollection: "Akira",
    hasMic: false,
  },
  {
    coverPhoto: "/images/playlist-five.jpeg",
    title: "Chill Mood",
    hasPin: false,
    songCollection: "Akira",
    hasMic: false,
  },
  {
    coverPhoto: "/images/dailymix-four.jpeg",
    title: "Crying City Playlist",
    hasPin: false,
    songCollection: "39",
    hasMic: false,
  },

]
  return (
    <div className="flex flex-col bg-[#121212] min-w-[400px] h-full rounded-xl overflow-auto no-scrollbar">
      <div className="flex flex-col px-7 pt-8 gap-8">
        <div className="flex flex-row justify-between items-center">
          <button className="flex flex-row justify-between items-center gap-2 hover:text-[#F3F3F3]">
            <p className="text-[25px]">
              <RiHeadphoneFill />
            </p>
            <p className="text-[16px] font-bold">Your Library</p>
          </button>

          <div className="flex flex-row justify-center items-center gap-1">
            <button className="flex justify-center items-center hover:text-[#F3F3F3] hover:bg-[#161616] bg-[#121212] hover:rounded-full rounded-full hover:w-8 w-8 hover:h-8 h-8 text-[24px] ">
              <HiOutlinePlusSm />
            </button>
            <button className="flex justify-center items-center hover:text-[#F3F3F3] hover:bg-[#161616] bg-[#121212] hover:rounded-full rounded-full hover:w-8 w-8 hover:h-8 h-8 text-[24px] ">
              <BiRightArrowAlt />
            </button>
          </div>
        </div>

        <button className="flex justify-center items-center bg-[#232323] w-[80px] h-9 rounded-full hover:bg-[#2A2A2A]">
          <p className="text-white text-[14px] font-semibold">Playlists</p>
        </button>

        <div className="flex flex-row justify-between items-center">
          <button className="flex justify-start items-center pl-2 rounded-full gap-2 bg-[#2A2A2A] w-[230px] h-9 hover:bg-[#2A2A2A] hover:border-[#404040] hover:border-[1px] border-[1px] border-[#242424]">
            <p className="text-[20px]">
              <IoSearchOutline />
            </p>
            <input
              className="text-[14px] w-[180px] py-1 bg-transparent outline-none text-white font-medium "
              placeholder="Search in Your Library"
            />
          </button>
          <button className="flex flex-row justify-center items-center gap-2 hover:text-[#F3F3F3]">
            <p className="text-[14px] font-medium">Recents</p>
            <p className="text-[20px]">
              <AiOutlineUnorderedList />
            </p>
          </button>
        </div>
      </div>

      {/* Library Container */}
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col text-left pt-7 pb-3 px-7 gap-2">
          <p className="text-[12px] font-bold">Title</p>
          <div className="border-b-[1px] border-[#2A2A2A]"></div>
        </div>

        {/* Library Lists */}
        {musicPlaylist?.map((library) => {
          return (
            <Playlist
              coverPhoto={library.coverPhoto}
              title={library.title}
              hasPin={library.hasPin}
              songCollection={library.songCollection}
              hasMic={library.hasMic}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YourLibrary;
