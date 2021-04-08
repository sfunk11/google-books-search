import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper"
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Wrapper>
      <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Wrapper>
    </div>
    </BrowserRouter>
  );
}

export default App;
