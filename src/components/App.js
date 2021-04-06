import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import MainPage from "./main/MainPage";
import Footer from "./footer/ Footer";
import SpecificEventPage from "./specificEventPage/SpecificEventPage";
import "./App.css";



function App() {
  return (
    <div >
      <BrowserRouter>
        <div className="app">
            <div>
              <Header />
              <Navbar />
            </div>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/events/:id" exact component={SpecificEventPage} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
