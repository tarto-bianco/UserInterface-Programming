import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/pages/About.js";
import Navbar from "./components/pages/Navbar.js";
import Login from './components/pages/Loginform.js';
import Register from './components/pages/Registerform.js';
import Profile from './components/pages/Profilepage.js';

const books = [
    {
        id: 12334,
        title: "Interview With the Vampire"
    },
    {
        id: 19392,
        title: "Hunger Games"
    },
    {
        id: 22323,
        title: "Brave New World"
    },
]

function App() {
  return (
    <div className="App">
      {/* Welcome to our App! */}
      {/* <hr>
      </hr> */}
      {/* <h1 class="text-center"> Foods App </h1> */}
      <div> 
      {/* <h1 class="text-center"> Register Here </h1> */}
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Navbar />}>
          <Route  index element={<About />}/> 
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <hr></hr>
      </div>
    </div>
  );
}

export default App;