import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
