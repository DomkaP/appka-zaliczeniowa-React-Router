import React, { useState } from 'react';
import './App.css';
 import Zamowienie from './components/zamowienie';
 import Skomponuj from './components/skomponuj';

 import koszyk from './components/koszyk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'




function App() {

  const [ pizza, setPizza ] = useState(null);

  const otrzymajPizze = pizza => {
    setPizza(pizza);
  }

  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          {/* <ul> */}
            {/* <li> */}
              <Link to="/">Instrukcja</Link>
            {/* </li> */}
            {/* <li> */}
              <Link to="/omnie">O mnie</Link>
            {/* </li> */}
            {/* <li> */}
              <Link to="/koszyk">Koszyk</Link>
            {/* </li> */}
          {/* </ul> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/omnie">
            <About />
          </Route>
          
          <Route path="/koszyk">
          
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <hr></hr>
      <div className="content">
        <Skomponuj otrzymajPizze={otrzymajPizze}/>
        <Zamowienie nowaPizza={pizza}/>
      </div>
      

    </div>
  );
}

function Home() {
  return <h2>Wybierz rozmiar pizzy i dowolną ilość składników po czym klinknij przycisk Dodaj. Po zakończeniu dodawania przejdź do koszyka.</h2>;
}

function About() {
  
  return <h2>Cześć! Jestem Dominika i zapraszam do skomponowania własnej pizzy.</h2>;
}

function Users() {
  return <h2>Koszyk pojawi się po złożeniu zamówienia.</h2>;
  
}


 export default App;
