import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Experience from './containers/Experience/Experience';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Arts from './containers/Arts/Arts';
import AboutMe from './containers/AboutMe/AboutMe';



class App extends Component {
  

  render() {
    let routes = (
      <Switch>
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/arts" component={Arts} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/" exact component={Landing}/>
      </Switch>
    );

    return (
      <BrowserRouter>
        <div className="App">
            {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
