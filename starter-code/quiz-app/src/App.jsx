import { Routes, Route } from "react-router-dom";
import Accessibility from "./pages/AccessibilityPage";
import CSSPage from "./pages/CSSPage";
import HomePage from "./pages/HomePage";
import HTMLPage from "./pages/HTMLPage";
import JavascriptPage from "./pages/JavascriptPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/css" element={<CSSPage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/javascript" element={<JavascriptPage />} />
      </Routes>
    </div>
  );
}

export default App;
