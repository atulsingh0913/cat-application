import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AllCategories from './components/AllCategories';
import CategoryPage from './components/CategoryPage';
import CatDetails from './components/CatDetails';

const CatExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={AllCategories}/>
      <Route path="/cat/:id" component={CategoryPage}/>
      <Route path="/catdetails/:id" component={CatDetails}/>
    </div>
  </Router>
)

export default CatExample