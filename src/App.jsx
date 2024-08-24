import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}
