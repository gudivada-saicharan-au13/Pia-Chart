import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Page1 />
          </Route>

          <Route path="/page2" exact>
            <Page2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};
