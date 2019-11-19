import React, { Component } from 'react';
import DataBoard from './DataBoard';

class App extends Component {
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
        <DataBoard bandData={bands}></DataBoard>
      </div>
    );
  }
}


export default App;
