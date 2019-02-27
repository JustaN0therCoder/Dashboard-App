import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ContentBox from './Boxes/Boxes.js';
import ContentBoxBarGraph from './Boxes/BoxesBarGraph.js';
import ContentBoxHalfPie from './Boxes/BoxesHalfPie.js';
import ContentBoxFiller from './Boxes/BoxesFiller.js';

const MainContainer = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  background-color: #37474F;
  display: flex;
  justify-content: space-between;
`
const Sidebar = styled.div`
  width: 300px;
  background-color: #546E7A;
  box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`
const SidebarSpacer = styled.div`
  width: 300px;
  background-color: #546E7A;
  box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);

`
const DashContianer = styled.div`
  width: calc(100vw - 300px);
`

export default class Dash extends Component {
    render() {
        return (
            <div >
            <MainContainer>
              <Sidebar></Sidebar>
              <SidebarSpacer></SidebarSpacer>
              <DashContianer className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <ContentBox type="line"></ContentBox>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                    <ContentBox type="area"></ContentBox>
                    </div>
                    <div className="col">
                      <ContentBox type="halfPie"></ContentBox>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ContentBox type="bar"></ContentBox>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ContentBox type="halfPie"></ContentBox>
                    </div>
                    <div className="col">
                      <ContentBox type="bar"></ContentBox>
                    </div>
                  </div>
              </DashContianer>
            </MainContainer>
            </div>
        );
    }
}

if (document.getElementById('mainComponent')) {
    ReactDOM.render(<Dash />, document.getElementById('mainComponent'));
}
