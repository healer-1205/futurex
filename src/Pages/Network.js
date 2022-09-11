import React from "react";
import { ProfileCard } from "components/ProfileCard";
import SearchIcon from "assets/images/utils/searchIcon.svg";
import DownArrow from "assets/images/utils/downArrow.svg";
import RightArrow from "assets/images/utils/rightArrow.svg";
import Avatar from "assets/images/homepage/profileIcon.png";
import Thumbnail from "assets/images/utils/avatar.svg";

export const Network = () => {
  return (
    <div className="pt-7 lg:px-20 md: px-5 bg-[url('assets/images/background/Header.png')] bg-no-repeat bg-top bg-[length:100%_auto]">
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className="col-span-1">
          <div className="flex flex-col mx-5">
            <div className="bg-[#1C1B2E] rounded">
              <div className="px-3.5 py-5">
                <p className="font-['Poppins'] font-semibold non-italic text-[18px] text-white">Location</p>
                <div className="relative">
                  <img src={SearchIcon} alt="Search" className="absolute top-[22px] left-2.5" />
                  <input type="text" placeholder="Search location" className="bg-[#141422] rounded border-solid border-[0.8px] py-1.5 pl-12 w-full mt-3.5" />
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={DownArrow} alt="DropdownIcon" className="absolute top-11 left-64" />
              <select className="bg-[#1C1B2E] rounded mt-7 border-none font-['Poppins'] font-semibold non-italic text-[18px] text-white p-3 appearance-none focus-visible:outline-none w-full">
                <option>Status</option>
                <option>Connected</option>
                <option>Disconnected</option>
              </select>
            </div>
            <div className="relative">
              <img src={DownArrow} alt="DropdownIcon" className="absolute top-11 left-64" />
              <select className="bg-[#1C1B2E] rounded mt-7 border-none font-['Poppins'] font-semibold non-italic text-[18px] text-white p-3 appearance-none focus-visible:outline-none w-full">
                <option>Superpowers</option>
                <option>Status</option>
                <option>Status</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-3 mx-5">
          <div className="flex items-center justify-between ml-5">
            <p className="font-['Poppins'] font-bold non-italic text-2xl text-white">People you may meet in XXX conference</p>
            <div className="flex">
              <p className="font-['Poppins'] font-normal non-italic text-xl text-[#7AF7FF]">See all</p>
              <img src={RightArrow} alt="RightArrow" />
            </div>
          </div>
          <div className="grid grid-cols-4 mt-7">
            <ProfileCard avatar={Avatar} name="Bob Zhang" job="Research Assistant at Tsinghua University" university="Tsinghua University" thumbnail={Thumbnail}></ProfileCard>
            <ProfileCard avatar={Avatar} name="Bob Zhang" job="Research Assistant at Tsinghua University" university="Tsinghua University" thumbnail={Thumbnail}></ProfileCard>
            <ProfileCard avatar={Avatar} name="Bob Zhang" job="Research Assistant at Tsinghua University" university="Tsinghua University" thumbnail={Thumbnail}></ProfileCard>
            <ProfileCard avatar={Avatar} name="Bob Zhang" job="Research Assistant at Tsinghua University" university="Tsinghua University" thumbnail={Thumbnail}></ProfileCard>
          </div>
        </div>
      </div>
    </div>
  );
};
