import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
/**component */
import LoadingScreen from './Components/LoadingScreen'
import Home from './Components/Home'
import WorksList from './Components/WorksList'
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Route path='/' exact>
          <LoadingScreen/>
        </Route>
        <Route path='/home'>
          <Header/>
          <Home/>
          <WorksList/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
