const BrowseMusic = () => {
  return (
    <div className="flex flex-col bg-[#121212] w-full h-full rounded-xl overflow-auto no-scrollbar">
      <div className="flex flex-row justify-start items-center w-full h-20 bg-[#121212] sticky top-0"></div>

      <div className="flex flex-row justify-start items-center min-h-20 bg-[#121212] font-medium text-[14px] gap-2 px-7 sticky top-0">
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
        <p className="text-white text-[24px] font-bold">Made For Akiesha</p>
      </div>

      <div className="flex flex-row px-4 py-2">
        <button className="hover:bg-[#1A1A1A] w-[200px] h-[235px] rounded-md py-3">
          <div className="flex flex-col justify-center items-center text-left">
            <img
              src="/images/dailymix-one.jpeg"
              className="w-[170px] h-[140px] object-cover rounded-md"
            />
            <div className="flex flex-col justify-start gap-1 px-3 pt-2">
              <p className="text-[16px] font-bold text-white">Daily Mix 1</p>
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
              <p className="text-[16px] font-bold text-white">Daily Mix 2</p>
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
              <p className="text-[16px] font-bold text-white">Daily Mix 3</p>
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
              <p className="text-[16px] font-bold text-white">Daily Mix 4</p>
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
              <p className="text-[16px] font-bold text-white">Daily Mix 5</p>
              <p className="text-[12px] font-bold">
                One Direction, Selena Gomez, Olly Murs and more.
              </p>
            </div>
          </div>
        </button>
      </div>

      <div className="flex justify-start items-start px-7 py-4">
        <p className="text-white text-[24px] font-bold">Your Top Artists</p>
      </div>

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
                <p className="text-[16px] font-bold text-white">Kanaria</p>
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
                <p className="text-[16px] font-bold text-white">Kanaria</p>
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
                <p className="text-[16px] font-bold text-white">Kanaria</p>
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
                <p className="text-[16px] font-bold text-white">Kanaria</p>
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
  );
};

export default BrowseMusic;
