import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
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
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
