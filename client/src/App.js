import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
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
