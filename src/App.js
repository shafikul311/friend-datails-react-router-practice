

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Friend/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import FriendDetails from './components/FriendDetails/FriendDetails';


function App() {



  return (
    <div >
      <Router>
        <Switch>

            
          <Route path="/home">
          <Home/>
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetails/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="*">
            <Nomatch/>  
          </Route>

        </Switch>

      </Router>
      
   
    </div>
  );
}

export default App;
