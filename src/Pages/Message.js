import React from "react";
import SearchIcon from "assets/images/message/searchIcon.svg";
import PlusIcon from "assets/images/message/plusIcon.svg";

export const Message = () => {
  return (
    <div className="pt-7 xl:px-10 lg:px-7 md:px-5 bg-[url('assets/images/background/Header.png')] bg-no-repeat bg-top bg-[length:100%_auto]">
      <div className="grid grid-cols-3">
        <div className="col-span-1 border-r-2 border-solid border-[#ffffff4d] border-opacity-30">
          <div className="mx-3 flex items-center justify-between">
            <div className="relative">
              <img src={SearchIcon} alt="SearchIcon" className="absolute top-1.5 left-1.5" />
              <input type="text" placeholder="Search" className="bg-[#141422] rounded border-solid border-[0.8px] py-1.5 pl-12 w-full" />
            </div>
            <img src={PlusIcon} alt="PlusIcon" className="cursor-pointer" width="35" height="35" />
          </div>
          <div className="mt-5"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};
