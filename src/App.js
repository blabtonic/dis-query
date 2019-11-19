import React, { Component } from 'react';
import DataBoard from './DataBoard';

class App extends Component {
  state = {
    bands: [
      {
        album: 'Genocide',
      },
    ],
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
    const bands = [
      {
        album: 'Mandrakes',
        name: 'Foo', 
      },
      {
        album: 'SonicFire',
        name: 'abyss',
      }
    ];

    return (
      <div className="App">
        <DataBoard bandData={bands} removeRecord={this.removeRecord}></DataBoard>
      </div>
    );
  }
}


export default App;
