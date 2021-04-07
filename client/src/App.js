import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Wrapper>
      <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route path="/books/:id">
            <Detail />
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
