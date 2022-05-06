import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/home">Home2</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/post/:id" element={<PostDetail />}></Route>
      </Routes>

    </div>
  );
}

export default App;
