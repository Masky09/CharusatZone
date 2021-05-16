import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from './screens/LoginForm';
import SignupForm from './screens/SignupForm';
import Header from './components/Header';
import Notes from './screens/Notes';
import Books from './screens/Books';
import Syllabus from './screens/Syllabus';
import Dashboard from './screens/Dashboard';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
          <Route path='/notes' component={Notes} />
          <Route path='/books' component={Books} />
          <Route path='/syllabus' component={Syllabus} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
