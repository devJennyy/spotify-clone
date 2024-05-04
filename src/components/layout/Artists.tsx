import { FaCircleCheck } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Artists = () => {
  return (
    <div className="flex flex-col bg-[#121212] min-w-[400px] h-full rounded-xl px-5 py-5 gap-4 overflow-y-auto no-scrollbar">
      <div className="flex flex-row justify-between items-center">
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

      {/* About the Artist */}
      <button className="w-full h-fit bg-[#242424] rounded-lg">
        <div className="w-full h-[210px] bg-[url('/images/zaiko.jpeg')] bg-cover rounded-tr-lg rounded-tl-lg">
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

        <p className="w-[355px] text-[13px] font-medium px-4 py-3 text-justify">
          YAOSOBI is a band that creates "music from novels". The band members
          are Ayase (composer) and ikura (vocals). Their first single "Into The
          Night" released on November 2019.
        </p>
      </button>
    </div>
  );
};

export default Artists;
