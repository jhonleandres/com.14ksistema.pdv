import * as React from 'react';
import {HashRouter,Route} from "react-router-dom";

import Login from './pages/Login'

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Route path="/" exact component={ Login } />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
