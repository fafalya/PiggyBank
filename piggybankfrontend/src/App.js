// import User from './components/User'

//import Header from "./Navigation/Header";
import { Route, Routes } from "react-router-dom";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Aims from "./pages/Aims"
import About from "./pages/About"
import Users from "./pages/Users"
import Registration from "./pages/Registration"
import Authorization from "./pages/Authorization";
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();
  return (
    <div className="App">
      {/* {(
        (cookies.get('access_token') === undefined || cookies.get('access_token') === '')) ?
          (
            (window.location.href !== 'http://localhost:3000/Authorization' && window.location.href !== 'http://localhost:3000/Registration') ?
            window.location.replace('http://localhost:3000/Authorization') : null
          ) : 
          (
            (window.location.href === 'http://localhost:3000/Authorization' || window.location.href === 'http://localhost:3000/Registration') ?
            window.location.replace('http://localhost:3000/') : null
          )
      } */}
      <Header/> 
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/aims" element = {<Aims/>}/>
          {/* <Route path="/about" element = {<About/>}/> */}
          <Route path="/users" element = {<Users/>}/>
          <Route path="*" element = {<NotFound/>}/>
          <Route path="/Authorization" element={<Authorization/>}/>
          <Route path="/Registration" element={<Registration/>}/>
        </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
