import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home';
import AboutMe from './AboutMe';
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}
