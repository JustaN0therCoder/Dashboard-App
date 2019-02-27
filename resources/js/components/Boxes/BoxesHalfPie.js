import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ReactHighCharts from 'react-highcharts';
import HalfPie from '../Charts/HalfPie';
import LineChartsTheme from '../Charts/LineTheme';

ReactHighCharts.Highcharts.setOptions(LineChartsTheme);

var dummy = [{
      name: 'Reads',
      data: [Math.floor(Math.random() * Math.floor(100)),
        Math.floor(Math.random() * Math.floor(100)),
        Math.floor(Math.random() * Math.floor(100)),
        Math.floor(Math.random() * Math.floor(100)),
        Math.floor(Math.random() * Math.floor(100))],
      stack: 'Email'
    }, {
      name: 'Clicks',
      data: [Math.floor(Math.random() * Math.floor(50)),
        Math.floor(Math.random() * Math.floor(50)),
        Math.floor(Math.random() * Math.floor(50)),
        Math.floor(Math.random() * Math.floor(50)),
        Math.floor(Math.random() * Math.floor(50))],
      stack: 'Email'
    }]

const DisplayItem = styled.div`
  height: 400px;
  width: 600px;
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

export default class ContentHalfPie extends Component {
    render() {
        return (
            <DisplayItem className="ContentBox">
              <SettingsIcon></SettingsIcon>
              <ReactHighCharts config={HalfPie()}/>
            </DisplayItem>
        );
    }
}
