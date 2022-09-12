import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "scss/home.scss";
import { Blog } from "components/Blog";
import { Connection } from "components/Connection"
import ProfileIcon from "assets/images/homepage/profileIcon.png";
import Edit from "assets/images/utils/editIcon.svg";
import Line from "assets/images/utils/lineIcon.svg";
import ImageIcon from "assets/images/utils/imageIcon.svg";
import ShareIcon from "assets/images/utils/shareIcon.svg";
import MoreIcon from "assets/images/utils/moreIcon.svg";
import Avatar from "assets/images/utils/avatar.svg";

export const Home = () => {

  const [tabState, setTabState] = useState("forYou");

  return (
    <div className="pt-7 xl:px-10 lg:px-7 px-5 bg-[url('assets/images/background/Header.png')] bg-no-repeat bg-top bg-[length:100%_auto]">
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <div className="mine col-span-1 mx-2.5">
          <div className="profile">
            <div className="top">
              <img src={ProfileIcon} alt="profileIcon" className="profileIcon" />
              <div className="info">
                <p className="name">dXX994</p>
                <div className="detailed">
                  <div className="section">
                    <p className="widgetLetter" style={{ marginLeft: 10 }}>Edit</p>
                    <img className="widgetIcon" src={Edit} alt="Edit" />
                  </div>
                  <div className="section">
                    <p className="widgetLetter">View</p>
                    <img className="widgetIcon" src={Edit} alt="View" />
                  </div>
                  <div className="section">
                    <p className="widgetLetter">Share</p>
                    <img className="widgetIcon" src={Edit} alt="Share" />
                  </div>
                </div>
              </div>
            </div>
            <div className="center grid grid-cols-3">
              <img src={Line} alt="Line" className="line1" />
              <img src={Line} alt="Line" className="line2" />
              <div className="section">
                <p className="number">8888</p>
                <p className="title">Connections</p>
              </div>
              <div className="section">
                <p className="number">18</p>
                <p className="title">Badges</p>
              </div>
              <div className="section">
                <p className="number">16</p>
                <p className="title">Referrals</p>
              </div>
            </div>
            <Link to="/profile" className="text-white mt-2.5 mb-5 border-white w-11/12 py-2 mx-auto rounded border-[1px] border-solid font-['Poppins'] non-italic font-medium font-xs text-center">
              Complete profile
            </Link>
          </div>
          <div className="wallet mx-auto">
            <p className="title">My Wallet</p>
            <Link to="/" className="text-[#7AF7FF] mt-5 border-[#7AF7FF] w-11/12 py-2 mx-auto rounded border-[1px] border-solid font-['Poppins'] non-italic font-medium font-xs text-center">
              Complete profile
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 sm:col-span-1  mx-2.5 blog">
          <div className="searchBox">
            <img src={ProfileIcon} alt="ProfileIcon" className="profileIcon" />
            <div className="mindArea">
              <div className="mindArea__inner">
                <input type="text" placeholder="What's on your mind?" className="inputField" />
              </div>
            </div>
            <button className="searchBox__button flex items-center justify-center xl:mr-5 lg:mr-3">
              <img src={ImageIcon} alt="ImageIcon" width="20" height="20" className="mr-1" />
              Add image
            </button>
            <button className="searchBox__button flex items-center justify-center">
              <img src={ShareIcon} alt="ShareIcon" width="20" height="20" className="mr-1" />
              Share your hiring
            </button>
          </div>
          <div className="searchBox__mobile">
            <div className="flex justify-center items-center pt-3">
              {/* <img src={ProfileIcon} alt="ProfileIcon" className="profileIcon" /> */}
              <div className="mindArea">
                <div className="mindArea__inner">
                  <input type="text" placeholder="What's on your mind?" className="inputField" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pt-3">
              <button className="_button flex items-center justify-center">
                <img src={ImageIcon} alt="ImageIcon" width="20" height="20" className="mr-1" />
                Add image
              </button>
            </div>
            <div className="flex justify-center items-center pt-3 pb-3">
              <button className="_button flex items-center justify-center">
                <img src={ShareIcon} alt="ShareIcon" width="20" height="20" className="mr-1" />
                Share your hiring
              </button>
            </div>
          </div>

          <div className="bg-[#1C1B2E] mt-5 grid grid-cols-3 rounded-sm h-11 justify-center items-center">
            <button onClick={() => setTabState("forYou")} className={`font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 ${tabState === 'forYou' ? 'text-[#9A66FF]' : 'text-white'}`}>For you</button>
            <button onClick={() => setTabState("following")} className={`font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 ${tabState === 'following' ? 'text-[#9A66FF]' : 'text-white'}`}>Following</button>
            <button onClick={() => setTabState("recent")} className={`font-['Poppins'] non-italic font-medium text-[14px] leading-6 text-center  mix-blend-normal opacity-80 ${tabState === 'recent' ? 'text-[#9A66FF]' : 'text-white'}`}>Recent</button>
          </div>
          <div className="mt-5 rounded bg-[#1C1B2E] px-4 py-6">
            {
              tabState === "forYou" &&
              <Blog avatar={Avatar} author="Wendy Zheng" intro="One-line introintro intro xxxxxx" date="Today at 9:03 AM" like={11} comment={9}>
                I am a recent college graduate looking to break into the world of Web3.Bring the professional profile ownership back to the users and take down Linkedin!I am a recent college graduate looking to break into the world of Web3.Bring the professional profile ownership back to the users and take down Linkedin!
              </Blog>
            }
            {
              tabState === "following" &&
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
              </div>
            }
            {
              tabState === "recent" &&
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
              </div>
            }
          </div>

        </div>
        <div className="suggested col-span-1 mx-2.5">
          <p className="suggested__title lg:mt-0 mt-5">Suggested connection</p>
          <div className="mt-5 grid grid-cols-2">
            <Connection name="Bob Zhang" job="Data Analyst at IQVIA" avatar={Avatar} />
            <Connection name="Bob Zhang" job="Data Analyst at IQVIA" avatar={Avatar} />
            <Connection name="Bob Zhang" job="Data Analyst at IQVIA" avatar={Avatar} />
            <Connection name="Bob Zhang" job="Data Analyst at IQVIA" avatar={Avatar} />
          </div>
          <div className="flex justify-center">
            <button type="button" className="loadButton flex items-center">
              Load more
              <img src={MoreIcon} alt="More" width="12" height="12" className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
