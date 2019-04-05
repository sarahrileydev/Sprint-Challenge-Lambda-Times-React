import React from 'react';
import styled, { css } from "styled-components";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TobBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
    @media (min-width: 1280px) {
      width: 1280px;
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  ${props =>
    props.primary &&
    css`
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
    `}
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  ${props =>
    props.secondary &&
    css`
      cursor: pointer;
      margin-right: 5%;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  ${props =>
    props.third &&
    css`
      cursor: pointer;
    `}
`;

const TopBar = () => {
  return (
    <TobBarDiv>
      <MainDiv>
        <LeftDiv>
          <LeftDiv primary>TOPICS</LeftDiv>
          <LeftDiv primary>SEARCH</LeftDiv>
        </LeftDiv>
        <CenterDiv>
          <CenterDiv secondary>GENERAL</CenterDiv>
          <CenterDiv secondary>BROWNBAG</CenterDiv>
          <CenterDiv secondary>RANDOM</CenterDiv>
          <CenterDiv secondary>MUSIC</CenterDiv>
          <CenterDiv secondary>ANNOUNCEMENTS</CenterDiv>
        </CenterDiv>
        <RightDiv>
          <RightDiv>LOG IN</RightDiv>
        </RightDiv>
      </MainDiv>
    </TobBarDiv>
  );
};


export default TopBar;