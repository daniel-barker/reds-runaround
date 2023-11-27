import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import OurServicesScreen from "./screens/OurServicesScreen";
import FAQScreen from "./screens/FAQScreen";
import SafetyScreen from "./screens/SafetyScreen";
import ParksScreen from "./screens/ParksScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
        <Route path="/services" element={<OurServicesScreen />} />
        <Route path="/faqs" element={<FAQScreen />} />
        <Route path="/safety" element={<SafetyScreen />} />
        <Route path="/parks" element={<ParksScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
