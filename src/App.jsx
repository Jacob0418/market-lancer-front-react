import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/main/Home";
import "@fontsource/overpass";
import Overview from "./pages/NewFreelancer/Overview";
import Do from "./pages/NewFreelancer/Do";
import Dont from "./pages/NewFreelancer/Dont";
import Development from "./pages/main/Development";
import Services from "./pages/main/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services/development" element={<Development />} />
        <Route path='/services/:context' element={<Services />} />
        {/* Inicio New Vendedor */}
        <Route path="/seller_onboarding/overview" element={<Overview />} />
        <Route path="/seller_onboarding/overview/do" element={<Do />} />
        <Route path="/seller_onboarding/overview/dont" element={<Dont />} />
        <Route path="/seller_onboarding/personal_info" element={<Home />} />
        <Route path="/seller_onboarding/professional_info" element={<Home />} />
        <Route path="/seller_onboarding/account_security" element={<Home />} />
        {/* Fin New Vendedor */}
        {/* Inicio New Servicio */}
        <Route path="/seller_onboarding/overview" element={<Home />} />
        <Route path="/seller_onboarding/overview/do" element={<Home />} />
        <Route path="/seller_onboarding/overview/dont" element={<Home />} />
        <Route path="/seller_onboarding/personal_info" element={<Home />} />
        <Route path="/seller_onboarding/professional_info" element={<Home />} />
        <Route path="/seller_onboarding/account_security" element={<Home />} />
        {/* Fin New Servicio */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
