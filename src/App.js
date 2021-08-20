import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import productContext from './utils/productContext';
import Home from './pages/Home';

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <productContext.Provider value={{ showSearchBar, setShowSearchBar }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </productContext.Provider>
  );
}

export default App;
