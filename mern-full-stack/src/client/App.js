import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateDish from './CreateDish';
import EditDish from './EditDish';
import DishList from './DishList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={DishList}/>
        {/*pass the id through the EditDish component*/}
        <Route path="/edit-dish/:id" component={EditDish}/>
        {/*set the path to create a new dish to Createdish component*/}
        <Route path="/create-dish" component={CreateDish}/>
      </div>
    </HashRouter>
  );
};

export default App;
