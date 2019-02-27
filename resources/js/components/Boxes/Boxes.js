import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ReactHighCharts from 'react-highcharts';
import lineChartsConfig from '../Charts/Line';
import LineChartsTheme from '../Charts/LineTheme';
import barChartsConfig from '../Charts/barGraph';

ReactHighCharts.Highcharts.setOptions(LineChartsTheme);

var dummy = [{
    name: 'Opens',
    data: [Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)), Math.floor(Math.random() * Math.floor(100)),Math.floor(Math.random() * Math.floor(100)),Math.floor(Math.random() * Math.floor(100)),Math.floor(Math.random() * Math.floor(100)),Math.floor(Math.random() * Math.floor(100))]
  },
  {
      name: 'Clicks',
      data: [Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)), Math.floor(Math.random() * Math.floor(50)),Math.floor(Math.random() * Math.floor(50)),Math.floor(Math.random() * Math.floor(50)),Math.floor(Math.random() * Math.floor(50)),Math.floor(Math.random() * Math.floor(50))]
    }]

const DisplayItem = styled.div`
  height: 400px;
  width: 100%;
  background-color: #455A64;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin: 10px;
`
const SettingsIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  height: 10px;
  background-color: red;
  width: 10px;
`

export default class ContentBox extends Component {
    render() {
        return (
            <DisplayItem className="ContentBox">
              <SettingsIcon></SettingsIcon>
              <ReactHighCharts config={lineChartsConfig(dummy)}/>
            </DisplayItem>
        );
    }
}
