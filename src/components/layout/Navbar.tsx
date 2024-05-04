import { FaReact, FaRegBell, FaUsers } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
