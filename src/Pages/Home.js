import React from "react";
import styled from "styled-components";
import "scss/home.scss";
import { BasicButton } from "components/Button/BasicButton";
import BackgroundTop from "assets/images/background/backgroundTop.svg";
import ProfileIcon from "assets/images/homepage/profileIcon.svg";
import Edit from "assets/images/utils/editIcon.svg";
import Line from "assets/images/utils/lineIcon.svg";
import ImageIcon from "assets/images/utils/imageIcon.svg";
import ShareIcon from "assets/images/utils/shareIcon.svg";

const Wrapper = styled.div`
  background: url(${(props) => props.bgImg}) no-repeat center center fixed;
  padding-top: 30px;
`;

export const Home = () => {
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
        <div className="lg:col-span-2 sm:col-span-1 mx-auto blog">
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
        </div>
        <div className="blog__mobile">
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
          <div className="flex justify-center items-center pt-3">
            <button className="_button flex items-center justify-center">
              <img src={ShareIcon} alt="ShareIcon" width="20" height="20" className="mr-1" />
              Share your hiring
            </button>
          </div>
        </div>
        <div className="suggested col-span-1">
          <p className="suggested__title">Suggested connection</p>
        </div>
      </div>
    </Wrapper>
  );
};
