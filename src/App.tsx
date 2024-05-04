import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import "./App.css";
import { RiHeadphoneFill } from "react-icons/ri";
import Navbar from "./components/layout/Navbar";
import BrowseMusic from "./components/layout/BrowseMusic";
import Artists from "./components/layout/Artists";
import Footer from "./components/layout/Footer";
import YourLibrary from "./components/layout/YourLibrary";

function App() {
  return (
    <>
      {/*══════════════════════════════════════════════════════════════════════════ 
                               W E B  C O N T A I N E R                                   
        ══════════════════════════════════════════════════════════════════════════*/}
      <div className="md:flex hidden w-full h-full bg-black">
        <div className="flex flex-col bg-black w-[1840px] mx-auto h-full pt-3">
          {/*Navbar*/}
          <Navbar />

          {/*Body Container*/}
          <div className="flex flex-row justify-between w-full h-full text-[#A7A7A7] px-5 mt-3 gap-[5px] overflow-auto">
            {/*Library*/}
            <YourLibrary />

            {/*Mid Container*/}
            <BrowseMusic />

            {/*Right Sidebar Container*/}
            <Artists />
          </div>

          {/*Footer*/}
          <Footer />
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
