import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Header from "./layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense } from "react";
import Footer from "./layout/Footer";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Project = React.lazy(() => import("./pages/Project"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <ToastProvider>
          <Header />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route component={Home} path="/" exact />
              <Route component={About} path="/About" exact />
              <Route component={Services} path="/Services" exact />
              <Route component={Projects} path="/Projects" exact />
              <Route component={Project} path="/Project/:id" />
              <Route component={Contact} path="/Contact" exact />
            </Switch>
          </Suspense>
          <Footer />
        </ToastProvider>

        <ScrollToTop value={150} />
      </Router>
    </div>
  );
}

export default App;
