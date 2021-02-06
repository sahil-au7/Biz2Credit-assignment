import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="lg">
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  );
}

export default App;
