import React from 'react'
import './App.css'
import Navbar from './Navbar';
import Headerapp from './Headerapp';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cardcontainer from './Cardcontainer';
import Howcontainer from './Howcontainer';
import PauseOnHover from './Items';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Featured from './Featured';
import Search from './Search';
import Deal from './Deal';
import Footer from './Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Headerapp />
        <Cardcontainer />
        <Howcontainer />
        <PauseOnHover />
        <Featured />
        <Search />
        <Deal />
        <Footer />
        <Switch>
          <Route path='/Signin' exact  />
          <Route path='/Signup' exact  />
        </Switch>
      </Router>
    </>
  );
 
}

export default App;
