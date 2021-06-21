import React from "react";
import { Route } from 'react-router-dom';

import Header from './components/Header'
import HomePage from './components/HomePage'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      <Route exact path='/'>
        <Header/>  
        <HomePage/>
      </Route>
      <Route path ='/pizza'>
        <Header/> 
        <Form/>
      </Route>
    </div>
  );
};

export default App;