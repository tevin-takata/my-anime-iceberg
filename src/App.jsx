import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home';
import './App.css'

export default function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}
