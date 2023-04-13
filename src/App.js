import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Booking from "./pages/BookingPage";

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  </BrowserRouter>
  );
}

// https://github.com/joanskenderi/Meta-Front-End-Developer-Professional-Certificate/tree/master/Front-End%20Developer%20Capstone/Project%20foundations/Adding%20components/Module%20quiz:%20Project%20foundations
export default App;
