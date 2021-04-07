import React, { useEffect } from 'react';
import { inisializeLocal } from './../../localStorage/localStorage';
import { BrowserRouter, Switch, Route, } from "react-router-dom";

import Main from './../../pages/Main/Main';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import ListOfAllEvents from '../ListOfAllEvents/ListOfAllEvents';
import Footer from '../../components/footer/ Footer';
import SpecificEventPage from '../SpecificEvent/SpecificEvent';
import Favorites from './../Favorites/Favorites';
import Search from '../Search/Search';
import "./App.css";



function App() {

  useEffect(() => {
    inisializeLocal();
  }, []);

  return (
    <div >
      <BrowserRouter>
        <div className="app">
            <div>
              <Header />
              <Navbar />
            </div>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/list-of-all-events" exact component={ListOfAllEvents} />
                <Route path="/events/:id" exact component={SpecificEventPage} />
                <Route path="/search/:value" exact component={Search} />
                <Route path="/favorites" exact component={Favorites} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
