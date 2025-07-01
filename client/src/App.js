import './App.css';
import Books from "./components/Books.js";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import Login from './components/Loginform.js';
import Register from './components/Registerform.js';

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
      <Navbar />
      <Login />
      <About />
      {/* Welcome to our App! */}
      <hr>
      </hr>
      <h1 class="text-center"> Foods App </h1>
      <div>
      <Books books={books}/> 
      <h1 class="text-center"> Register Here </h1>
      <Register />
      </div>
    </div>
  );
}

export default App;
