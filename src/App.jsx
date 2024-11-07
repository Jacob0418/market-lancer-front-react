import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/aboutus/AboutUs'
import Home from './pages/main/Home'
import '@fontsource/overpass';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dev" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
