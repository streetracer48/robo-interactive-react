import React, { Component } from 'react'
import {robots} from '../App/API';
import CardList from '../App/CardList';
export class App extends Component {
 
  render() {
    return (

      <div className='container'>
          <h1 style={{tc:'center'}}>Parent App</h1>
          
          <CardList robots={robots}/>
          
        
      </div>
    )
  }
}



export default App
