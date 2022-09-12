import "./App.scss";
import NavBar from "./layouts/NavBar";
import { Footer } from "./layouts/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Network } from "./Pages/Network";
import { Job } from "./Pages/Job";
import { Message } from "./Pages/Message";
import { Profile } from "Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <div className="pages"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/network" component={Network} />
          <Route path="/jobs" component={Job} />
          <Route path="/messages" component={Message} />
          <Route path="/profile" component={Profile} />
        </Switch>
        {/* </div> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
