import './styles/App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Blog from './pages/blog/blog'
import Skills from './pages/skills/skills'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
