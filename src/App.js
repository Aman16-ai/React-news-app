import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/"><News country={"in"} key={"general"} category={"general"}/></Route>
        <Route exact path="/sports/"><News country={"in"} key={"sports"} category={"sports"}/></Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
