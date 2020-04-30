import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Guest from "./components/Guest";
import Alert from "./components/objects/Alert";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={true}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
        <Alert />
        <Fragment>
          <Route exact path='/' component={Landing} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/guest' component={Guest} />
          <Route exact path='/home' component={Home} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
