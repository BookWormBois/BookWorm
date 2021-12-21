// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from "./Components/Home";

function App() {
  return (
    <StyledApp className="App">

      <Home/>
      {/* <Route exact path="/" component={Home} /> */}

    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  max-width: 100%;
`