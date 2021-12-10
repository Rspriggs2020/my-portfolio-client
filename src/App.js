import { BrowserRouter as Router, Switch, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './landing/NavBar'
import Home from './landing/Home'
import About from './landing/About'
import Footer from './landing/Footer'
import Contact from "./landing/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
