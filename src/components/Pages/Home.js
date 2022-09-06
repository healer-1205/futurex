import React from "react";
import styled from "styled-components";
import "scss/home.scss";
import backgroundTop from "assets/images/background/backgroundTop.svg";
import profileIcon from "assets/images/homepage/profileIcon.svg";
import Edit from "assets/images/utils/edit.svg";

const Wrapper = styled.div`
  background: url(${(props) => props.bgImg}) no-repeat center center fixed;
  padding-top: 30px;
`;

export const Home = () => {
  return (
    <Wrapper bgImg={backgroundTop} className="pt-7 px-20">
      <div className="grid grid-cols-4">
        <div className="mine">
          <div className="profile">
            <div className="top">
              <img src={profileIcon} alt="profileIcon" className="profileIcon" />
              <div className="info">
                <p className="name">dXX994</p>
                <div className="detailed">
                  <div className="section">
                    <p className="widgetLetter" style={{marginLeft: 10}}>Edit</p>
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
            <div className="bottom"></div>
          </div>
          <div className="wallet"></div>
        </div>
        <div className="col-span-2"></div>
        <div></div>
      </div>
    </Wrapper>
  );
};
