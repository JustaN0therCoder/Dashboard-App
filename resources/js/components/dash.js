import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ContentBox from './Boxes/Boxes.js';
import ContentBoxBarGraph from './Boxes/BoxesBarGraph.js';
import ContentBoxHalfPie from './Boxes/BoxesHalfPie.js';

const MainContainer = styled.div`
  width: 100vw;
  margin: auto;
  height: 100vh;
  background-color: #37474F;
  display: flex;
  justify-content: space-between;
`
const Sidebar = styled.div`
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
              <DashContianer className="container-fluid">
                <div className="row justify-content-md-center">
                  <div className="col-2"></div>
                  <ContentBox className="col-8"></ContentBox>
                  <div className="col-2"></div>
                </div>
                <div className="row">
                  <ContentBoxBarGraph></ContentBoxBarGraph>
                  <ContentBoxHalfPie></ContentBoxHalfPie>
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
