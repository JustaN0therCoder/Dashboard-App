import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ContentBox from './Boxes/Boxes.js';
import ContentBoxBarGraph from './Boxes/BoxesBarGraph.js';
import ContentBoxHalfPie from './Boxes/BoxesHalfPie.js';
import ContentBoxFiller from './Boxes/BoxesFiller.js';
import axios from 'axios';

const MainContainer = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  background-color: #37474F;
  display: flex;
  justify-content: space-between;
`
const Sidebar = styled.div`
  width: 150px;
  background-color: #546E7A;
  box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`
const SidebarSpacer = styled.div`
  width: 150px;
  background-color: #546E7A;
  box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);
`
const DashContianer = styled.div`
  width: calc(100vw - 150px);
`

export default class Dash extends Component {
  constructor() {
    super();
    this.state = {
      charts:[],
      btcPrice: null
    }
    console.log(super());

  }

  componentWillMount() {
    axios.get('/api/chart').then(response => {
      this.setState({
        charts: response.data
      })
    }).catch(errors => {
      console.log(errors);
    });
    console.log(this.state.charts);
    axios.get('/api/btcPrice').then(response => {
      this.setState({
        btcPrice: response.data.bpi
      })
    }).catch(errors => {
      console.log(errors);
    });
  }

    render() {
        return (
            <div >
            <MainContainer>
              <Sidebar></Sidebar>
              <SidebarSpacer></SidebarSpacer>
              <DashContianer className="container-fluid">
                {this.state.charts.map(chart =>
                  <div key={chart.id} className="row">
                    <div key={chart.id} className="col">
                      <ContentBox key={chart.id} type={chart.type} id={chart.id} label={chart.name}></ContentBox>
                    </div>
                  </div>
                )}

              </DashContianer>
            </MainContainer>
            </div>
        );
    }
}

if (document.getElementById('mainComponent')) {
    ReactDOM.render(<Dash />, document.getElementById('mainComponent'));
}
