import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllPlayers from './components/AllPlayers';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AllPlayers/" component={AllPlayers} />
          <Route path="/Register/" component={Register} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
