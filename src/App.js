import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetToken } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetToken());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
