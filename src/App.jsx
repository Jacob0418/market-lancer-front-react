import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/main/Home";
import "@fontsource/overpass";
import Overview from "./pages/NewFreelancer/Overview";
import Do from "./pages/NewFreelancer/Do";
import Dont from "./pages/NewFreelancer/Dont";
import Development from "./pages/main/Categories/Development";
import Services from "./pages/main/Services";
import Writing from "./pages/main/Categories/Writing";
import Photography from "./pages/main/Categories/Photography";
import DigitalMarketing from "./pages/main/Categories/DigitalMarketing";
import Design from "./pages/main/Categories/Desing";
import Footer from "./components/Footer/Footer";
import LoginRegister from "./components/Login/LoginRegister";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/categories/development" element={<Development />} />
        <Route path="/categories/writing" element={<Writing />} />
        <Route path="/categories/photography" element={<Photography />} />
        <Route
          path="/categories/digital&marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/categories/design" element={<Design />} />
        <Route path="/services/:context" element={<Services />} />

        {/* Inicio New Vendedor */}
        <Route path="/seller_onboarding/overview" element={<Overview />} />
        <Route path="/seller_onboarding/overview/do" element={<Do />} />
        <Route path="/seller_onboarding/overview/dont" element={<Dont />} />
        <Route path="/seller_onboarding/personal_info" element={<Home />} />
        <Route path="/seller_onboarding/professional_info" element={<Home />} />
        <Route path="/seller_onboarding/account_security" element={<Home />} />
        {/* Fin New Vendedor */}

        {/* Inicio New Servicio */}
        {/* <Route path="/seller_onboarding/overview" element={<Home />} />
        <Route path="/seller_onboarding/overview/do" element={<Home />} />
        <Route path="/seller_onboarding/overview/dont" element={<Home />} />
        <Route path="/seller_onboarding/personal_info" element={<Home />} />
        <Route path="/seller_onboarding/professional_info" element={<Home />} />
        <Route path="/seller_onboarding/account_security" element={<Home />} /> */}
        {/* Fin New Servicio */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
