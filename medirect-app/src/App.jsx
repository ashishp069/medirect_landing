import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
// import LegalPage from "./pages/LegalPage"; 

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/medirect_landing">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        {/* <Route path="/terms-of-use" element={<LegalPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;