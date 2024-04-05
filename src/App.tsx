import { FaReact, FaRegBell, FaUsers } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { HiOutlineDotsHorizontal, HiOutlinePlusSm } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose, IoSearchOutline, IoVolumeLowOutline } from "react-icons/io5";
import { VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";
import "./App.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import {
  FaBackwardStep,
  FaCircleCheck,
  FaForwardStep,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh,
} from "react-icons/fa6";
import { RiHeadphoneFill, RiPushpinFill } from "react-icons/ri";
import { TbMicrophone2 } from "react-icons/tb";
import { BiPause, BiRightArrowAlt } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiDevices } from "react-icons/pi";
import { MdFullscreenExit } from "react-icons/md";

function App() {
  return (
    <>
      {/*══════════════════════════════════════════════════════════════════════════ 
                               W E B  C O N T A I N E R                                   
        ══════════════════════════════════════════════════════════════════════════*/}
      <div className="flex-col bg-black w-full h-full pt-3 md:flex hidden">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center text-[#A7A7A7] text-[22px] px-10 w-full">
          <div className="flex flex-row justify-center items-center gap-5">
            <button>
              <HiOutlineDotsHorizontal />
            </button>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <IoIosArrowBack />
            </button>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <IoIosArrowForward />
            </button>
            <button className="flex justify-center items-center bg-[#242424] w-[50px] h-[50px] rounded-full text-white hover:scale-105 transition-all">
              <GoHomeFill />
            </button>
          </div>

          <div className="pl-[220px] ">
            <div className="flex flex-row items-center justify-start bg-[#242424] w-[500px] h-12 rounded-full pl-3 hover:bg-[#2A2A2A] border-[1px] border-[#242424] hover:border-[#404040]">
              <button className="hover:text-[#F3F3F3]">
                <FiSearch />
              </button>
              <div className="flex justify-between items-center w-full ">
                <input
                  className="w-[400px] py-1 bg-transparent outline-none text-white text-[15px] font-medium pl-3"
                  placeholder="What do you want to play?"
                />
                <button className="border-l-[1px] border-[#A7A7A7] pl-3 pr-3 hover:text-[#F3F3F3]">
                  <FaReact />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-5 text-[20px]">
            <button className="flex justify-center items-center bg-white w-[150px] h-8 rounded-full hover:scale-105 transition-all">
              <p className="text-black text-[14px] font-semibold">
                Explore Premium
              </p>
            </button>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <FaRegBell />
            </button>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <FaUsers />
            </button>
            <button className="flex justify-center items-center bg-[#242424] w-[50px] h-[50px] rounded-full hover:scale-105 transition-all">
              <img
                src="/images/power.jpg"
                className="w-9 h-9 rounded-full object-cover "
              />
            </button>
            <button>
              <VscChromeMinimize />
            </button>
            <button className="text-[16px]">
              <VscChromeRestore />
            </button>
            <button>
              <IoClose />
            </button>
          </div>
        </div>

        {/*Body Container*/}
        <div className="flex flex-row justify-between w-full h-full pt-3 text-[#A7A7A7] px-5 overflow-auto">
          {/*Left Sidebar Container*/}
          <div className="flex flex-col bg-[#121212] w-[400px] h-full rounded-xl pt-7">
            <div className="flex flex-col px-7 gap-8">
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
                <p className="text-white text-[14px] font-semibold">
                  Playlists
                </p>
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

            {/*Playlists Container*/}
            <div className="">
              <div className="flex flex-col w-full h-full">
                <div className="px-7 pt-7">
                  <div className="flex text-[12px] font-bold border-b-[1px] pb-2 border-[#2A2A2A]">
                    <p>Title</p>
                  </div>
                </div>

                <div className="flex flex-col pt-3 gap-2">
                  {/*Playlist One*/}
                  <button className=" flex justify-center items-center w-[370px] h-[67px] hover:bg-[#1A1A1A] ml-4 hover:rounded-lg">
                    <div className="flex flex-row justify-start items-center w-[350px] h-[60px]">
                      <img
                        src="/images/dailymix-one.jpeg"
                        className="w-[50px] h-[50px] rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-start items-start pl-3">
                        <p className="font-medium">Liked Songs</p>
                        <div className="flex flex-row justify-start items-start gap-2">
                          <p className="text-green-600 text-[17px]">
                            <RiPushpinFill />
                          </p>
                          <div className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium">
                            <p>Playlist</p>
                            <div className="flex justify-center items-center bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                            <p>260 songs</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 justify-end items-center text-green-600 text-[20px]">
                        <p>
                          <FaVolumeHigh />
                        </p>
                      </div>
                    </div>
                  </button>

                  {/*Playlist Two*/}
                  <button className=" flex justify-center items-center w-[370px] h-[67px] hover:bg-[#1A1A1A] ml-4 hover:rounded-lg">
                    <div className="flex flex-row justify-start items-center w-[350px] h-[60px]">
                      <img
                        src="/images/playlist-two.jpeg"
                        className="w-[50px] h-[50px] rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-start items-start pl-3">
                        <p className="font-medium">Old Songs</p>
                        <div className="flex flex-row justify-start items-start gap-2">
                          <p className="text-green-600 text-[17px]">
                            <RiPushpinFill />
                          </p>
                          <div className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium">
                            <p>Playlist</p>
                            <div className="flex justify-center items-center bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                            <p>Akira</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/*Playlist Three*/}
                  <button className=" flex justify-center items-center w-[370px] h-[67px] hover:bg-[#1A1A1A] ml-4 hover:rounded-lg">
                    <div className="flex flex-row justify-start items-center w-[350px] h-[60px]">
                      <img
                        src="/images/dailymix-three.jpeg"
                        className="w-[50px] h-[50px] rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-start items-start pl-3">
                        <p className="font-medium">Nostalgic Playlist</p>
                        <div className="flex flex-row justify-start items-start gap-2">
                          <p className="text-green-600 text-[17px]">
                            <RiPushpinFill />
                          </p>
                          <div className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium">
                            <p>Playlist</p>
                            <div className="flex justify-center items-center bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                            <p>Akira</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/*Playlist Four*/}
                  <button className=" flex justify-center items-center w-[370px] h-[67px] hover:bg-[#1A1A1A] ml-4 hover:rounded-lg">
                    <div className="flex flex-row justify-start items-center w-[350px] h-[60px]">
                      <img
                        src="/images/playlist-four.jpeg"
                        className="w-[50px] h-[50px] rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-start items-start pl-3">
                        <p className="font-medium">Mix Vibe</p>
                        <div className="flex flex-row justify-start items-start gap-2">
                          <p className="text-green-600 text-[17px]">
                            <RiPushpinFill />
                          </p>
                          <div className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium">
                            <p>Playlist</p>
                            <div className="flex justify-center items-center bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                            <p>Akira</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/*Playlist Five*/}
                  <button className=" flex justify-center items-center w-[370px] h-[67px] hover:bg-[#1A1A1A] ml-4 hover:rounded-lg">
                    <div className="flex flex-row justify-start items-center w-[350px] h-[60px]">
                      <img
                        src="/images/playlist-five.jpeg"
                        className="w-[50px] h-[50px] rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-start items-start pl-3">
                        <p className="font-medium">Chill Mood</p>
                        <div className="flex flex-row justify-start items-start gap-2">
                          <div className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium">
                            <p>Playlist</p>
                            <div className="flex justify-center items-center bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                            <p>Akira</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/*Playlist Six*/}
                  <button className=" flex justify-center items-center w-[370px] h-[67px] hover:bg-[#1A1A1A] ml-4 hover:rounded-lg">
                    <div className="flex flex-row justify-start items-center w-[350px] h-[60px]">
                      <img
                        src="/images/dailymix-four.jpeg"
                        className="w-[50px] h-[50px] rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-start items-start pl-3">
                        <p className="font-medium">Crying City Playlist</p>
                        <div className="flex flex-row justify-start items-start gap-2">
                          <div className="flex flex-row justify-start items-center gap-2 text-[14px] font-medium">
                            <p>Playlist</p>
                            <div className="flex justify-center items-center bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                            <p>39 songs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*Mid Container*/}
          <div className="flex flex-col bg-[#121212] w-[1015px] rounded-xl overflow-auto no-scrollbar">
            <div className="flex flex-row justify-start items-center font-medium text-[14px] gap-2 pt-7 px-7 py-5 sticky top-0 bg-[#121212]">
              <button className="bg-white text-black px-5 py-1 rounded-full">
                All
              </button>
              <button className="bg-[#232323] text-white px-5 py-1 rounded-full hover:text-black hover:bg-white">
                Music
              </button>
              <button className="bg-[#232323] text-white px-5 py-1 rounded-full hover:text-black hover:bg-white">
                Podcasts
              </button>
            </div>

            {/*Your Playlist*/}
            <div className="flex flex-col px-7 pt-2">
              <div className="flex flex-row gap-2">
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/dailymix-one.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Liked Songs
                  </p>
                </button>
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/dailymix-five.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Old Songs
                  </p>
                </button>
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/dailymix-two.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Nostalgic Playlist
                  </p>
                </button>
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/playlist-four.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Mix Vibe
                  </p>
                </button>
              </div>

              <div className="flex flex-row pt-2 gap-2">
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/dailymix-three.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Daily Mix 1
                  </p>
                </button>
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/playlist-two.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Daily Mix 2
                  </p>
                </button>
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/dailymix-four.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Daily Mix 3
                  </p>
                </button>
                <button className="flex flex-row items-center bg-[#2D2D2D] w-[235px] h-[50px] rounded-[5px] hover:bg-[#414141]">
                  <img
                    src="/images/playlist-five.jpeg"
                    className="w-[55px] h-[50px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                  />
                  <p className="text-white font-semibold text-[14px] pl-3">
                    Daily Mix 4
                  </p>
                </button>
              </div>
            </div>

            <div className="flex justify-start items-start px-7 pt-7">
              <p className="text-white text-[24px] font-bold">
                Made For Akiesha
              </p>
            </div>

            {/*Daily Playlist*/}
            <div className="flex flex-row px-4 py-2">
              <button className="hover:bg-[#1A1A1A] w-[200px] h-[235px] rounded-md py-3">
                <div className="flex flex-col justify-center items-center text-left">
                  <img
                    src="/images/dailymix-one.jpeg"
                    className="w-[170px] h-[140px] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-start gap-1 px-3 pt-2">
                    <p className="text-[16px] font-bold text-white">
                      Daily Mix 1
                    </p>
                    <p className="text-[12px] font-bold">
                      One Direction, Selena, Perry, Justine, Olly Murs and more.
                    </p>
                  </div>
                </div>
              </button>

              <button className="hover:bg-[#1A1A1A] w-[200px] h-[235px] rounded-md py-3">
                <div className="flex flex-col justify-center items-center text-left">
                  <img
                    src="/images/dailymix-two.jpeg"
                    className="w-[170px] h-[140px] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-start gap-1 px-3 pt-2">
                    <p className="text-[16px] font-bold text-white">
                      Daily Mix 2
                    </p>
                    <p className="text-[12px] font-bold">
                      One Direction, Selena, Perry, Justine, Olly Murs and more.
                    </p>
                  </div>
                </div>
              </button>

              <button className="hover:bg-[#1A1A1A] w-[200px] h-[235px] rounded-md py-3">
                <div className="flex flex-col justify-center items-center text-left">
                  <img
                    src="/images/dailymix-three.jpeg"
                    className="w-[170px] h-[140px] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-start gap-1 px-3 pt-2">
                    <p className="text-[16px] font-bold text-white">
                      Daily Mix 3
                    </p>
                    <p className="text-[12px] font-bold">
                      One Direction, Selena, Perry, Justine, Olly Murs and more.
                    </p>
                  </div>
                </div>
              </button>

              <button className="hover:bg-[#1A1A1A] w-[200px] h-[235px] rounded-md py-3">
                <div className="flex flex-col justify-center items-center text-left">
                  <img
                    src="/images/dailymix-four.jpeg"
                    className="w-[170px] h-[140px] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-start gap-1 px-3 pt-2">
                    <p className="text-[16px] font-bold text-white">
                      Daily Mix 4
                    </p>
                    <p className="text-[12px] font-bold">
                      One Direction, Selena, Perry, Justine, Olly Murs and more.
                    </p>
                  </div>
                </div>
              </button>

              <button className="hover:bg-[#1A1A1A] w-[200px] h-[235px] rounded-md py-3">
                <div className="flex flex-col justify-center items-center text-left">
                  <img
                    src="/images/dailymix-five.jpeg"
                    className="w-[170px] h-[140px] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-start gap-1 px-3 pt-2">
                    <p className="text-[16px] font-bold text-white">
                      Daily Mix 5
                    </p>
                    <p className="text-[12px] font-bold">
                      One Direction, Selena Gomez, Olly Murs and more.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex justify-start items-start px-7 py-4">
              <p className="text-white text-[24px] font-bold">
                Your Top Artists
              </p>
            </div>

            {/*Top Artist*/}
            <div className="flex flex-col px-3 mr-1 w-fit">
              <div className="flex flex-row justify-start">
                <button className="flex items-center justify-center hover:bg-[#1A1A1A] min-w-[200px] min-h-[235px] rounded-md">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/artist-one.jpeg"
                        className="w-[160px] h-[160px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                      <p className="text-[16px] font-bold text-white">
                        Kanaria
                      </p>
                      <p className="text-[12px] font-bold">Artist</p>
                    </div>
                  </div>
                </button>

                <button className="flex items-center justify-center hover:bg-[#1A1A1A] min-w-[200px] min-h-[235px] rounded-md">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/artist-three.jpeg"
                        className="w-[160px] h-[160px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                      <p className="text-[16px] font-bold text-white">
                        Kanaria
                      </p>
                      <p className="text-[12px] font-bold">Artist</p>
                    </div>
                  </div>
                </button>

                <button className="flex items-center justify-center hover:bg-[#1A1A1A] min-w-[200px] min-h-[235px] rounded-md">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/artist-six.jpeg"
                        className="w-[160px] h-[160px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                      <p className="text-[16px] font-bold text-white">
                        Kanaria
                      </p>
                      <p className="text-[12px] font-bold">Artist</p>
                    </div>
                  </div>
                </button>

                <button className="flex items-center justify-center hover:bg-[#1A1A1A] min-w-[200px] min-h-[235px] rounded-md">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/artist-four.jpeg"
                        className="w-[160px] h-[160px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                      <p className="text-[16px] font-bold text-white">
                        Kanaria
                      </p>
                      <p className="text-[12px] font-bold">Artist</p>
                    </div>
                  </div>
                </button>

                <button className="flex items-center justify-center hover:bg-[#1A1A1A] min-w-[200px] min-h-[235px] rounded-md">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/artist-five.jpeg"
                        className="w-[160px] h-[160px] rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                      <p className="text-[16px] font-bold text-white">Yoru</p>
                      <p className="text-[12px] font-bold">Artist</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/*Right Sidebar Container*/}
          <div className="flex flex-col bg-[#121212] w-[400px] h-full rounded-xl gap-4 px-5">
            <div className="flex flex-row justify-between items-center pt-5">
              <button className="text-white text-[16px] hover:underline underline-offset-4">
                夜に駆ける
              </button>
              <button className="flex justify-center items-center text-[20px] w-7 h-7 hover:bg-[#262626] hover:text-[#F3F3F3] rounded-full">
                <IoClose />
              </button>
            </div>

            <button className="flex justify-center items-center">
              <img
                src="/images/yaosobi.jpeg"
                className="w-[360px] h-[285px] rounded-lg object-cover"
              />
            </button>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col justify-start items-start">
                <button className="text-[22px] text-white font-bold hover:underline underline-offset-4">
                  夜に駆ける
                </button>
                <button className="text-[14px] font-semibold hover:underline underline-offset-4">
                  YAOSOBI
                </button>
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center text-green-600 text-[17px] pl-7 hover:scale-105 transition-all">
                  <FaCircleCheck />
                </div>
                <button className="text-[20px] hover:scale-110 transition-all hover:text-[#F3F3F3]">
                  <HiOutlineDotsHorizontal />
                </button>
              </div>
            </div>

            <button className="bg-[#242424] w-[360px] h-full rounded-lg ">
              <div className="w-[360px] h-[210px] bg-[url('/images/zaiko.jpeg')] bg-cover rounded-tr-lg rounded-tl-lg">
                <p className="flex justify-start text-[14px] text-white font-bold pt-3 pl-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                  About the artist
                </p>
              </div>

              <button className="flex justify-start text-[14px] font-bold text-white pt-5 pl-4 hover:underline underline-offset-4">
                YAOSOBI
              </button>
              <div className="flex flex-row justify-between items-center px-4 text-[14px] font-semibold pt-3">
                <p>8,827,143 monthly listeners</p>
                <button className="text-white text-[12px] font-bold border-white border-[1px] px-3 py-1 rounded-full hover:scale-105 transition-all">
                  Follow
                </button>
              </div>

              <div className="flex flex-1 justify-start items-start text-left w-[340px] text-[13px] font-medium px-4 pt-3">
                <p className="overflow-hidden truncate">
                  YAOSOBI is a band that creates "music from novels". The band
                  members are Ayase (composer) and ikura (vocals). Their first
                  single "Into The Night" released on November 2019.
                </p>
              </div>
            </button>
          </div>
        </div>

        {/*Footer*/}
        <div className="flex flex-row justify-between w-full h-[120px] pt-5 px-10 text-[#A7A7A7]">
          <div className="w-[380px]">
            <div className="flex flex-row items-center">
              <button>
                <img
                  src="/images/yaosobi.jpeg"
                  className="w-[60px] h-[60px] rounded-md object-cover"
                />
              </button>
              <div className="flex flex-col justify-start items-start pl-5">
                <button className="text-[14px] font-bold hover:underline underline-offset-4">
                  夜に駆ける
                </button>
                <button className="text-[12px] font-bold hover:underline underline-offset-4">
                  YAOSOBI
                </button>
              </div>

              <button className="flex justify-end items-end text-green-600 text-[17px] pl-7 hover:scale-105 transition-all">
                <FaCircleCheck />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <div className="flex flex-row justify-center items-center text-[#A7A7A7] text-[20px] gap-10">
              <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
                <FaShuffle />
              </button>
              <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
                <FaBackwardStep />
              </button>
              <button className="flex justify-center items-center bg-white w-9 h-9 rounded-full hover:scale-105 transition-all">
                <p className="text-black text-[30px]">
                  <BiPause />
                </p>
              </button>
              <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
                <FaForwardStep />
              </button>
              <button className="text-[18px] hover:scale-110 transition-all hover:text-[#F3F3F3]">
                <FaRepeat />
              </button>
            </div>

            <div className="flex flex-row justify-center items-center text-[12px] font-semibold gap-3 pb-3">
              <p>1:14</p>
              <div className="bg-[#4D4D4D] w-[600px] h-1 rounded-full">
                <div className="group flex items-center bg-white w-[130px] h-1 rounded-full hover:bg-green-600">
                  <div className="group-hover:bg-white w-3 h-3 ml-[118px] rounded-full"></div>
                </div>
              </div>
              <p>4:21</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center text-[#A7A7A7] text-[21px] gap-3">
            <button className="text-[17px] text-green-500 hover:scale-105 transition-all">
              <BsFilePlay />
            </button>
            <button className="text-[19px] hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <TbMicrophone2 />
            </button>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <HiOutlineQueueList />
            </button>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <PiDevices />
            </button>
            <button className="text-[25px] hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <IoVolumeLowOutline />
            </button>
            <div className="bg-[#4D4D4D] w-[90px] h-1 rounded-full">
              <div className="group flex items-center bg-white w-[50px] h-1 rounded-full hover:bg-green-600">
                <div className=" group-hover:bg-white w-3 h-3 ml-[38px] rounded-full"></div>
              </div>
            </div>
            <button className="hover:scale-110 transition-all hover:text-[#F3F3F3]">
              <MdFullscreenExit />
            </button>
          </div>
        </div>
      </div>

      {/*══════════════════════════════════════════════════════════════════════════ 
                              M O B I L E  C O N T A I N E R                                   
        ══════════════════════════════════════════════════════════════════════════*/}
      <div className="flex flex-col bg-[#121212] w-full text-[#A7A7A7] md:hidden">
        {/*Navbar Container*/}
        <div className="flex flex-row justify-start items-center w-full pt-3 px-2 h-[70px] bg-[#121212] text-[#A7A7A7] sticky top-0 left-0">
          <button className="flex justify-center items-center rounded-full w-[50px] h-[50px] hover:bg-[#1A1A1A]">
            <img
              src="/images/power.jpg"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
          </button>

          <div className="flex flex-row justify-start items-center font-medium text-[11px] gap-2 px-3">
            <button className="bg-[#1BD85D] text-black px-4 py-2 rounded-full">
              All
            </button>
            <button className="bg-[#232323] text-white px-4 py-2 rounded-full hover:text-black hover:bg-[#1BD85D]">
              Music
            </button>
            <button className="bg-[#232323] text-white px-4 py-2 rounded-full hover:text-black hover:bg-[#1BD85D]">
              Podcasts
            </button>
          </div>
        </div>

        {/*Body Container*/}
        <div className="flex flex-col">
          {/*Your Playlist*/}
          <div className="flex flex-col pt-5 gap-2 px-4">
            <div className="flex flex-row gap-2">
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/dailymix-one.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Liked Songs
                </p>
              </button>
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/dailymix-five.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Old Songs
                </p>
              </button>
            </div>

            <div className="flex flex-row gap-2">
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/dailymix-two.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Chill Mood
                </p>
              </button>
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/playlist-four.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Mix Vibes
                </p>
              </button>
            </div>

            <div className="flex flex-row gap-2">
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/dailymix-three.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Daily Mix 1
                </p>
              </button>
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/playlist-two.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Daily Mix 2
                </p>
              </button>
            </div>

            <div className="flex flex-row gap-2">
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/dailymix-four.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Daily Mix 3
                </p>
              </button>
              <button className="flex flex-row items-center bg-[#2D2D2D] w-[168px] h-[45px] rounded-[5px] hover:bg-[#414141]">
                <img
                  src="/images/playlist-five.jpeg"
                  className="w-[50px] h-[45px] object-cover rounded-tl-[5px] rounded-bl-[5px]"
                />
                <p className="text-white font-semibold text-[11px] pl-3">
                  Daily Mix 4
                </p>
              </button>
            </div>
          </div>

          <div className="flex justify-start items-start pt-6 px-4 pb-1">
            <p className="text-white text-[18px] font-bold">Made for Akiesha</p>
          </div>

          {/*Daily Playlist*/}
          <div className="flex flex-row pl-[6px] w-full h-full overflow-auto no-scrollbar">
            <button className="hover:bg-[#1A1A1A] min-w-[156px] h-[177px] rounded-md">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center w-full">
                  <img
                    src="/images/dailymix-one.jpeg"
                    className="w-[137px] h-[120px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left pl-3">
                  <p className="text-[11px] font-bold text-white">
                    Daily Mix 1
                  </p>
                  <p className="text-[10px] font-bold">Playlist</p>
                </div>
              </div>
            </button>

            <button className="hover:bg-[#1A1A1A] min-w-[156px] h-[177px] rounded-md">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center w-full">
                  <img
                    src="/images/dailymix-two.jpeg"
                    className="w-[137px] h-[120px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left pl-3">
                  <p className="text-[11px] font-bold text-white">
                    Daily Mix 2
                  </p>
                  <p className="text-[10px] font-bold">Playlist</p>
                </div>
              </div>
            </button>

            <button className="hover:bg-[#1A1A1A] min-w-[156px] h-[177px] rounded-md">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center w-full">
                  <img
                    src="/images/dailymix-three.jpeg"
                    className="w-[137px] h-[120px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left pl-3">
                  <p className="text-[11px] font-bold text-white">
                    Daily Mix 3
                  </p>
                  <p className="text-[10px] font-bold">Playlist</p>
                </div>
              </div>
            </button>

            <button className="hover:bg-[#1A1A1A] min-w-[156px] h-[177px] rounded-md">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center w-full">
                  <img
                    src="/images/dailymix-four.jpeg"
                    className="w-[137px] h-[120px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left pl-3">
                  <p className="text-[11px] font-bold text-white">
                    Daily Mix 4
                  </p>
                  <p className="text-[10px] font-bold">Playlist</p>
                </div>
              </div>
            </button>

            <button className="hover:bg-[#1A1A1A] min-w-[156px] h-[177px] rounded-md">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center w-full">
                  <img
                    src="/images/dailymix-five.jpeg"
                    className="w-[137px] h-[120px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left pl-3">
                  <p className="text-[11px] font-bold text-white">
                    Daily Mix 4
                  </p>
                  <p className="text-[10px] font-bold">Playlist</p>
                </div>
              </div>
            </button>
          </div>

          <div className="flex justify-start items-start pt-2 px-4">
            <p className="text-white text-[18px] font-bold">Your Top Artist</p>
          </div>

          {/*Top Artist*/}
          <div className="flex flex-col pl-[6px] w-full overflow-auto pt-2 no-scrollbar">
            <div className="flex flex-row justify-start">
              <button className="flex items-center justify-center bg-[#121212] min-w-[150px] h-[177px] rounded-md hover:bg-[#1A1A1A]">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/artist-one.jpeg"
                      className="w-[125px] h-[125px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                    <p className="text-[11px] font-bold text-white">Kanaria</p>
                    <p className="text-[10px] font-bold">Artist</p>
                  </div>
                </div>
              </button>

              <button className="flex items-center justify-center bg-[#121212] min-w-[150px] h-[177px] rounded-md hover:bg-[#1A1A1A]">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/artist-two.jpeg"
                      className="w-[125px] h-[125px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                    <p className="text-[11px] font-bold text-white">Kanaria</p>
                    <p className="text-[10px] font-bold">Artist</p>
                  </div>
                </div>
              </button>

              <button className="flex items-center justify-center bg-[#121212] min-w-[150px] h-[177px] rounded-md hover:bg-[#1A1A1A]">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/artist-three.jpeg"
                      className="w-[125px] h-[125px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                    <p className="text-[11px] font-bold text-white">Kanaria</p>
                    <p className="text-[10px] font-bold">Artist</p>
                  </div>
                </div>
              </button>

              <button className="flex items-center justify-center bg-[#121212] min-w-[150px] h-[177px] rounded-md hover:bg-[#1A1A1A]">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/artist-four.jpeg"
                      className="w-[125px] h-[125px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                    <p className="text-[11px] font-bold text-white">Kanaria</p>
                    <p className="text-[10px] font-bold">Artist</p>
                  </div>
                </div>
              </button>

              <button className="flex items-center justify-center bg-[#121212] min-w-[150px] h-[177px] rounded-md hover:bg-[#1A1A1A]">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/artist-five.jpeg"
                      className="w-[125px] h-[125px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-start items-start pt-2 text-left">
                    <p className="text-[11px] font-bold text-white">Yoru</p>
                    <p className="text-[10px] font-bold">Artist</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/*Footer Container*/}
        <div className="flex flex-row justify-center items-center bg-[#121212] text-[#A7A7A7] gap-10 py-3 sticky bottom-0 left-0">
          <button className="flex flex-col justify-center items-center gap-[2px] hover:text-white w-14">
            <GoHome className="text-[22px]" />
            <p className="text-[9px] font-medium">Home</p>
          </button>
          <button className="flex flex-col justify-center items-center gap-[2px] hover:text-white w-14">
            <FiSearch className="text-[22px]" />
            <p className="text-[9px] font-medium">Search</p>
          </button>
          <button className="flex flex-col justify-center items-center gap-[2px] hover:text-white w-14">
            <RiHeadphoneFill className="text-[22px]" />
            <p className="text-[9px] font-medium">Your Library</p>
          </button>
        </div>
      </div>


      
    </>
  );
}
export default App;
