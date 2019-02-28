import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import axios from 'axios';



const Settings = styled.div`
position: absolute;
height: 200px;
width: 100px;
top: 10px;
right: 10px;
z-index: 999;
background-color: #263238;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding: 10px;
box-sizing: border-box;
`

export default class SettingsBox extends Component {
  updateChart(e){
    console.log('howdy world!');
    let chart, name ;
    if(e.target.value === 'Bar') {
      chart = 1;
      name = "Bar";
    } else if(e.target.value === 'Line') {
      chart = 2;
      name = "Line";
    } else if(e.target.value === 'Half') {
      chart = 3;
      name = "Half";
    } else if(e.target.value === 'Area') {
      chart = 4;
      name = "Area"
    }
    axios.post('/api/chart', {chart, name} );
  }

    render() {
        return (
          <Settings>
            <form>
              <select onChange={this.updateChart.bind(this)} value={this.props.current}>
                <option value='Area'>Area</option>
                <option value='Half'>Half Pie</option>
                <option value='Line'>Line</option>
                <option value='Bar'>Bar</option>
              </select>
              <button onClick={this.props.close}>Close</button>
            </form>
          </Settings>
        );
    }
}
