import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./style/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense } from "react";
import Footer from "./layout/Footer";
import Loading from "./components/Loading";
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Home = React.lazy(() => import("./pages/Home"));
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/About" exact />
            <Route component={Services} path="/Services" exact />
            <Route component={Projects} path="/Projects" exact />
            <Route component={Contact} path="/Contact" exact />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
