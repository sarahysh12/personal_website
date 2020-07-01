import React from 'react';
import './App.css';
import Landing from './containers/Landing/Landing';
import { BrowserRouter} from 'react-router-dom';
import Experience from './containers/Experience/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Landing/> */}
        <Experience/>
      </BrowserRouter>
    </div>
  );
}

export default App;
