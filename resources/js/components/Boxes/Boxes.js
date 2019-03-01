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
      currentValue: 'empty',
      rand: 1
    }
  }

  toggleSettings() {
    console.log('hello World');
    this.setState({
      showSettings: !this.state.showSettings
    })
    console.log(this.state.showSettings);
    console.log(this.props.id);
  }

  componentDidMount() {
    let chartType;
    if (this.props.type === 1) {
      this.setState({
        displayType: barChartsConfig(dummyBar),
        currentValue: "Bar"
      });
    } else if (this.props.type === 2) {
      this.setState({
        displayType: lineChartsConfig(this.state.lineData),
        currentValue: 'Line'
      });
    } else if (this.props.type === 3) {
      this.setState({
        displayType: halfPieChartsConfig('test'),
        currentValue: 'Half'
      });
    } else if (this.props.type === 4) {
      this.setState({
        displayType: areaChartConfig(dummyArea),
        currentValue: 'Area'
      });
    } else {
      chartType = 'EMPTY';
    }
    console.log("LD: " + this.props.lineData);
  }

  chartUpdateHandler(e) {
    this.setState({
      displayType: e.target.value
    })
  }
  updateChartType(e){
    let chart, name ;
    let id = this.props.id;
    if(e.target.value === 'Bar') {
      chart = 1;
      this.setState({
        displayType: barChartsConfig(),
        currentValue: 'Bar'
      })
    } else if(e.target.value === 'Line') {
      chart = 2;
      this.setState({
        displayType: lineChartsConfig(),
        currentValue: 'Line'
      })
    } else if(e.target.value === 'Half') {
      chart = 3;
      this.setState({
        displayType: halfPieChartsConfig(),
        currentValue: 'Half'
      })
    } else if(e.target.value === 'Area') {
      chart = 4;
      this.setState({
        displayType: areaChartConfig(dummyArea),
        currentValue: 'Area'
      })
    }
    console.log(this.state.currentValue);
    axios.post('/api/chart', {chart, name, id} );
  }
  componentWillMount() {
    this.setState({
      lineData: this.props.lineData
    })
  }

    render() {
        return (
            <DisplayItem className="ContentBox" rand={this.state.rand}>
              <SettingsIcon onClick ={this.toggleSettings.bind(this)}></SettingsIcon>
              <ReactHighCharts config={this.state.displayType} current={this.state.currentValue}/>
              {this.state.showSettings ?
                 <SettingsBox
                    close={this.toggleSettings.bind(this)}
                    update = {this.updateChartType.bind(this)}
                    current = {this.state.currentValue}
                    id={this.props.id}
                    updateType={this.updateChartType.bind(this)}
                   />
                 : null}
            </DisplayItem>
        );
    }
}
