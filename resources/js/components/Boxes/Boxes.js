import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ReactHighCharts from 'react-highcharts';
import lineChartsConfig from '../Charts/Line';
import LineChartsTheme from '../Charts/LineTheme';
import barChartsConfig from '../Charts/barGraph';
import halfPieChartsConfig from '../Charts/HalfPie';
import {dummyLine, dummyBar} from '../Boxes/DummyData';

ReactHighCharts.Highcharts.setOptions(LineChartsTheme);


const DisplayItem = styled.div`
  height: 400px;
  width: auto;
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
  constructor(props){
    super(props);
    this.state = {
      chartType: {
        bar: barChartsConfig(dummyBar),
        line: lineChartsConfig(dummyLine),
        halfPie: halfPieChartsConfig(),
      }
    }
  }

    render() {
      let chartType;

      if (this.props.type === "bar") {
        chartType = this.state.chartType.bar
      } else if (this.props.type === "line") {
        chartType = this.state.chartType.line
      } else if (this.props.type === "halfPie") {
        chartType = this.state.chartType.halfPie
      } else {
        chartType = 'EMPTY';
      }

        return (
            <DisplayItem className="ContentBox">
              <SettingsIcon></SettingsIcon>
              <ReactHighCharts config={chartType}/>
            </DisplayItem>
        );
    }
}
