
import { Route, Routes } from "react-router-dom";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Aims from "./pages/Aims"
import Users from "./pages/Users"
import Registration from "./pages/Registration"
import Authorization from "./pages/Authorization";
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();
  return (
    <div className="App">
      <Header/> 
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/aims" element = {<Aims/>}/>
          {/* <Route path="/users" element = {<Users/>}/> */}
          <Route path="*" element = {<NotFound/>}/>
          <Route path="/Authorization" element={<Authorization/>}/>
          <Route path="/Registration" element={<Registration/>}/>
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
