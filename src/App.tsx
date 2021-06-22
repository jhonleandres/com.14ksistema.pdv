import * as React from 'react';
//import logo from './logo.svg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HashRouter,Link,Route,Switch} from "react-router-dom";
// eslint-disable-next-line sort-imports
import './App.css';

import Login from './pages/Login'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
