import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sashin from "./pages/Sashin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sashin" element={<Sashin />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/electrical" element={<NotFound />} />
        <Route path="/database" element={<NotFound />} />
        <Route path="/operating-system" element={<NotFound />} />
        <Route path="/network" element={<NotFound />} />
        <Route path="/login" element={<NotFound />} />
        <Route path="/signup" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
