import React from 'react';
import './App.css';
import Landing from './containers/Landing/Landing';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Landing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
