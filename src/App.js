import React from 'react';
import './App.css';
import "./assets/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/animate.css";
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Details from './pages/details';
import Blog from './pages/blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </Router>
  );
}



export default App;
