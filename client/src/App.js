import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddContent from "./pages/AddContent";
import StartStory from "./pages/StartStory";
import ChooseContentType from "./pages/ChooseContentType";
import TextStory from "./pages/TextStory";
import UserPage from "./pages/UserPage";
import Story from "./pages/Story";
import TitleBar from "./components/TitleBar"

const App = () => [
  <Router>
    <div>
    <TitleBar/>
    <div className="wrapper container">
      {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddContent} />
        <Route exact path="/start" component={StartStory} />
        <Route exact path="/choosecontenttype/:id" component={ChooseContentType} />
        <Route exact path="/story/:id" component={Story} />
        <Route exact path="/addtext" component={TextStory} />
        <Route exact path="/user/:id" component={UserPage} />

      {/* </Switch> */}
    </div>
    </div>
  </Router>
];

export default App;

