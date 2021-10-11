import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetToken } from "./redux/actions/auth";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetToken());
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
