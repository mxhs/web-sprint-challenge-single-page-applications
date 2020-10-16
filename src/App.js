import React from "react";
import { Route } from 'react-router-dom';

import Header from './Header'
import HomePage from './HomePage'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Route exact path='/'>
        <Header/>    
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
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