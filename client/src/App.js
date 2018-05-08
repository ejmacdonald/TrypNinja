import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddContent from "./pages/AddContent";
import StartStory from "./pages/StartStory";
import ChooseContentType from "./pages/ChooseContentType";
import TextStory from "./pages/TextStory";
import UserPage from "./pages/UserPage";
import Story from "./pages/Story";

const App = () => (
  <Router>
    <div className="container">
      {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddContent} />
        <Route exact path="/start" component={StartStory} />
        <Route exact path="/choosecontenttype" component={ChooseContentType} />
        <Route exact path="/addtext" component={TextStory} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/story" component={Story} />

      {/* </Switch> */}
    </div>
  </Router>
);

export default App;

