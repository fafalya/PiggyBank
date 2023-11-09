// import User from './components/User'

//import Header from "./Navigation/Header";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Navigation/NavBar";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Aims from "./pages/Aims"
import About from "./pages/About"
import Users from "./pages/Users"

function App() {
  return (
    <div>
      <NavBar/> 
      {/* <Header/> */}
      {/* <h1>test</h1> */}
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/aims" element = {<Aims/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/users" element = {<Users/>}/>
          <Route path="*" element = {<NotFound/>}/>
        </Routes>

      
    </div>
  );
}

export default App;
