import React from "react";
import {Switch, Route} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home";
import Favoritos from "./screens/Favoritos";
import NotFound from "./screens/NotFound";
import Detail from "./screens/Detail";

import Footer from "./components/Footer/Footer";




function App() {


  let cardData = [];

  let menu = [
    'Home',
    'menú1',
    'menú2',
    'menú3',
  ]


  return (
    <React.Fragment>
      <Navbar elementosMenu={menu}/>

      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/detail/id/:id' component={Detail} />
        <Route component={NotFound} />
      </Switch >

      <Footer /> 
    </React.Fragment>
  );
}

export default App;
