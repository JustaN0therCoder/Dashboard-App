import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';



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

    render() {
        return (
          <Settings>
          <select onChange={this.props.update} value={this.props.current}>
            <option value='Area'>Area</option>
            <option value='Half'>Half Pie</option>
            <option value='Line'>Line</option>
            <option value='Bar'>Bar</option>
          </select>
          <button onClick={this.props.close}>Close</button>
          </Settings>
        );
    }
}
