import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ReactHighCharts from 'react-highcharts';
import lineChartsConfig from '../Charts/Line';
import LineChartsTheme from '../Charts/LineTheme';

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
  height: 300px;
  width: 1400px;
  background-color: #455A64;
  border-radius: 5px;
`

export default class ContentBox extends Component {
    render() {
        return (
            <DisplayItem className="ContentBox">
              <ReactHighCharts config={lineChartsConfig(dummy)}/>
            </DisplayItem>
        );
    }
}
