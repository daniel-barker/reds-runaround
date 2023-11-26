import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import OurServicesScreen from "./screens/OurServicesScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
        <Route path="/services" element={<OurServicesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
