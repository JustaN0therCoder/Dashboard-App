import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ReactHighCharts from 'react-highcharts';
import lineChartsConfig from '../Charts/Line';
import LineChartsTheme from '../Charts/LineTheme';
import barChartsConfig from '../Charts/barGraph';

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
    render() {
        return (
            <DisplayItem className="ContentBox">
              <SettingsIcon></SettingsIcon>
            </DisplayItem>
        );
    }
}
