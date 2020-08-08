
import React, { Component } from 'react';
import {CommonContext} from './CommonContext'
class Main extends Component {
  
  render(){
    return (
      <CommonContext.Consumer >
{
    ({theme})=>(
        <h1>hello ,this is main page</h1>
    )
}        </CommonContext.Consumer>
    );
  }
}   

export default Main;