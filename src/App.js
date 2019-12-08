import React, { Component } from 'react';
import DataBoard from './DataBoard';
import FormInput from './FormInput';

class App extends Component {
  state = {
    bands: [],
  };

  removeRecord = index =>{
    const { bands } = this.state;

    this.setState({
      bands: bands.filter((band, i) =>{
        return i !== index;
      }),
    });
  }

  render() {
    const { bands } = this.state;

    return (
      <div className="App">
        <DataBoard bandData={bands} removeRecord={this.removeRecord}></DataBoard>
        <FormInput></FormInput>
      </div>
    );
  }
}


export default App;
