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
        {/* Inicio New Vendedor */}
          <Route path="/seller_onboarding/overview" element={<Home/>} />
          <Route path="/seller_onboarding/overview/do" element={<Home/>} />
          <Route path="/seller_onboarding/overview/dont" element={<Home/>} />
          <Route path="/seller_onboarding/personal_info" element={<Home/>} />
          <Route path="/seller_onboarding/professional_info" element={<Home/>} />
          <Route path="/seller_onboarding/account_security" element={<Home/>} />
        {/* Fin New Vendedor */}
        {/* Inicio New Servicio */}
        <Route path="/seller_onboarding/overview" element={<Home/>} />
          <Route path="/seller_onboarding/overview/do" element={<Home/>} />
          <Route path="/seller_onboarding/overview/dont" element={<Home/>} />
          <Route path="/seller_onboarding/personal_info" element={<Home/>} />
          <Route path="/seller_onboarding/professional_info" element={<Home/>} />
          <Route path="/seller_onboarding/account_security" element={<Home/>} />
        {/* Fin New Servicio */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
