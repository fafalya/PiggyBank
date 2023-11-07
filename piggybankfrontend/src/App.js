// import User from './components/User'

//import Header from "./Navigation/Header";
import { Route, Routes } from "react-router";
import NavBar from "./Navigation/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar/> 
      {/* <Header/> */}
      <h1>test</h1>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
