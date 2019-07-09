import React from 'react';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import itemDetail from './itemDetail';
import './App.css';//switch makes the page stop the moment it reaches a certain point
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App" >
      <Nav/>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/shop' exact component={Shop}/>
      <Route path="/shop/:id" component={itemDetail}/>
    </div>
    </Router>
  );
}


const Home=()=>{
  return(
  <div>
    HOME POAP:b
  </div>);
}
export default App;
