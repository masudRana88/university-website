import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Coursess from './pages/Coursess/Coursess';
import Instructors from './pages/Instructors/Instructors';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/courses">
            <Coursess/>
          </Route>
          <Route path="/instructors">
            <Instructors/>
          </Route>
          <Route path="/contsct">
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
