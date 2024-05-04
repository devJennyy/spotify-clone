import { FaVolumeHigh } from "react-icons/fa6";
import { RiPushpinFill } from "react-icons/ri";

interface Props {
  coverPhoto: string;
  title: string;
  hasPin: boolean;
  songCollection: string;
  hasMic: boolean;
}

const Playlist = ({
  coverPhoto,
  title,
  hasPin,
  songCollection,
  hasMic,
}: Props) => {
  return (
    <div className="flex w-full h-[70px] px-4">
      <button className="w-full hover:bg-[#1A1A1A] hover:rounded-lg">
        <div className="flex flex-row justify-between items-center w-full h-[70px] px-3">
          <div className="flex flex-row gap-4">
            <img
              src={coverPhoto}
              className="w-[50px] h-[50px] rounded-md object-cover"
            />

            <div className="flex flex-col items-start gap-[1px]">
              <p className="font-medium">{title}</p>

              <div className="flex flex-row items-start gap-2">
                {hasPin && (
                  <RiPushpinFill size={17} className="text-green-600" />
                )}

                <div className="flex flex-row items-center gap-2 text-[14px] font-medium">
                  <p>Playlist</p>
                  <div className="bg-[#A7A7A7] w-[5px] h-[5px] rounded-full"></div>
                  <p>{songCollection} songs</p>
                </div>
              </div>
            </div>
          </div>
          {hasMic && <FaVolumeHigh size={20} className="text-green-600" />}
        </div>
      </button>
    </div>
  );
};

export default Playlist;
