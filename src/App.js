import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  
  clicking = (event) => {
      // console.log(event.target.value)
      this.setState({
       currentColorId: event.target.value
      })
    }

state = {
  currentColorId: 0,
  colors: [{
    id: 0,
    background: 'white',
    font: 'black'
  }, {
    id: 1,
    background: 'red',
    font: 'white'
  }, {
    id: 2,
    background: 'orange',
    font: 'white'
  }, {
    id: 3,
    background: 'yellow',
    font: 'black'
  }, {
    id: 4,
    background: 'green',
    font: 'white'
  }, {
    id: 5,
    background: 'blue',
    font: 'white'
  }, {
    id: 6,
    background: 'indigo',
    font: 'white'
  }, {
    id: 7,
    background: 'violet',
    font: 'black'
  }]
}

  render() {
    const currentColorId = this.state.colors[this.state.currentColorId]
    return (
      <div className="App"style={{backgroundColor: currentColorId.background}} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Welcome to React</h1>
        </header>
           <section className="container">
            <form  >
              <h1 className="colorh1"  style={{color: currentColorId.font}}> Pick a color :</h1>
              <div className="form-group" >
                <select  onChange={this.clicking.bind(this)} className="form-control" id="exampleFormControlSelect1">
                    {this.state.colors.map(color =>{
                        return  <option key={color.id} value={color.id} >{color.background}</option>
                    })}
              </select>
            </div> 
        </form>
      </section>
      </div>
    );
  }
}

export default App;
