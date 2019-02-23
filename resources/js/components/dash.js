import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ContentBox from './Boxes/Boxes.js';

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
            <div className="container">
            <MainContainer>
              <Sidebar></Sidebar>
              <DashContianer>
                <ContentBox></ContentBox>
              </DashContianer>
            </MainContainer>

            </div>
        );
    }
}

if (document.getElementById('mainComponent')) {
    ReactDOM.render(<Dash />, document.getElementById('mainComponent'));
}
