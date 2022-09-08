import "./App.scss";
import NavBar from "./layouts/NavBar";
import { Footer } from "./layouts/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <div className="pages"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        {/* </div> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
