import React from 'react';
import './App.css';
import StarWars from './components/Starwars';

function App () {
  return (
      <div className="App">
        <h1>Star Wars Characters</h1>
        <div className ="StarWarz"> 
          <StarWars />
        </div>
      </div>
    );
  }
  
  export default App;
