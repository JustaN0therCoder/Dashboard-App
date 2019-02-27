import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import ReactHighCharts from 'react-highcharts';
import lineChartsConfig from '../Charts/Line';
import LineChartsTheme from '../Charts/LineTheme';
import barChartsConfig from '../Charts/barGraph';
import halfPieChartsConfig from '../Charts/HalfPie';
import areaChartConfig from '../Charts/Area'
import SettingsBox from '../Boxes/SettingsBox';

import {dummyLine, dummyBar, dummyArea} from '../Boxes/DummyData';

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
  height: 20px;
  width: 20px;
  background-image: url('/imgs/gears.png');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`
const SettingsPopup = styled.div`
  position: absolute;
  height: 200px;
  width: 100px;
  top: 10px;
  right: 10px;
  z-index: 999;
  background-color: #546E7A;
`

export default class ContentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSettings: false,
      displayType: barChartsConfig(dummyBar),
      currentValue: 'empty'
    }
  }

  toggleSettings() {
    console.log('hello World');
    this.setState({
      showSettings: !this.state.showSettings
    })
    console.log(this.state.showSettings);
  }

  updateChartType(e) {
    console.log('chart Updated!');
    if(e.target.value === 'Half') {
      this.setState({
        displayType: halfPieChartsConfig(),
        currentValue: 'Half'
      })
    } else if(e.target.value === 'Line') {
        this.setState({
          displayType: lineChartsConfig(dummyLine),
          currentValue: 'Line'
        })
    } else if(e.target.value === 'Bar') {
        this.setState({
          displayType: barChartsConfig(dummyBar),
          currentValue: "Bar"
        })
    } else if(e.target.value === 'Area') {
        this.setState({
          displayType: areaChartConfig(dummyArea),
          currentValue: 'Area'
        })
    }
    console.log(this.state.displayType);
  }

  componentDidMount() {
    let chartType;

    if (this.props.type === "bar") {
      this.setState({
        displayType: barChartsConfig(dummyBar),
        currentValue: "Bar"
      });
    } else if (this.props.type === "line") {
      this.setState({
        displayType: lineChartsConfig(dummyLine),
        currentValue: 'Line'
      });
    } else if (this.props.type === "halfPie") {
      this.setState({
        displayType: halfPieChartsConfig(),
        currentValue: 'Half'
      });
    } else if (this.props.type === "area") {
      this.setState({
        displayType: areaChartConfig(dummyArea),
        currentValue: 'Area'
      });
    } else {
      chartType = 'EMPTY';
    }
  }

  chartUpdateHandler(e) {
    this.setState({
      displayType: e.target.value
    })
  }

    render() {


        return (
            <DisplayItem className="ContentBox">
              <SettingsIcon onClick ={this.toggleSettings.bind(this)}></SettingsIcon>
              <ReactHighCharts config={this.state.displayType}/>
              {this.state.showSettings ?
                 <SettingsBox
                    close={this.toggleSettings.bind(this)}
                    update = {this.updateChartType.bind(this)}
                    current = {this.state.currentValue}
                   />
                 : null}
            </DisplayItem>
        );
    }
}
