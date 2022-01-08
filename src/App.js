import React from "react";
import "./App.css";
import "./styles/quiz.css";
import Home from "./Components/Home/Home";
import Videos from "./Components/Home/Videos/Videos";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Quiz from "./Quiz/Quiz";
import Result from "./Components/Result/Result";
import AuthProvider from "./Components/Contexts/AuthContext";
import PrivateRoute from "./Components/PrivateRoute.js/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PublicRoute path="/signup">
              <Signup />
            </PublicRoute>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/result">
              <Result />
            </Route>
            <PrivateRoute path="/quiz">
              <Quiz />
            </PrivateRoute>
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
