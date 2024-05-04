import { BiPause } from "react-icons/bi";
import { BsFilePlay } from "react-icons/bs";
import {
  FaCircleCheck,
  FaShuffle,
  FaBackwardStep,
  FaForwardStep,
  FaRepeat,
} from "react-icons/fa6";
import { HiOutlineQueueList } from "react-icons/hi2";
import { IoVolumeLowOutline } from "react-icons/io5";
import { MdFullscreenExit } from "react-icons/md";
import { PiDevices } from "react-icons/pi";
import { TbMicrophone2 } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full h-[120px] px-10 text-[#A7A7A7]">
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

        <div className="flex flex-col justify-center items-center w-full gap-2 mt-3">
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
  );
};

export default Footer;
