import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Card from './Components/Card';
import Description from './Components/Description';



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path ='/' component ={Card}/>
        <Route path="/description" component ={Description}/>
      </Router>
       
    </div>
  );
}

export default App;
