import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "scss/home.scss";
import { BasicButton } from "components/Button/BasicButton";
import { Blog } from "components/Blog";
import { Connection } from "components/Connection"
import BackgroundTop from "assets/images/background/backgroundTop.svg";
import ProfileIcon from "assets/images/homepage/profileIcon.svg";
import Edit from "assets/images/utils/editIcon.svg";
import Line from "assets/images/utils/lineIcon.svg";
import ImageIcon from "assets/images/utils/imageIcon.svg";
import ShareIcon from "assets/images/utils/shareIcon.svg";
import Avatar from "assets/images/utils/avatar.svg";

const Wrapper = styled.div`
  background: url(${(props) => props.bgImg}) no-repeat center center fixed;
  padding-top: 30px;
`;

export const Home = () => {

  const [tabState, setTabState] = useState("forYou");

  return (
    <Wrapper bgImg={BackgroundTop} className="pt-7 lg:px-20 md: px-5">
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <div className="mine col-span-1">
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
            <BasicButton color="#ffffff" marginTop="10px" borderColor="#FFFFFF">
              Complete profile
            </BasicButton>
          </div>
          <div className="wallet mx-auto">
            <p className="title">My Wallet</p>
            <BasicButton marginTop="20px" color="#7AF7FF" borderColor="#7AF7FF">
              Complete profile
            </BasicButton>
          </div>
        </div>
        <div className="lg:col-span-2 sm:col-span-1 mx-auto w-full blog">
          <div className="searchBox">
            <img src={ProfileIcon} alt="ProfileIcon" className="profileIcon" />
            <div className="mindArea">
              <div className="mindArea__inner">
                <input type="text" placeholder="What's on your mind?" className="inputField" />
              </div>
            </div>
            <button className="searchBox__button flex items-center justify-center mr-5">
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
        <div className="suggested col-span-1">
          <p className="suggested__title mx-5">Suggested connection</p>
          <div className="mt-5 grid grid-cols-2">
            <Connection name="Bob Zhang" job="Data Analyst at IQVIA" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
