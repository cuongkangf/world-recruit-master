import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Recruit from "./pages/Recruit";
import ApplyButton from "./components/ApplyButton";
import Form from "./components/main/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Recruit} />
          <Route path="/applyform" ></Route>
        </Switch>
        <ApplyButton />
      </Router>
      <div id="applyform">
        <Form />
      </div>
    </div>
  );
}

export default App;
