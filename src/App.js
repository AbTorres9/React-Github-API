import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//REACT ROUTER
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

//TOAST
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//FIIREBASE
import firebase from "firebase/app";
import "firebase/auth";

//COMPONENTS
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
