/* This is developed by ashwaniyadav15@gmail.com
 and you are free to use this code wherever you want */

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '/* add your JSX here */',
      output: '',
      err: ''
    }
  }

  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel.transform(code, {presets: ['es2015', 'react']}).code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
    
  }
  render(){
    return (
      <div>
        <header>
          <p>
            <i>JSX React Transform:-</i>{this.state.err}
          </p>
        </header>
        <div className="container">
          <textarea onChange={this.update.bind(this)} defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div> 
    )
  }
}
export default App