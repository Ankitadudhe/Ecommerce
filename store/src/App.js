import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Route} from 'react-router';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar'
import ProductList from './component/ProductList';
import Details from './component/Details';
import Default from './component/Default';
import Cart from './component/Cart';
import Modal from './component/Modal'
class App extends Component{
  render(){
    return(
    <React.Fragment>
<Navbar/>

<Router>

  <Route exact path="/" component={ProductList}/>
  <Route path="/detail" component={Details}/>
  <Route path="/cart" component={Cart}/>
</Router>
<Modal/>

    </React.Fragment>
    )
  }
}

export default App;

