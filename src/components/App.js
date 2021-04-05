import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import MainPage from "./main/MainPage";
import Footer from "./footer/ Footer";
import "./App.css";


function App() {
  return (
    <div >
      <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={MainPage} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
